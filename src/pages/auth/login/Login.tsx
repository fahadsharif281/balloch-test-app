import classes from "./Login.module.scss";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { Input } from "../../../components/common/Input/Input";
import { useState } from "react";
import * as Yup from "yup";
import view from "../../../assets/png/view.png";
import hide from "../../../assets/png/hide.png";
import CustomButton from "../../../components/common/Button/Button";
import { postLoginUserAsync } from "../../../redux/actions/auth.action";

export const Login = (): JSX.Element => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch<any>();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      const credential = {
        email: values.email,
        password: values.password,
        navigate: navigate,
      };
      dispatch(postLoginUserAsync(credential));
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().email("Invalid email").required("Email is required"),
      password: Yup.string().min(8).required("Password is required"),
    }),
  });
  return (
    <>
      <div className={classes.container}>
        <Container>
          <Row className="vh-100 d-flex justify-content-center align-items-center">
            <Col md={8} lg={5} xs={12}>
              <div className={classes.body}>
                <Card className="shadow rounded-3 ">
                  <Card.Body className={classes.cardbody}>
                    <h3 className="d-flex justify-content-start align-items-center mb-4 ">
                      Login
                    </h3>
                    <div>
                      <Form
                        onSubmit={(e) => {
                          e.preventDefault();
                          formik.handleSubmit(e);
                        }}
                      >
                        <Input
                          type="email"
                          label="Email Address"
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

                        <Input
                          imageProps={{
                            src: show ? view : hide,
                            onClick: () => {
                              setShow(!show);
                            },
                          }}
                          type={show ? "text" : "password"}
                          label="Password"
                          placeholder="Enter password"
                          error={
                            formik.touched.password && formik.errors.password
                              ? formik.errors.password
                              : ""
                          }
                          value={formik.values.password}
                          onChange={formik.handleChange("password")}
                          onBlur={formik.handleBlur("password")}
                          imageClassName={classes.img}
                        />
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicCheckbox"
                        >
                          <p className="small d-flex justify-content-end">
                            <NavLink to="/forget-password">
                              Forgot password?
                            </NavLink>
                          </p>
                        </Form.Group>
                        <div className="d-grid">
                          <CustomButton type="submit" text="Login" />{" "}
                        </div>
                      </Form>
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
