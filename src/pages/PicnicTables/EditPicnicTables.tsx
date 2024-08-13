import React from "react";
import SourceForm from "../../components/sourceForm/SourceForm";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { postEditLocationApiCall } from "../../services/general.services";
import { toast } from "react-toastify";

const EditPicnicTables = () => {
  const breadCrumbsItems = [
    { name: "Home", to: "/dashboard" },
    { name: "Location", to: "/picnic-tables" },
    {
      name: "Edit Location",
      to: "",
      active: true,
    },
  ];
  const { selectedLocation, longitude, latitude } = useSelector(
    (state: any) => state.root.location
  );
  const navigate = useNavigate();
  const handleSubmit = (values: any) => {
    let form = new FormData();
    if (values?.imageFile) {
      form.append("images", values?.imageFile);
    }
    form.append("type", values?.type);
    form.append("location_id", values?.locationId);
    form.append(
      "long",
      longitude ? longitude : selectedLocation?.location?.coordinates[0]
    );
    form.append(
      "lat",
      latitude ? latitude : selectedLocation?.location?.coordinates[1]
    );
    form.append("title", values?.title);
    form.append("description", values?.description);
    form.append("distance", values?.distance);
    form.append("avg_time", values?.averageTime);
    form.append("parking_capacity", values?.capacity);
    postEditLocationApiCall(form)
      .then((res) => {
        if (res.data.status === false) {
          toast.error(res?.data?.message);
        } else {
          toast.success("Location Updated Successfully");
          navigate("/picnic-tables");
        }
      })
      .catch((error) => {
        toast.error(error?.data?.message);
      });
  };
  return (
    <>
      <SourceForm
        breadCrumbsItems={breadCrumbsItems}
        handleSubmit={handleSubmit}
        formType="edit"
      />
    </>
  );
};

export default EditPicnicTables;
