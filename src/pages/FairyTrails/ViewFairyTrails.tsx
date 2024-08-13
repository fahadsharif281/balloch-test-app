import React from "react";
import SourceForm from "../../components/sourceForm/SourceForm";

const ViewFairyTrails = () => {
  const breadCrumbsItems = [
    { name: "Home", to: "/dashboard" },
    { name: "Location", to: "/fairy-trails" },
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
        handleSubmit={() => {}}
        formType="view"
      />
    </>
  );
};

export default ViewFairyTrails;
