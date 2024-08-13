import React, { useEffect } from "react";
import DetailCard from "../../components/card/DetailCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllLocationsByType } from "../../redux/actions/locations.action";
import { setSelectedLocation } from "../../redux/reducers/locationReducer";
import useGetTitleRoute from "../../utils/hooks/useGetTitleRoute";

const FairyTrails = () => {
  const dispatch = useDispatch<any>();
  const { title } = useGetTitleRoute("garden");
  const { allLocations, isLoading } = useSelector(
    (state: any) => state.root.location
  );
  useEffect(() => {
    const params = {
      type: "garden",
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
            addTo="/fairy-trails/select-location"
            viewTo="/fairy-trails/view-details"
            editTo="/fairy-trails/edit-details"
          />
        </div>
      )}
    </>
  );
};

export default FairyTrails;
