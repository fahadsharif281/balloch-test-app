import React, { useEffect } from "react";
import classes from "./AboutUs.module.scss";
import CustomButton from "../../components/common/Button/Button";
import BreadCrumbs from "../../components/common/BreadCrumbs/BreadCrumbs";
import TextEditor from "../../components/common/TextEditor/TextEditor";
import { useDispatch, useSelector } from "react-redux";
import { getAllDataAboutUs } from "../../redux/actions/aboutUs.action";
import { useFormik } from "formik";
import { addAboutUsResultsApiCall } from "../../services/general.services";
import { resetAboutUs } from "../../redux/reducers/aboutUsReducer";
import { toast } from "react-toastify";

const AboutUs = () => {
  const dispatch = useDispatch<any>();
  const { isAboutUsResultsLoading, aboutUsResults } = useSelector(
    (state: any) => state.root.aboutUs
  );

  const breadCrumbsItems = [
    { name: "Home", to: "/dashboard" },
    { name: "About Us", to: "/about-us", active: true },
  ];

  useEffect(() => {
    dispatch(getAllDataAboutUs());
    return () => {
      dispatch(resetAboutUs());
    };
  }, []);

  useEffect(() => {
    formik.setFieldValue("text", aboutUsResults?.text);
  }, [aboutUsResults]);

  const formik = useFormik({
    initialValues: {
      text: "",
    },
    onSubmit: (values) => {
      const addAboutUsForm = {
        text: values?.text,
      };
      addAboutUsResultsApiCall(addAboutUsForm)
        .then((res) => {
          toast.success("Added Successfully");
        })
        .catch((error) => {
          toast.error(error?.data?.message);
        });
    },
  });
  return (
    <>
      <BreadCrumbs items={breadCrumbsItems} />
      <p className={classes.title}>About Us</p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          formik.handleSubmit();
        }}
      >
        <div className={classes.container}>
          {!isAboutUsResultsLoading && (
            <div>
              <TextEditor
                onChange={(_: any, editor: any) => {
                  formik.setFieldValue("text", editor.getData());
                }}
                initialValue={aboutUsResults?.text}
              />
            </div>
          )}
          <CustomButton
            type="submit"
            buttonClassName={classes.button}
            text="Save"
          />
        </div>
      </form>
    </>
  );
};

export default AboutUs;
