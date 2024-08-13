import React from "react";
import SourceForm from "../../components/sourceForm/SourceForm";

const ViewKidsPlay = () => {
  const breadCrumbsItems = [
    { name: "Home", to: "/dashboard" },
    { name: "Location", to: "/kids-play" },
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

export default ViewKidsPlay;
