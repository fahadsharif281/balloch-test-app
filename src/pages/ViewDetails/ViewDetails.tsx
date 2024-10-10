import React from 'react'
import SourceForm from '../../components/sourceForm/SourceForm';
import { useParams } from 'react-router-dom';

const ViewDetails = () => {
    const { type } = useParams()
    const breadCrumbsItems = [
        { name: "Home", to: "/dashboard" },
        { name: "Location", to: `/screen-location/${type}` },
        {
            name: "View Location",
            to: "",
            active: true,
        },
    ];
    return (
        <>
            <SourceForm
                breadCrumbsItems={breadCrumbsItems}
                handleSubmit={() => { }}
                formType="view"
            />
        </>
    )
}

export default ViewDetails
