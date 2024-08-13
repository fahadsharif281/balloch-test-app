import React, { useEffect } from "react";
import DetailCard from "../../components/card/DetailCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllLocationsByType } from "../../redux/actions/locations.action";
import { setSelectedLocation } from "../../redux/reducers/locationReducer";
import useGetTitleRoute from "../../utils/hooks/useGetTitleRoute";

const GardenWoodsAndFairy = () => {
  const dispatch = useDispatch<any>();
  const { title } = useGetTitleRoute("view_point");
  const { allLocations, isLoading } = useSelector(
    (state: any) => state.root.location
  );
  useEffect(() => {
    const params = {
      type: "view_point",
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
            addTo="/garden-woods/select-location"
            viewTo="/garden-woods/view-details"
            editTo="/garden-woods/edit-details"
          />
        </div>
      )}
    </>
  );
};

export default GardenWoodsAndFairy;
