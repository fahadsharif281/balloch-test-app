import React, { useEffect } from "react";
import DetailCard from "../../components/card/DetailCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllLocationsByType } from "../../redux/actions/locations.action";
import { setSelectedLocation } from "../../redux/reducers/locationReducer";
import useGetTitleRoute from "../../utils/hooks/useGetTitleRoute";

const NatureTrails = () => {
  const dispatch = useDispatch<any>();
  const { title } = useGetTitleRoute("picnic_tables_benches");
  const { allLocations, isLoading } = useSelector(
    (state: any) => state.root.location
  );
  useEffect(() => {
    const params = {
      type: "picnic_tables_benches",
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
            addTo="/nature-trails/select-location"
            viewTo="/nature-trails/view-details"
            editTo="/nature-trails/edit-details"
          />
        </div>
      )}
    </>
  );
};

export default NatureTrails;
