import React, { useEffect } from "react";
import DetailCard from "../../components/card/DetailCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllLocationsByType } from "../../redux/actions/locations.action";
import { LinearProgress } from "@mui/material";
import { setSelectedLocation } from "../../redux/reducers/locationReducer";
import useGetTitleRoute from "../../utils/hooks/useGetTitleRoute";

const DangerousWaters = () => {
  const dispatch = useDispatch<any>();
  const { title } = useGetTitleRoute("entrance");
  const { allLocations, isLoading } = useSelector(
    (state: any) => state.root.location
  );
  useEffect(() => {
    const params = {
      type: "entrance",
    };
    dispatch(setSelectedLocation(""));
    dispatch(getAllLocationsByType(params));
  }, []);
  return (
    <>
      <div>
        {!isLoading && (
          <DetailCard
            title={title}
            addTo="/dangerous-waters/select-location"
            viewTo="/dangerous-waters/view-details"
            editTo="/dangerous-waters/edit-details"
            results={allLocations}
          />
        )}
      </div>
    </>
  );
};

export default DangerousWaters;
