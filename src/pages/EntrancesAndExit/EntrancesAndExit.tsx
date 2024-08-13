import React, { useEffect } from "react";
import DetailCard from "../../components/card/DetailCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllLocationsByType } from "../../redux/actions/locations.action";
import { setSelectedLocation } from "../../redux/reducers/locationReducer";
import useGetTitleRoute from "../../utils/hooks/useGetTitleRoute";

const EntrancesAndExit = () => {
  const dispatch = useDispatch<any>();
  const { title } = useGetTitleRoute("walking-route");
  const { allLocations, isLoading } = useSelector(
    (state: any) => state.root.location
  );
  useEffect(() => {
    const params = {
      type: "walking-route",
    };
    dispatch(setSelectedLocation(""));
    dispatch(getAllLocationsByType(params));
  }, []);
  return (
    <>
      {!isLoading && (
        <div>
          <DetailCard
            results={allLocations}
            title={title}
            addTo="/entrance-exit/select-location"
            viewTo="/entrance-exit/view-details"
            editTo="/entrance-exit/edit-details"
          />
        </div>
      )}
    </>
  );
};

export default EntrancesAndExit;
