import { useDispatch, useSelector } from "react-redux";
import CustomButton from "../../components/common/Button/Button";
import { Input } from "../../components/common/Input/Input";
import classes from "./HomePageSection.module.scss";
import { IWebContentApiResult } from "../../models/IWebContentReducer";
import { useFormik } from "formik";
import { findExactSection, toBase64 } from "../../utils/helpers";
import { useEffect, useState } from "react";
import { TextArea } from "../../components/common/TextArea/TextArea";
import ImageInput from "../../components/common/ImageInput/ImageInput";
import { postWebAddContent } from "../../services/general.services";
import { toast } from "react-toastify";
import { getWebPageContents } from "../../redux/actions/webContent.action";

const HomePageSection = () => {
  const dispatch = useDispatch<any>();
  const [showSelectImage, setShowSelectImage] = useState(false);
  const [image, setImage] = useState("");
  const [fileImage, setFileImage] = useState("");
  const { webContentResult } = useSelector(
    (state: any) => state.root.webContent
  );
  const backGroundImageData = findExactSection(
    webContentResult,
    "heading",
    "Background Image"
  );

  useEffect(() => {
    const heading = findExactSection(webContentResult, "section", "1");
    const description2 = findExactSection(webContentResult, "section", "10");
    const description3 = findExactSection(webContentResult, "section", "11");
    formik.setFieldValue("header", heading?.heading);
    formik.setFieldValue("desc1", heading?.text);
    formik.setFieldValue("desc2", description2?.text);
    formik.setFieldValue("desc3", description3?.text);
  }, [webContentResult]);

  const handleFileUpload = async (e: any) => {
    if (e.target.files) {
      setFileImage(e.target.files[0]);
      const result: any = await toBase64(e.target.files[0]);
      if (result) {
        setImage(result);
        setShowSelectImage(false);
      }
    }
  };

  const handleBackGroundImage = () => {
    if (!fileImage) {
      toast.error("Please Select an Image to Continue");
    } else {
      const formData = new FormData();
      formData.append("images", fileImage);
      formData.append("section", "9");
      formData.append("heading", "Background Image");
      postWebAddContent(formData).then((response) => {
        if (response?.data?.status) {
          toast.success("Updated Successfully");
          dispatch(getWebPageContents());
        }
      });
    }
  };

  const formik = useFormik({
    initialValues: {
      header: "",
      desc1: "",
      desc2: "",
      desc3: "",
    },
    onSubmit: (values) => {
      const section1FormData = new FormData();
      section1FormData.append("heading", values?.header);
      section1FormData.append("section", "1");
      section1FormData.append("text", values.desc1);
      postWebAddContent(section1FormData).then((response) => {});
      const section2FormData = new FormData();
      section2FormData.append("section", "10");
      section2FormData.append("text", values.desc2);
      postWebAddContent(section2FormData).then((response) => {});
      const section3FormData = new FormData();
      section3FormData.append("section", "11");
      section3FormData.append("text", values.desc3);
      postWebAddContent(section3FormData).then((response) => {
        if (response?.data?.status) {
          toast.success("Updated Successfully");
          dispatch(getWebPageContents());
        }
      });
    },
  });
  return (
    <div className={classes.container}>
      <div className={classes.section1}>
        <div className={classes.heading}>Home Page Section</div>
        <CustomButton
          containerClassName={classes.button}
          buttonClassName={classes.button}
          onClick={() => {
            window.open("https://ballochparkguide.com/");
          }}
          text="Preview"
        />
      </div>
      <p className={classes.text}>Background Image</p>
      <div className={classes.text}>(Click on the Image to Update)</div>
      {showSelectImage ? (
        <ImageInput
          containerClassName={classes.image_input}
          placeHolderClassName={classes.place_holder}
          placeHolder="Select Image of Dimensions 1633 x 3253 and size less than 3MB"
          handleFileUpload={handleFileUpload}
        />
      ) : (
        <div>
          <img
            onClick={() => {
              setShowSelectImage(true);
            }}
            src={image ? image : backGroundImageData?.images[0]?.image_url}
            alt="background image"
            width="100%"
          />
        </div>
      )}
      <CustomButton
        containerClassName={classes.btn}
        buttonClassName={classes.btn}
        text="Update"
        onClick={handleBackGroundImage}
      />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          formik.handleSubmit();
        }}
      >
        <Input
          placeholder="Enter Header"
          labelClassName={classes.input_label}
          inputClassName={classes.inputfield}
          value={formik.values.header}
          onChange={formik.handleChange("header")}
          label="Header"
          type="text"
        />
        <TextArea
          labelClassName={classes.input_label}
          textAreaClassName={classes.inputfield}
          label="Description"
          value={formik.values.desc1}
          onChange={formik.handleChange("desc1")}
          placeholder="Enter Description"
          rows={1}
        />
        <TextArea
          labelClassName={classes.input_label}
          textAreaClassName={classes.inputfield}
          value={formik.values.desc2}
          onChange={formik.handleChange("desc2")}
          placeholder="Enter Description"
          rows={1}
        />
        <TextArea
          labelClassName={classes.input_label}
          textAreaClassName={classes.inputfield}
          value={formik.values.desc3}
          onChange={formik.handleChange("desc3")}
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

export default HomePageSection;
