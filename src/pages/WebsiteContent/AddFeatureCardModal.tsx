import { useState } from "react";
import CustomButton from "../../components/common/Button/Button";
import ImageInput from "../../components/common/ImageInput/ImageInput";
import { Input } from "../../components/common/Input/Input";
import classes from "./AddFeatureCardModal.module.scss";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { toBase64 } from "../../utils/helpers";
import {
  addContentCardApiCall,
  updateContentCardApiCall,
  updateScreenTypesImageApiCall,
} from "../../services/general.services";
import { getAllContentCard } from "../../redux/actions/webContent.action";
import { useDispatch } from "react-redux";
import { IContentCardApiCall } from "../../models/IWebContentReducer";
const baseURL = process.env.REACT_APP_BASE_URL;
interface IFormikCardValues {
  image: string | File;
  title: string;
  description: string;
}
const CustomFeatureCardModal = ({
  editCard,
  handleClose = () => {},
}: {
  editCard: IContentCardApiCall | null;
  handleClose: () => void;
}) => {
  const dispatch = useDispatch<any>();
  const [image, setImage] = useState(
    editCard?.image ? `${baseURL}/${editCard?.image}` : ""
  );
  const handleFileUpload = async (e: any) => {
    if (e.target.files) {
      formik.setFieldValue("image", e.target.files[0]);
      const result: any = await toBase64(e.target.files[0]);
      if (result) {
        setImage(result);
      }
    }
  };
  const formik = useFormik({
    initialValues: {
      image: (editCard && `${baseURL}/${editCard?.image}`) || "",
      title: (editCard && editCard?.title) || "",
      description: (editCard && editCard?.description) || "",
    },
    validationSchema: Yup.object().shape({
      title: Yup.string().required("Title is required"),
      description: Yup.string().required("Description is required"),
    }),
    onSubmit: (values) => {
      if (!values.image) {
        toast.error("Please Select Image to continue");
      } else {
        if (editCard) {
          handleEditContentCard(values);
        } else {
          handleAddContentCard(values);
        }
      }
    },
  });

  const handleAddContentCard = (values: IFormikCardValues) => {
    const imageFormData = new FormData();
    imageFormData.append("image", values?.image);
    updateScreenTypesImageApiCall(imageFormData)
      .then((res) => {
        if (!!res?.data?.status) {
          const params = {
            image: res?.data?.path,
            title: values?.title,
            description: values?.description,
          };
          addContentCardApiCall(params)
            .then((response) => {
              toast.success("Added Successfully");
              dispatch(getAllContentCard());
              handleClose();
            })
            .catch((error) => {
              console.log("error", error);
            });
        }
      })
      .catch((err) => {
        toast?.error("Image is too large");
      });
  };
  const handleEditContentCard = (values: IFormikCardValues) => {
    if (typeof values.image === "string") {
      const params = {
        content_id: editCard?._id,
        image: editCard?.image,
        title: values?.title,
        description: values?.description,
      };
      updateContentCardApiCall(params)
        .then((response) => {
          toast.success("Updated Successfully");
          dispatch(getAllContentCard());
          handleClose();
        })
        .catch((error) => {
          console.log("error", error);
        });
    } else {
      const imageFormData = new FormData();
      imageFormData.append("image", values?.image);
      updateScreenTypesImageApiCall(imageFormData)
        .then((res) => {
          if (!!res?.data?.status) {
            const params = {
              content_id: editCard?._id,
              image: res?.data?.path,
              title: values?.title,
              description: values?.description,
            };
            updateContentCardApiCall(params)
              .then((response) => {
                toast.success("Updated Successfully");
                dispatch(getAllContentCard());
                handleClose();
              })
              .catch((error) => {
                console.log("error", error);
              });
          }
        })
        .catch((err) => {
          toast?.error("Image is too large");
        });
    }
  };

  return (
    <div>
      {" "}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          formik.handleSubmit();
        }}
      >
        <div className={classes.container}>
          {!!image ? (
            <div className={classes.image}>
              <img onClick={() => setImage("")} src={image} alt="Image" />
            </div>
          ) : (
            <ImageInput
              containerClassName={classes.image_input}
              placeHolderClassName={classes.placeholder}
              handleFileUpload={handleFileUpload}
              placeHolder="Select Image of Dimensions 1633 x 3253 and size less than 3MB"
            />
          )}
          <Input
            value={formik.values.title}
            onChange={formik.handleChange("title")}
            onBlur={formik.handleBlur("title")}
            error={
              formik.touched.title && formik.errors.title
                ? formik.errors.title
                : ""
            }
            type="text"
            label="Title"
            placeholder="Enter header"
          />
          <Input
            value={formik.values.description}
            onChange={formik.handleChange("description")}
            onBlur={formik.handleBlur("description")}
            error={
              formik.touched.description && formik.errors.description
                ? formik.errors.description
                : ""
            }
            type="text"
            label="Description"
            placeholder="Enter description"
          />
          <CustomButton
            type="submit"
            containerClassName={classes.btn_container}
            buttonClassName={classes.button}
            text={editCard ? "Update" : "Add"}
          />
        </div>
      </form>
    </div>
  );
};

export default CustomFeatureCardModal;
