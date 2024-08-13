import React, { useEffect } from "react";
import DetailCard from "../../components/card/DetailCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllLocationsByType } from "../../redux/actions/locations.action";
import { setSelectedLocation } from "../../redux/reducers/locationReducer";
import useGetTitleRoute from "../../utils/hooks/useGetTitleRoute";

const PointOfInterest = () => {
  const dispatch = useDispatch<any>();
  const { title } = useGetTitleRoute("water_safety");
  const { allLocations, isLoading } = useSelector(
    (state: any) => state.root.location
  );
  useEffect(() => {
    const params = {
      type: "water_safety",
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
            addTo="/point-of-interest/select-location"
            viewTo="/point-of-interest/view-details"
            editTo="/point-of-interest/edit-details"
          />
        </div>
      )}
    </>
  );
};

export default PointOfInterest;
