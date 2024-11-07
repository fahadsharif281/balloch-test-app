import classes from "./EditScreen.module.scss";
import { Input } from "../../components/common/Input/Input";
import CustomButton from "../../components/common/Button/Button";
import ImageInput from "../../components/common/ImageInput/ImageInput";
import { useFormik } from "formik";
import { toBase64 } from "../../utils/helpers";
import { useEffect, useState } from "react";
import {
  updateScreenTypesImageApiCall,
  updateScreenTypesScreenNameApiCall,
} from "../../services/general.services";
import { useDispatch } from "react-redux";
import { getScreenTypes } from "../../redux/actions/screenTypes.action";
import { getAllUserRoutes } from "../../redux/actions/routes.action";
import { toast } from "react-toastify";
const baseURL = process.env.REACT_APP_BASE_URL;
const EditScreen = ({ selectedUser, onHide }: any) => {
  const dispatch = useDispatch<any>();
  const [image, setImage] = useState("");
  useEffect(() => {
    if (selectedUser?.image) {
      const imgURL = selectedUser?.image_id
        ? selectedUser?.image
        : `${baseURL}/${selectedUser?.image}`;
      setImage(imgURL);
      // note: this could be used if api wants the image as mandatory field
      // const ImagefileReader = new File(
      //   [imgURL],
      //   `${selectedUser?.image?.split("/")[1]}`
      // );
      // formik.setFieldValue("image", ImagefileReader);
    }
  }, []);
  const formik = useFormik({
    initialValues: {
      id: selectedUser?._id || "",
      screenName: selectedUser?.screen_name || "",
      image: "",
      type: selectedUser?.type || "",
    },
    onSubmit: (values, formikHelpers) => {
      const formData = new FormData();
      if (values?.image) {
        formData.append("image", values?.image);
      }
      formData.append("screen_name", values?.screenName);
      formData.append("type", values?.type);

      updateScreenTypesScreenNameApiCall(values?.id, formData)
        .then((res) => {
          if (res?.data?.status === true) {
            dispatch(getScreenTypes());
            dispatch(getAllUserRoutes());
            onHide();
            toast.success(res?.data?.message);
          } else {
            toast.error(res?.data?.message);
          }
        })
        .catch((err) => {
          toast.error(err?.data?.message);
        });
    },
  });

  const handleFileUpload = async (e: any) => {
    if (e.target.files) {
      formik.setFieldValue("image", e.target.files[0]);
      const result: any = await toBase64(e.target.files[0]);
      if (result) {
        setImage(result);
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
          <ImageInput
            handleFileUpload={handleFileUpload}
            label="Image"
            placeHolder="Click to select Image"
          />
          {image && (
            <div className={classes.image}>
              <img src={image} alt="Image" />
            </div>
          )}
          <Input
            value={formik.values.screenName}
            onChange={formik.handleChange("screenName")}
            type="text"
            label="Screen Name"
          />

          <CustomButton
            type="submit"
            containerClassName={classes.btn_container}
            buttonClassName={classes.button}
            text="Update"
          />
        </div>
      </form>
    </>
  );
};

export default EditScreen;
