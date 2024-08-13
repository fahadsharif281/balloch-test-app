import React, { useEffect } from "react";
import classes from "./TermandConditions.module.scss";
import CustomButton from "../../components/common/Button/Button";
import BreadCrumbs from "../../components/common/BreadCrumbs/BreadCrumbs";
import TextEditor from "../../components/common/TextEditor/TextEditor";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { addTermsAndConditionsApiCall } from "../../services/general.services";
import { getAllTermsAndConditionResults } from "../../redux/actions/termsAndConditions.action";
import { resetTermsAndConditions } from "../../redux/reducers/termsAndConditionsReducer";
import { toast } from "react-toastify";

const TermAndConditions = () => {
  const dispatch = useDispatch<any>();
  const { isTermsAndConditionResultsLoading, termsAndConditionResults } =
    useSelector((state: any) => state.root.termsAndConditions);
  const breadCrumbsItems = [
    { name: "Home", to: "/dashboard" },
    { name: "Term And Conditions", to: "/terms-and-conditions", active: true },
  ];
  useEffect(() => {
    dispatch(getAllTermsAndConditionResults());
    return () => {
      dispatch(resetTermsAndConditions());
    };
  }, []);

  useEffect(() => {
    formik.setFieldValue("text", termsAndConditionResults?.text);
  }, [termsAndConditionResults]);

  const formik = useFormik({
    initialValues: {
      text: "",
    },
    onSubmit: (values) => {
      const addTermsAndConditionForm = {
        text: values?.text,
      };
      addTermsAndConditionsApiCall(addTermsAndConditionForm)
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
      <p className={classes.title}>Term And Conditions</p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          formik.handleSubmit();
        }}
      >
        <div className={classes.container}>
          {!isTermsAndConditionResultsLoading && (
            <div>
              <TextEditor
                onChange={(_: any, editor: any) => {
                  formik.setFieldValue("text", editor.getData());
                }}
                initialValue={termsAndConditionResults?.text}
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

export default TermAndConditions;
