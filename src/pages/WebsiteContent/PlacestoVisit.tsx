import { useDispatch, useSelector } from "react-redux";
import CustomButton from "../../components/common/Button/Button";
import { Input } from "../../components/common/Input/Input";
import classes from "./FeaturesSection.module.scss";
import { useEffect } from "react";
import { findExactSection } from "../../utils/helpers";
import { useFormik } from "formik";
import { TextArea } from "../../components/common/TextArea/TextArea";
import { postWebAddContent } from "../../services/general.services";
import { toast } from "react-toastify";
import { getWebPageContents } from "../../redux/actions/webContent.action";
const PlacestoVisit = () => {
  const dispatch = useDispatch<any>();
  const { webContentResult } = useSelector(
    (state: any) => state.root.webContent
  );
  useEffect(() => {
    const heading = findExactSection(webContentResult, "section", "8");
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
      formData.append("section", "8");
      formData.append("text", values.desc);
      postWebAddContent(formData).then((response) => {
        if (response?.data?.status) {
          toast.success("Updated Successfully");
          dispatch(getWebPageContents());
        }
      });
    },
  });
  return (
    <div className={classes.container}>
      <div className={classes.heading}>Places to Visit</div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          formik.handleSubmit();
        }}
      >
        <Input
          labelClassName={classes.input_label}
          inputClassName={classes.inputfield}
          value={formik.values.header}
          onChange={formik.handleChange("header")}
          label="Header"
          placeholder="Enter Header"
          type="text"
        />
        <TextArea
          labelClassName={classes.input_label}
          textAreaClassName={classes.inputfield}
          value={formik.values.desc}
          onChange={formik.handleChange("desc")}
          label="Description"
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

export default PlacestoVisit;
