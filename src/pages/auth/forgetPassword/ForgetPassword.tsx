import React from "react";
import classes from "./ForgetPassword.module.scss";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { Input } from "../../../components/common/Input/Input";
import { useState } from "react";
import * as Yup from "yup";
import CustomButton from "../../../components/common/Button/Button";
import { forgetPasswordService } from "../../../services/auth/Auth";
import { toast } from "react-toastify";

const ForgetPassword = (): JSX.Element => {
  const navigate = useNavigate();
  const [passwordServiceData, setPasswordServiceData] = useState<any>("");
  const formik = useFormik({
    initialValues: {
      email: "",
      OTP: "",
    },
    onSubmit: (values) => {
      if (passwordServiceData) {
        if (values.OTP === passwordServiceData?.otp) {
          toast.success("OTP Matched Successfully ,Now you can reset password");
          navigate("/reset-password", { state: passwordServiceData });
        } else {
          toast.error(`OTP doesn't match`);
        }
      } else {
        forgetPasswordService(values.email)
          .then((res: any) => {
            if (res?.data?.statusCode === 200) {
              toast.success(res?.data?.message);
              setPasswordServiceData(res?.data?.data);
            } else {
              toast.error(res?.data?.message);
              setPasswordServiceData("");
            }
          })
          .catch((err: any) => {
            toast.error(err?.data?.message);
          });
      }
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email("Email must be valid")
        .required("Email is required"),
    }),
  });
  return (
    <>
      <div className={classes.container}>
        <Container>
          <Row className="vh-100 d-flex justify-content-center align-items-center ">
            <Col md={8} lg={5} xs={12}>
              <div className={classes.body}>
                {" "}
                <Card className="shadow rounded-3">
                  <Card.Body className={classes.cardbody}>
                    <div>
                      <div className="d-flex justify-content-between align-items-center mb-4">
                        <h3 className="mb-0">Forget Password</h3>
                        <p className=" small mb-0">
                          <NavLink to="/">Back</NavLink>
                        </p>
                      </div>
                      <div>
                        <Form
                          onSubmit={(e) => {
                            e.preventDefault();
                            formik.handleSubmit(e);
                          }}
                        >
                          <Input
                            type="email"
                            label="Enter Email Address for OTP Verification"
                            placeholder="Enter email address"
                            error={
                              formik.touched.email && formik.errors.email
                                ? formik.errors.email
                                : ""
                            }
                            value={formik.values.email}
                            onChange={formik.handleChange("email")}
                            onBlur={formik.handleBlur("email")}
                          />
                          {!!passwordServiceData && (
                            <Input
                              type="text"
                              label="OTP"
                              placeholder="Enter OTP"
                              value={formik.values.OTP}
                              onChange={formik.handleChange("OTP")}
                            />
                          )}
                          <div className="d-grid">
                            <CustomButton type="submit" text="Submit" />
                          </div>
                        </Form>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default ForgetPassword;
