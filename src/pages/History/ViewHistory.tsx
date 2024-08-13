import React from "react";
import SourceForm from "../../components/sourceForm/SourceForm";

const ViewHistory = () => {
  const breadCrumbsItems = [
    { name: "Home", to: "/dashboard" },
    { name: "Location", to: "/history" },
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

export default ViewHistory;
