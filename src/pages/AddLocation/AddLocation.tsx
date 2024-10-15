import React from "react";
import BreadCrumbs from "../../components/common/BreadCrumbs/BreadCrumbs";
import AddFormComponent from "../../components/addForm/AddForm";
import classes from "./AddLocation.module.scss";
import { toast } from "react-toastify";
import { postCreateLocationApiCall } from "../../services/general.services";
import { useNavigate } from "react-router";
import { useParams } from "react-router-dom";
const AddForm = () => {
  const navigate = useNavigate();
  const { type } = useParams();
  const selectedLocationPath = `/screen-location/${type}/select-location`;
  const breadCrumbsItems = [
    { name: "Home", to: "/dashboard" },
    { name: "Add Location", to: "" },
    { name: "Select Location", to: selectedLocationPath },
    { name: "Add Details", to: "", active: true },
  ];
  const handleSubmit = (values: any) => {
    let form = new FormData();
    form.append("images", values?.imageFile);
    form.append("type", `${type}`);
    form.append(
      "location",
      `{"coordinates":[${values?.longitute},${values?.latitude}]}`
    );
    form.append("title", values?.locationName);
    form.append("description", values?.locationDetail);
    form.append("distance", values?.locationDistance);
    form.append("avg_time", values?.locationAverageTime);
    if (values?.imageFile) {
      postCreateLocationApiCall(form)
        .then((res) => {
          if (res.data.status === false) {
            toast.error(res?.data?.message, {
              className: classes.error_toast,
            });
          } else {
            toast.success("Location Saved Successfully");
            navigate(`/screen-location/${type}`);
          }
        })
        .catch((error) => {
          toast.error(error?.data?.message, {
            className: classes.error_toast,
          });
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
          <AddFormComponent
            type={`${type}`}
            changeLocationTo={selectedLocationPath}
            handleSubmit={handleSubmit}
          />
        </div>
      </div>
    </>
  );
};

export default AddForm;
