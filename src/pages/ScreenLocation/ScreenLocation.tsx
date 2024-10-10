import React, { useEffect } from "react";
import DetailCard from "../../components/card/DetailCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllLocationsByType } from "../../redux/actions/locations.action";
import { setSelectedLocation } from "../../redux/reducers/locationReducer";
import useGetTitleRoute from "../../utils/hooks/useGetTitleRoute";
import { useParams } from "react-router-dom";

const ScreenLocation = () => {
    const { type } = useParams();
    const dispatch = useDispatch<any>();
    const { title } = useGetTitleRoute(`${type}`);
    const { allLocations, isLoading } = useSelector(
        (state: any) => state.root.location
    );
    useEffect(() => {
        const params = {
            type: `${type}`,
        };
        dispatch(setSelectedLocation(""));
        dispatch(getAllLocationsByType(params));
    }, [type]);
    return (
        <>
            {!isLoading && (
                <div>
                    <DetailCard
                        results={allLocations}
                        title={title}
                        addTo={`/screen-location/${type}/select-location`}
                        viewTo={`/screen-location/${type}/view-details`}
                        editTo={`/screen-location/${type}/edit-details`}
                    />
                </div>
            )}
        </>
    );
};

export default ScreenLocation;
