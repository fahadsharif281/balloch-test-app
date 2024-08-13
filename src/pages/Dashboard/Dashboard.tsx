import { useEffect, useState } from "react";
import Card from "./Card/Card";
import classes from "./Dashboard.module.scss";
import AppGoogleMap from "../../components/googleMap/AppGoogleMap";
import { useDispatch, useSelector } from "react-redux";
import { getAllMapLocations } from "../../redux/actions/dashboard.action";
import ApexChart from "../../components/graph/ApexChart";
import {
  resetDashboard,
  setAllUsers,
  setDogWalk,
  setTotalToilet,
  setWalkingRoute,
} from "../../redux/reducers/dashboardReducer";
import {
  getAllLocationsByTypeApiCall,
  getAllUsersDashboard,
} from "../../services/general.services";
const Dashboard = () => {
  const dispatch = useDispatch<any>();
  const {
    allMapLocations,
    allUsers,
    walkingRouteCount,
    dogWalkCount,
    toiletCount,
  } = useSelector((state: any) => state.root.dashboard);
  const [focus, setFocus] = useState("graph");
  const cardContent = [
    {
      heading: "Total Users",
      subheading: allUsers?.length ?? 0,
    },
    {
      heading: "Total Walking Route",
      subheading: walkingRouteCount,
    },
    {
      heading: "Total Dog Walk",
      subheading: dogWalkCount,
    },
    {
      heading: "Total Toilet",
      subheading: toiletCount,
    },
  ];
  const getAllUsersApiCall = () => {
    getAllUsersDashboard().then((response) => {
      dispatch(setAllUsers(response?.data?.userDetails));
    });
    getAllLocationsByTypeApiCall("walking-route").then((res) => {
      dispatch(setWalkingRoute(res?.data?.result?.length));
    });
    getAllLocationsByTypeApiCall("dog-walk").then((res) => {
      dispatch(setDogWalk(res?.data?.result?.length));
    });
    getAllLocationsByTypeApiCall("toilet").then((res) => {
      dispatch(setTotalToilet(res?.data?.result?.length));
    });
  };
  useEffect(() => {
    dispatch(getAllMapLocations());
    getAllUsersApiCall();
    return () => {
      dispatch(resetDashboard());
    };
  }, []);
  return (
    <div className={classes.container}>
      <div className={classes.mainheading}>Dashboard</div>
      <div className={classes.card_section}>
        {cardContent?.map((item, index) => {
          return (
            <>
              <Card
                id={index.toString()}
                heading={item.heading}
                subheading={item.subheading}
              />
            </>
          );
        })}
      </div>
      <div className={classes.location_section}>
        <div className={classes.main_heading}>
          <div className={classes.sub_heading}>All Locations</div>
          <div className={classes.button_section}>
            <button
              onClick={() => setFocus("graph")}
              className={
                focus === "graph" ? classes.focus_button : classes.button
              }
            >
              Graph
            </button>
            <button
              onClick={() => setFocus("map")}
              className={
                focus === "map" ? classes.focus_button : classes.button
              }
            >
              Map
            </button>
          </div>
        </div>
        <div className={classes.locations_container}>
          {focus === "graph" ? (
            <>
              <ApexChart />
            </>
          ) : (
            <>
              <AppGoogleMap type="noMarker" allMapLocations={allMapLocations} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
