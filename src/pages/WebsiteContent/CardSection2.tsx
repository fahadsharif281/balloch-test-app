import { useEffect, useState } from "react";
import CustomButton from "../../components/common/Button/Button";
import ImageInput from "../../components/common/ImageInput/ImageInput";
import { Input } from "../../components/common/Input/Input";
import classes from "./CardSection.module.scss";
import { findExactSection, toBase64 } from "../../utils/helpers";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { TextArea } from "../../components/common/TextArea/TextArea";
import { postWebAddContent } from "../../services/general.services";
import { toast } from "react-toastify";
import { getWebPageContents } from "../../redux/actions/webContent.action";
const CardSection2 = () => {
  const dispatch = useDispatch<any>();
  const [showSelectImage, setShowSelectImage] = useState(false);
  const [image, setImage] = useState("");
  const { webContentResult } = useSelector(
    (state: any) => state.root.webContent
  );
  const heading = findExactSection(webContentResult, "section", "5");
  useEffect(() => {
    formik.setFieldValue("header", heading?.heading);
    formik.setFieldValue("desc", heading?.text);
  }, [webContentResult]);

  const formik = useFormik({
    initialValues: {
      header: "",
      desc: "",
      image: "",
    },
    onSubmit: (values) => {
      const formData = new FormData();
      if (values?.image) {
        formData.append("images", values?.image);
        formData.append("heading", values?.header);
        formData.append("section", "5");
        formData.append("text", values.desc);
        postWebAddContent(formData)
          .then((response) => {
            if (!response) {
              toast.error("Image Too Large");
            } else if (response?.data?.status) {
              toast.success("Updated Successfully");
              dispatch(getWebPageContents());
            }
          })
          .catch((err) => {
            toast.error("Image Too Large");
          });
      } else {
        toast.error("Please Select Image to continue");
      }
    },
  });

  const handleFileUpload = async (e: any) => {
    if (e.target.files) {
      formik.setFieldValue("image", e.target.files[0]);
      const result: any = await toBase64(e.target.files[0]);
      if (result) {
        setImage(result);
        setShowSelectImage(false);
      }
    }
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          formik.handleSubmit();
        }}
      >
        <div className={classes.container}>
          <div className={classes.column1}>
            <div className={classes.heading}>Card Section 2</div>
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
            />
            <CustomButton
              containerClassName={classes.btn}
              buttonClassName={classes.btn}
              text="Update"
              type="submit"
            />
          </div>
          <div className={classes.column2}>
            {showSelectImage ? (
              <ImageInput
                containerClassName={classes.image_input}
                placeHolderClassName={classes.place_holder}
                placeHolder="Select Image of Dimensions 1633 x 3253 and size less than 3MB"
                handleFileUpload={handleFileUpload}
              />
            ) : (
              <div className={classes.image_container}>
                <img
                  onClick={() => {
                    setShowSelectImage(true);
                  }}
                  src={image ? image : heading?.images[0]?.image_url}
                  height="auto"
                  width="100%"
                  alt="Img"
                />
              </div>
            )}
          </div>
        </div>
      </form>
    </>
  );
};

export default CardSection2;
