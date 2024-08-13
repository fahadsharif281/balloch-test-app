import { useEffect } from "react";
import CustomButton from "../../components/common/Button/Button";
import { Input } from "../../components/common/Input/Input";
import classes from "./FeaturesSection.module.scss";
import { findExactSection } from "../../utils/helpers";
import { useSelector } from "react-redux";
import { useFormik } from "formik";
import { TextArea } from "../../components/common/TextArea/TextArea";
import { postWebAddContent } from "../../services/general.services";
import { toast } from "react-toastify";
const FeaturesSection = () => {
  const { webContentResult } = useSelector(
    (state: any) => state.root.webContent
  );
  useEffect(() => {
    const heading = findExactSection(webContentResult, "section", "2");
    formik.setFieldValue("header", heading?.heading);
    formik.setFieldValue("desc", heading?.text);
  }, [webContentResult]);

  const formik = useFormik({
    initialValues: {
      header: "",
      desc: "",
    },
    onSubmit: (values) => {
      const formData = new FormData();
      formData.append("heading", values?.header);
      formData.append("section", "2");
      formData.append("text", values.desc);
      postWebAddContent(formData).then((response) => {
        if (response?.data?.status) {
          toast.success("Updated Successfully");
        }
      });
    },
  });
  return (
    <div className={classes.container}>
      <div className={classes.heading}>Features Section</div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          formik.handleSubmit();
        }}
      >
        <Input
          labelClassName={classes.input_label}
          inputClassName={classes.inputfield}
          label="Header"
          value={formik.values.header}
          onChange={formik.handleChange("header")}
          placeholder="Enter Header"
          type="text"
        />
        <TextArea
          labelClassName={classes.input_label}
          textAreaClassName={classes.inputfield}
          label="Description"
          value={formik.values.desc}
          onChange={formik.handleChange("desc")}
          placeholder="Enter Description"
          rows={1}
        />

        <CustomButton
          containerClassName={classes.btn}
          buttonClassName={classes.btn}
          text="Update"
          type="submit"
        />
      </form>
    </div>
  );
};

export default FeaturesSection;
