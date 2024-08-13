import React from "react";
import BreadCrumbs from "../../components/common/BreadCrumbs/BreadCrumbs";
import SelectLocation from "../../components/selectLocation/SelectLocation";

const AddPicnicTablesSelectLocation = () => {
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
          to="/picnic-tables/select-location/add-form"
        />
      </div>
    </>
  );
};

export default AddPicnicTablesSelectLocation;
