import { useEffect } from "react";
import CustomButton from "../../components/common/Button/Button";
import { Input } from "../../components/common/Input/Input";
import { TextArea } from "../../components/common/TextArea/TextArea";
import classes from "./FeaturesSection.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { findExactSection } from "../../utils/helpers";
import { useFormik } from "formik";
import { postWebAddContent } from "../../services/general.services";
import { toast } from "react-toastify";
import { getWebPageContents } from "../../redux/actions/webContent.action";
const HowitWorksSection = () => {
  const dispatch = useDispatch<any>();
  const { webContentResult } = useSelector(
    (state: any) => state.root.webContent
  );
  useEffect(() => {
    const heading = findExactSection(webContentResult, "section", "3");
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
      formData.append("section", "3");
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
      <div className={classes.heading}>How It Works Section</div>
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
          value={formik.values.desc}
          onChange={formik.handleChange("desc")}
          label="Description"
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

export default HowitWorksSection;
