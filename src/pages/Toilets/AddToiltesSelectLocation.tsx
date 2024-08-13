import React from "react";
import BreadCrumbs from "../../components/common/BreadCrumbs/BreadCrumbs";
import SelectLocation from "../../components/selectLocation/SelectLocation";
import classes from "./AddToiltes.module.scss";

const AddToiltesSelectLocation = () => {
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
      <div className={classes.location_container}>
        <BreadCrumbs items={breadCrumbsItems} />
        <SelectLocation
          heading="Click on map to pick location"
          to="/toilets/select-location/add-form"
        />
      </div>
    </>
  );
};

export default AddToiltesSelectLocation;
