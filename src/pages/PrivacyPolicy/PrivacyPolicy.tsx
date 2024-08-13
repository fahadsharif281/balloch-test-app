import React, { useEffect } from "react";
import classes from "./PrivacyPolicy.module.scss";
import CustomButton from "../../components/common/Button/Button";
import BreadCrumbs from "../../components/common/BreadCrumbs/BreadCrumbs";
import TextEditor from "../../components/common/TextEditor/TextEditor";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { getPrivacyPolicyResults } from "../../redux/actions/privacyPolicy.action";
import { resetPrivacyPolicy } from "../../redux/reducers/privacyPolicyReducer";
import { addPrivacyPolicyApiCall } from "../../services/general.services";
import { toast } from "react-toastify";

const PrivacyPolicy = () => {
  const dispatch = useDispatch<any>();
  const { isPrivacyPolicyResultsLoading, privacyPolicyResults } = useSelector(
    (state: any) => state.root.privacyPolicy
  );
  const breadCrumbsItems = [
    { name: "Home", to: "/dashboard" },
    { name: "Privacy Policy", to: "/privacy-policy", active: true },
  ];
  useEffect(() => {
    dispatch(getPrivacyPolicyResults());
    return () => {
      dispatch(resetPrivacyPolicy());
    };
  }, []);

  useEffect(() => {
    formik.setFieldValue("text", privacyPolicyResults?.text);
  }, [privacyPolicyResults]);

  const formik = useFormik({
    initialValues: {
      text: "",
    },
    onSubmit: (values) => {
      const addPrivacyPolicyForm = {
        text: values?.text,
      };
      addPrivacyPolicyApiCall(addPrivacyPolicyForm)
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
      <p className={classes.title}>Privacy Policy</p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          formik.handleSubmit();
        }}
      >
        <div className={classes.container}>
          {!isPrivacyPolicyResultsLoading && (
            <div>
              <TextEditor
                onChange={(_: any, editor: any) => {
                  formik.setFieldValue("text", editor.getData());
                }}
                initialValue={privacyPolicyResults?.text}
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

export default PrivacyPolicy;
