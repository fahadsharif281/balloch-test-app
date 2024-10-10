import classes from "./AddCatogoryScreen.module.scss";
import { Input } from "../../components/common/Input/Input";
import CustomButton from "../../components/common/Button/Button";
import ImageInput from "../../components/common/ImageInput/ImageInput";
import { useFormik } from "formik";
import { toBase64 } from "../../utils/helpers";
import { useState } from "react";
import {
    addScreenTypesApiCall,
} from "../../services/general.services";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import { toast } from "react-toastify";
import { getScreenTypes } from "../../redux/actions/screenTypes.action";
import { getAllUserRoutes } from "../../redux/actions/routes.action";
const AddCatogoryScreen = ({ onHide }: any) => {
    const dispatch = useDispatch<any>();
    const [image, setImage] = useState("");
    const formik = useFormik({
        initialValues: {
            image: "",
            screen_Name: "",
            type: "",
        },
        validationSchema: yup.object().shape({
            screen_Name: yup.string().required("Required"),
            image: yup.string().required("Required"),
            type: yup.string().required("Required"),
        }),
        onSubmit: (values, formikHelpers) => {
            const updateScreenName = {
                screen_name: values?.screen_Name,
                type: values?.type?.toLowerCase(),
            };
            addScreenTypesApiCall(updateScreenName).then((res) => {
                if (res?.data?.status === true) {
                    dispatch(getScreenTypes());
                    dispatch(getAllUserRoutes());
                    onHide();
                    toast.success(res?.data?.message);
                } else {
                    toast.error(res?.data?.message);
                }
            }).catch((err) => {
                toast.error(err?.response?.data?.message);
            })

        },
    });
    const handleFileUpload = async (e: any) => {
        if (e?.target?.files) {
            formik.setFieldValue("image", e?.target?.files[0]);
            const result: any = await toBase64(e?.target?.files[0]);
            if (result) {
                setImage(result);
            }
        }
    };

    return (
        <>
            <form
                onSubmit={(e) => {
                    e?.preventDefault();
                    formik?.handleSubmit();
                }}
            >
                <div className={classes.container}>
                    <ImageInput
                        handleFileUpload={handleFileUpload}
                        label="Category Image"
                        placeHolder="Click to select category image"
                    />
                    {formik?.errors?.image && formik?.touched?.image && (
                        <p className={classes.errorText}>{formik?.errors?.image}</p>
                    )}
                    {image && (
                        <div className={classes.image}>
                            <img src={image} alt="Image" />
                        </div>
                    )}
                    <Input
                        value={formik?.values?.screen_Name}
                        onChange={formik.handleChange("screen_Name")}
                        type="text"
                        label="Category Name"
                    />
                    {formik?.errors?.screen_Name && formik?.touched?.screen_Name && (
                        <p className={classes.errorText}>{formik?.errors?.screen_Name}</p>
                    )}
                    <Input
                        value={formik?.values?.type}
                        onChange={formik?.handleChange("type")}
                        type="text"
                        label="Category Type"
                    />
                    {formik?.errors?.type && formik?.touched?.type && (
                        <p className={classes.errorText}>{formik?.errors?.type}</p>
                    )}
                    <CustomButton
                        type="submit"
                        containerClassName={classes.btn_container}
                        buttonClassName={classes.button}
                        text="Add"
                    />
                </div>
            </form>
        </>
    );
};

export default AddCatogoryScreen;
