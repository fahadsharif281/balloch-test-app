import React from "react";
import BreadCrumbs from "../../components/common/BreadCrumbs/BreadCrumbs";
import SelectLocation from "../../components/selectLocation/SelectLocation";

const AddPointOfInterestSelectLocation = () => {
  const breadCrumbsItems = [
    { name: "Home", to: "/dashboard" },
    { name: "Add Location", to: "" },
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
        <SelectLocation
          heading="Click on map to pick location"
          to="/point-of-interest/select-location/add-form"
        />
      </div>
    </>
  );
};

export default AddPointOfInterestSelectLocation;
