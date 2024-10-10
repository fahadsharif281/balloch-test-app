import React from 'react'
import SelectLocationView from "../../components/selectLocation/SelectLocation";
import BreadCrumbs from '../../components/common/BreadCrumbs/BreadCrumbs';
import { useParams } from 'react-router-dom';

const SelectLocation = () => {
    const { type } = useParams()
    const breadCrumbsItems = [
        { name: "Home", to: "/dashboard" },
        { name: "Add Location", to: `/screen-location/${type}` },
        {
            name: "Select Location",
            to: "",
            active: true,
        },
    ];
    return (
        <>
            <div>
                <BreadCrumbs items={breadCrumbsItems} />
                <SelectLocationView
                    heading="Click on map to pick location"
                    to={`/screen-location/${type}/select-location/add-form`}
                />
            </div>
        </>
    )
}

export default SelectLocation


