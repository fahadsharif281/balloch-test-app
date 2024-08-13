import React, { useEffect } from "react";
import classes from "./ManageWelcomeScreen.module.scss";
import CustomButton from "../../components/common/Button/Button";
import BreadCrumbs from "../../components/common/BreadCrumbs/BreadCrumbs";
import FrontPageImg from "../../assets/png/FrontPage.png";
import { Input } from "../../components/common/Input/Input";
import { TextArea } from "../../components/common/TextArea/TextArea";
import {
  updateManageWelcomeContactDetailApiCall,
  updateManageWelcomeScreenTitlesApiCall,
} from "../../services/general.services";
import { useFormik } from "formik";
import {
  getManageWelcomeContactDetails,
  getManageWelcomeScreenTitles,
} from "../../redux/actions/manageWS.action";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const ManageWelcomeScreen = () => {
  const dispatch = useDispatch<any>();
  const { contactNumber, results, isTitlesLoading, isContactNoLoading } =
    useSelector((state: any) => state.root.manageWelcomeScreen);
  const formik = useFormik({
    initialValues: {
      id: "",
      title: "",
      contactNo: "",
      description: "",
    },
    onSubmit: (values) => {
      const updateTitleParams = {
        titleId: values?.id,
        title: values?.title,
        description: values?.description,
      };
      const updateContactParma = {
        contactNumber: values?.contactNo,
      };
      updateManageWelcomeScreenTitlesApiCall(updateTitleParams)
        .then((res) => {
          toast.success(res?.data?.message);
        })
        .catch((error) => {
          toast.error(error?.data?.message);
        });
      updateManageWelcomeContactDetailApiCall(updateContactParma);
    },
  });
  useEffect(() => {
    dispatch(getManageWelcomeScreenTitles());
    dispatch(getManageWelcomeContactDetails());
  }, []);

  useEffect(() => {
    formik.setFieldValue("contactNo", contactNumber);
    formik.setFieldValue("title", results?.title);
    formik.setFieldValue("id", results?._id);
    formik.setFieldValue("description", results?.description);
  }, [contactNumber, results]);

  const breadCrumbsItems = [
    { name: "Home", to: "/dashboard" },
    { name: "Manage Welcome Screen", to: "/manage-titles", active: true },
  ];

  return (
    <>
      <BreadCrumbs items={breadCrumbsItems} />
      <p className={classes.title}>Manage Welcome Screen</p>
      {!isTitlesLoading && !isContactNoLoading && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            formik.handleSubmit();
          }}
        >
          <div className={classes.main_container}>
            <div className={classes.container}>
              <Input
                value={formik?.values?.title}
                onChange={formik.handleChange("title")}
                label="Welcome Title:"
                type="text"
              />
              <Input
                value={formik?.values?.contactNo}
                onChange={formik.handleChange("contactNo")}
                label="Contact no:"
                type="text"
              />
              <TextArea
                value={formik?.values?.description}
                onChange={formik.handleChange("description")}
                label="Description"
                rows={3}
              />
              <CustomButton
                type="submit"
                buttonClassName={classes.button}
                text="Save"
              />
            </div>
            <div className={classes.img}>
              <img
                src={FrontPageImg}
                height="100%"
                width="100%"
                alt="FrontPageImg"
              />
              <div className={classes.heading}>{formik.values.title}</div>
              <div className={classes.subheading}>
                {formik.values.description}
              </div>
            </div>
          </div>
        </form>
      )}
    </>
  );
};

export default ManageWelcomeScreen;
