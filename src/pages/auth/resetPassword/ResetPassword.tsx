import React from "react";
import classes from "./ResetPassword.module.scss";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { Input } from "../../../components/common/Input/Input";
import { useState } from "react";
import view from "../../../assets/png/view.png";
import hide from "../../../assets/png/hide.png";
import * as Yup from "yup";
import CustomButton from "../../../components/common/Button/Button";
import { updateNewPassword } from "../../../services/general.services";
import { toast } from "react-toastify";

const ResetPassword = (): JSX.Element => {
  const location = useLocation();
  const [showimg1, setShowimg1] = useState(false);
  const [showimg2, setShowimg2] = useState(false);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object().shape({
      password: Yup.string()
        .min(8, "password must be at least 8 characters")
        .required("Password is required"),
      confirmPassword: Yup.string()
        .required("Confirm password is required")
        .oneOf([Yup.ref("password")], " Passwords must match "),
    }),
    onSubmit: async (values) => {
      const credentials = {
        adminId: location?.state?.userId,
        email: location?.state?.email,
        newPassword: values.confirmPassword,
      };
      updateNewPassword(credentials)
        .then((res) => {
          if (res?.data?.statusCode === 404) {
            toast.error(res?.data?.message);
          } else {
            toast.success(res?.data?.message);
            navigate("/");
          }
        })
        .catch((err) => {
          toast.error(err?.data?.message);
        });
    },
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
                        <h3 className="mb-0">Reset Password</h3>
                      </div>
                      <div>
                        <form
                          onSubmit={(e) => {
                            e.preventDefault();
                            formik.handleSubmit(e);
                          }}
                        >
                          <Input
                            imageProps={{
                              src: showimg1 ? view : hide,
                              onClick: () => {
                                setShowimg1(!showimg1);
                              },
                            }}
                            type={showimg1 ? "text" : "password"}
                            label="Password"
                            placeholder="Enter  password"
                            error={
                              formik.touched.password && formik.errors.password
                                ? formik.errors.password
                                : ""
                            }
                            value={formik.values.password}
                            onChange={formik.handleChange("password")}
                            onBlur={formik.handleBlur("password")}
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
                              formik.touched.confirmPassword &&
                              formik.errors.confirmPassword
                                ? formik.errors.confirmPassword
                                : ""
                            }
                            value={formik.values.confirmPassword}
                            onChange={formik.handleChange("confirmPassword")}
                            onBlur={formik.handleBlur("confirmPassword")}
                            imageClassName={classes.image}
                          />
                          <div className="d-grid">
                            <CustomButton
                              type="submit"
                              text="Update Password"
                            />
                          </div>
                        </form>
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
export default ResetPassword;
