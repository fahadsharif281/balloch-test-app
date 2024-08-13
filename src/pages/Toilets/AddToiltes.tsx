import React from "react";
import BreadCrumbs from "../../components/common/BreadCrumbs/BreadCrumbs";
import AddForm from "../../components/addForm/AddForm";
import classes from "./AddToiltes.module.scss";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { postCreateLocationApiCall } from "../../services/general.services";

const AddToiltes = () => {
  const navigate = useNavigate();
  const breadCrumbsItems = [
    { name: "Home", to: "/dashboard" },
    { name: "Add Location", to: "" },
    { name: "Select Location", to: "/toilets/select-location" },
    { name: "Add Details", to: "", active: true },
  ];
  const handleSubmit = (values: any) => {
    let form = new FormData();
    form.append("images", values?.imageFile);
    form.append("type", "parking");
    form.append(
      "location",
      `{"coordinates":[${values?.longitute},${values?.latitude}]}`
    );
    form.append("title", values?.locationName);
    form.append("description", values?.locationDetail);
    form.append("distance", values?.locationDistance);
    form.append("avg_time", values?.locationAverageTime);
    form.append("parking_capacity", values?.locationParkingCapacity);
    if (values?.imageFile) {
      postCreateLocationApiCall(form).then((res) => {
        if (res.data.status === false) {
          toast.error(res?.data?.message, {
            className: classes.error_toast,
          });
        } else {
          if (res?.data?.message) {
            toast.success("Location Saved Successfully");
            navigate("/toilets");
          }
        }
      });
    } else {
      toast.error("Please Select Image to continue", {
        className: classes.error_toast,
      });
    }
  };
  return (
    <>
      <div className={classes.container}>
        <BreadCrumbs items={breadCrumbsItems} />
        <div className={classes.add_form_container}>
          <AddForm
            type="parking"
            changeLocationTo="/toilets/select-location"
            handleSubmit={handleSubmit}
          />
        </div>
      </div>
    </>
  );
};

export default AddToiltes;
