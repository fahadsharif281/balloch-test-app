import React from "react";
import classes from "./AddParkAndCastle.module.scss";
import BreadCrumbs from "../../components/common/BreadCrumbs/BreadCrumbs";
import SelectLocation from "../../components/selectLocation/SelectLocation";

const AddParkAndCastleSelectLocation = () => {
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
          to="/park-and-castle/select-location/add-form"
        />
      </div>
    </>
  );
};

export default AddParkAndCastleSelectLocation;
