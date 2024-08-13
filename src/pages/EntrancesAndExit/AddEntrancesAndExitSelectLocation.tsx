import React from "react";
import BreadCrumbs from "../../components/common/BreadCrumbs/BreadCrumbs";
import classes from "./AddEntrancesAndExit.module.scss";
import SelectLocation from "../../components/selectLocation/SelectLocation";

const AddEntrancesAndExitSelectLocation = () => {
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
          to="/entrance-exit/select-location/add-form"
        />
      </div>
    </>
  );
};

export default AddEntrancesAndExitSelectLocation;
