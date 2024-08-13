import React from "react";
import { Routes as ReactRoutes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { Login } from "../pages/auth/login/Login";
import ForgetPassword from "../pages/auth/forgetPassword/ForgetPassword";
import { useRoutes } from "../utils/hooks/useRoutes";
import Protected from "./Protected";
import Public from "./Public";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { LinearProgress } from "@mui/material";
import { useSelector } from "react-redux";
import classes from "./Routes.module.scss";
import ResetPassword from "../pages/auth/resetPassword/ResetPassword";
const Routes = (): JSX.Element => {
  const { userRoutes } = useRoutes();
  const { isLoading } = useSelector((state: any) => state.root.location);
  const { isContentCardsLoading, isWebContentLoading } = useSelector(
    (state: any) => state.root.webContent
  );
  const { isMapLocationLoading } = useSelector(
    (state: any) => state.root.dashboard
  );
  const { isResultsLoading } = useSelector(
    (state: any) => state.root.contactUs
  );
  const { isTitlesLoading, isContactNoLoading } = useSelector(
    (state: any) => state.root.manageWelcomeScreen
  );
  const { isUsersLoading } = useSelector(
    (state: any) => state.root.screenTypes
  );
  const { isAboutUsResultsLoading } = useSelector(
    (state: any) => state.root.aboutUs
  );
  const { isTermsAndConditionResultsLoading } = useSelector(
    (state: any) => state.root.termsAndConditions
  );
  const { isPrivacyPolicyResultsLoading } = useSelector(
    (state: any) => state.root.privacyPolicy
  );
  return (
    <>
      {(isLoading ||
        isResultsLoading ||
        isTitlesLoading ||
        isUsersLoading ||
        isAboutUsResultsLoading ||
        isTermsAndConditionResultsLoading ||
        isPrivacyPolicyResultsLoading ||
        isMapLocationLoading ||
        isContentCardsLoading ||
        isWebContentLoading ||
        isContactNoLoading) && (
          <div className={classes.loader_container}>
            <LinearProgress className={classes.loader} color="success" />
          </div>
        )}
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        theme="light"
      />
      <ReactRoutes>
        <Route index path="/" element={<Login />} />
        <Route element={<ForgetPassword />} path="/forget-password" />
        <Route element={<ResetPassword />} path="/reset-password" />
        {/* <Route element={<Public />}>
          <Route index path="/" element={<Login />} />
          <Route element={<ForgetPassword />} path="/forget-password" />
          <Route element={<ResetPassword />} path="/reset-password" />
        </Route> */}
        <Route element={<Protected />}>
          <Route element={<Layout />}>
            {userRoutes?.map((item) => {
              return (
                <>
                  <Route path={item?.to} element={<item.component />} />
                  {item?.edit_to && (
                    <Route
                      path={item?.edit_to}
                      element={<item.edit_component />}
                    />
                  )}
                  {item?.add_to && (
                    <Route
                      path={item?.add_to}
                      element={<item.add_component />}
                    />
                  )}
                  {item?.view_to && (
                    <Route
                      path={item?.view_to}
                      element={<item.view_component />}
                    />
                  )}
                  {item?.select_location_to && (
                    <Route
                      path={item?.select_location_to}
                      element={<item.select_location_component />}
                    />
                  )}
                </>
              );
            })}
          </Route>
        </Route>
        <Route path="*" element={"404 Page Not Found"} />
      </ReactRoutes>
    </>
  );
};
export default Routes;
