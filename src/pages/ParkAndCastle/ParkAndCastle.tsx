import React, { useEffect } from "react";
import DetailCard from "../../components/card/DetailCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllLocationsByType } from "../../redux/actions/locations.action";
import { setSelectedLocation } from "../../redux/reducers/locationReducer";
import useGetTitleRoute from "../../utils/hooks/useGetTitleRoute";

const ParkAndCastle = () => {
  const dispatch = useDispatch<any>();
  const { title } = useGetTitleRoute("toilet");
  const { allLocations, isLoading } = useSelector(
    (state: any) => state.root.location
  );
  useEffect(() => {
    const params = {
      type: "toilet",
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
            addTo="/park-and-castle/select-location"
            viewTo="/park-and-castle/view-details"
            editTo="/park-and-castle/edit-details"
          />
        </div>
      )}
    </>
  );
};

export default ParkAndCastle;
