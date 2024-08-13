import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Input } from "../common/Input/Input";
import view from "../../assets/png/view.png";
import hide from "../../assets/png/hide.png";
import CustomButton from "../common/Button/Button";
import { useSelector } from "react-redux";
import classes from "./Header.module.scss";
import { updateNewPassword } from "../../services/general.services";
import { toast } from "react-toastify";

const EditPasswordModal = ({
  setDropDownMenu,
  handleClose,
}: {
  setDropDownMenu: (event: boolean) => void;
  handleClose: () => void;
}) => {
  const { user } = useSelector((state: any) => state.root.user);
  const [showimg1, setShowimg1] = useState(false);
  const [showimg2, setShowimg2] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: user?.email || "",
      newPassword: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object().shape({
      newPassword: Yup.string()
        .min(8, "New password must be at least 8 characters")
        .required("New password is required"),
      confirmPassword: Yup.string()
        .required("Confirm password is required")
        .oneOf(
          [Yup.ref("newPassword")],
          "Confirm password must match with new password"
        ),
    }),
    onSubmit: async (values) => {
      const credential = {
        adminId: user?._id,
        email: values.email,
        newPassword: values.newPassword,
      };
      updateNewPassword(credential)
        .then((res) => {
          if (res?.data?.statusCode === 404) {
            toast.error(res?.data?.message);
          } else {
            toast.success(res?.data?.message);
            setDropDownMenu(false);
            handleClose();
          }
        })
        .catch((error) => {
          toast.error(error?.data?.message);
        });
    },
  });
  return (
    <div>
      <form
        className={classes.modal_container}
        onSubmit={(e) => {
          e.preventDefault();
          formik.handleSubmit();
        }}
      >
        <Input
          type="email"
          label="Email Address"
          disabled
          value={formik.values.email}
        />
        <Input
          imageProps={{
            src: showimg1 ? view : hide,
            onClick: () => {
              setShowimg1(!showimg1);
            },
          }}
          type={showimg1 ? "text" : "password"}
          label="New Password"
          placeholder="Enter old password"
          error={
            formik.touched.newPassword && formik.errors.newPassword
              ? formik.errors.newPassword
              : ""
          }
          value={formik.values.newPassword}
          onChange={formik.handleChange("newPassword")}
          onBlur={formik.handleBlur("newPassword")}
          imageClassName={classes.image}
        />
        <Input
          imageProps={{
            src: showimg2 ? view : hide,
            onClick: () => {
              setShowimg2(!showimg2);
            },
          }}
          type={showimg2 ? "text" : "password"}
          label="Confirm Password"
          placeholder="Enter password"
          error={
            formik.touched.confirmPassword && formik.errors.confirmPassword
              ? formik.errors.confirmPassword
              : ""
          }
          value={formik.values.confirmPassword}
          onChange={formik.handleChange("confirmPassword")}
          onBlur={formik.handleBlur("confirmPassword")}
          imageClassName={classes.image}
        />
        <div className={classes.update_button}>
          <CustomButton type="submit" text="Update" />{" "}
        </div>
      </form>
    </div>
  );
};

export default EditPasswordModal;
