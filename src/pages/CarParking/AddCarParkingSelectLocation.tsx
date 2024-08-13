import React from "react";
import BreadCrumbs from "../../components/common/BreadCrumbs/BreadCrumbs";
import classes from "./AddCarParking.module.scss";
import SelectLocation from "../../components/selectLocation/SelectLocation";

const AddCarParkingSelectLocation = () => {
  const breadCrumbsItems = [
    { name: "Home", to: "/dashboard" },
    { name: "Add Location", to: "" },
    {
      name: "Select Location",
      to: "/car-parking/select-location",
      active: true,
    },
  ];
  return (
    <>
      <div className={classes.location_container}>
        <BreadCrumbs items={breadCrumbsItems} />
        <SelectLocation
          heading="Click on map to pick location"
          to="/car-parking/select-location/add-form"
        />
      </div>
    </>
  );
};

export default AddCarParkingSelectLocation;
