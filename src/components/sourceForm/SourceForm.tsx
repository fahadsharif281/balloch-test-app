import classes from "./SourceForm.module.scss";
import BreadCrumbs from "../common/BreadCrumbs/BreadCrumbs";
import SelectLocation from "../selectLocation/SelectLocation";
import ImageInput from "../common/ImageInput/ImageInput";
import { Input } from "../common/Input/Input";
import { useFormik } from "formik";
import CustomButton from "../common/Button/Button";
import { IBreadCrumbsItems } from "../../models/common/IBreadCrumbs";
import { TextArea } from "../common/TextArea/TextArea";
import { useState } from "react";
import { toBase64 } from "../../utils/helpers";
import { useSelector } from "react-redux";
import * as Yup from "yup";
import ViewImage from "./ViewImage";

const SourceForm = ({
  handleSubmit = () => {},
  breadCrumbsItems,
  formType,
}: {
  handleSubmit: (e: any) => void;
  breadCrumbsItems?: IBreadCrumbsItems[];
  formType: string;
}) => {
  const { selectedLocation } = useSelector((state: any) => state.root.location);
  const [image, setImage] = useState("");
  const formik = useFormik({
    initialValues: {
      locationId: selectedLocation?._id || "",
      type: selectedLocation?.type || "",
      title: selectedLocation?.title || "",
      description: selectedLocation?.description || "",
      distance: selectedLocation?.distance || "",
      averageTime: selectedLocation?.avg_time || "",
      capacity: selectedLocation?.capacity || "",
      imageFile: "",
    },
    validationSchema: Yup.object().shape({
      title: Yup.string().required("Location name is required"),
    }),
    onSubmit: handleSubmit,
  });

  const handleFileUpload = async (e: any) => {
    if (e.target.files) {
      formik.setFieldValue("imageFile", e.target.files[0]);
      const result: any = await toBase64(e.target.files[0]);
      if (result) {
        setImage(result);
      }
    }
  };
  return (
    <>
      {breadCrumbsItems && <BreadCrumbs items={breadCrumbsItems} />}
      <div className={classes.container}>
        <div className={classes.location_container}>
          <SelectLocation
            heading={formType === "edit" ? "Click on map to edit location" : ""}
            subHeading="Location"
            formType={formType}
            mapContainerClassName={classes.map_container}
          />
        </div>
        <div
          className={
            formType === "edit"
              ? classes.submit_form
              : `${classes.submit_form} ${classes.adjust_top}`
          }
        >
          <form
            onSubmit={(e) => {
              e.preventDefault();
              formik.handleSubmit();
            }}
          >
            <div>
              {formType === "view" ? (
                <ViewImage
                  src={selectedLocation?.images[0]?.image_url}
                  label="Image"
                />
              ) : (
                <ImageInput
                  label="Image"
                  placeHolder="Click to select Image"
                  handleFileUpload={handleFileUpload}
                />
              )}
            </div>
            {formType === "edit" && image && (
              <div className={classes.image_conatiner}>
                <p className={classes.title}>Selected file:</p>
                <div className={classes.img_flex}>
                  <img src={image} />
                </div>
              </div>
            )}
            <Input
              type="text"
              disabled={formType === "view" ? true : false}
              value={formik.values.title}
              onChange={formik.handleChange("title")}
              onBlur={formik.handleBlur("title")}
              error={
                formik.touched.title && formik.errors.title
                  ? formik.errors.title
                  : ("" as any)
              }
              placeholder="Enter Location Name"
              label="Title"
            />
            <TextArea
              rows={3}
              value={formik.values.description}
              disabled={formType === "view" ? true : false}
              onChange={formik.handleChange("description")}
              onBlur={formik.handleBlur("description")}
              placeholder="Enter Location Detail"
              label="Description"
            />
            <Input
              type="text"
              disabled={formType === "view" ? true : false}
              value={formik.values.distance}
              onChange={formik.handleChange("distance")}
              onBlur={formik.handleBlur("distance")}
              placeholder="Enter Location Distance"
              label="Distance"
            />
            <Input
              type="text"
              value={formik.values.averageTime}
              disabled={formType === "view" ? true : false}
              onChange={formik.handleChange("averageTime")}
              onBlur={formik.handleBlur("averageTime")}
              placeholder="Enter Location Average Time"
              label="Average Time"
            />
            {formType === "view" && (
              <Input
                type="text"
                value={formik.values.capacity}
                disabled={formType === "view" ? true : false}
                onChange={formik.handleChange("capacity")}
                onBlur={formik.handleBlur("capacity")}
                placeholder="Enter Location Name"
                label="Capacity"
              />
            )}
            {formType === "edit" && (
              <div className={classes.btn_container}>
                <CustomButton
                  containerClassName={classes.update_btn_container_class}
                  buttonClassName={classes.btn_class}
                  text="Update"
                  type="submit"
                />
              </div>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default SourceForm;
