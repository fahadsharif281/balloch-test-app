import React from "react";
import { useDispatch } from "react-redux";
import { resetUser } from "../../redux/reducers/userReducer";
import { useNavigate } from "react-router";
import { resetLocation } from "../../redux/reducers/locationReducer";
import { resetDashboard } from "../../redux/reducers/dashboardReducer";
import { resetContactUs } from "../../redux/reducers/contactUsReducer";
import { resetManageWelcomeScreen } from "../../redux/reducers/manageWelcomeScreenReducer";
import { resetAboutUs } from "../../redux/reducers/aboutUsReducer";
import { resetPrivacyPolicy } from "../../redux/reducers/privacyPolicyReducer";
import { resetScreenTypes } from "../../redux/reducers/screenTypesReducer";
import { resetTermsAndConditions } from "../../redux/reducers/termsAndConditionsReducer";

const useLogout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logout = () => {
    dispatch(resetUser());
    dispatch(resetLocation());
    dispatch(resetDashboard());
    dispatch(resetContactUs());
    dispatch(resetAboutUs());
    dispatch(resetManageWelcomeScreen());
    dispatch(resetPrivacyPolicy());
    dispatch(resetScreenTypes());
    dispatch(resetTermsAndConditions());
    navigate("/");
  };

  return { logout };
};

export default useLogout;
