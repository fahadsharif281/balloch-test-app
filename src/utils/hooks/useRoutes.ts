import { useSelector } from "react-redux";
import Dashboard from "../../pages/Dashboard/Dashboard";
import { userRoutesAll } from "../../router/AllRoutes";
import dashboardImg from "../../assets/png/dashboard.png";
import contactUsImg from "../../assets/png/phoneIcon.png";
import privacyPolicyImg from "../../assets/png/privacypolicy.png";
import termAndConditionsImg from "../../assets/png/termAndConditions.png";
import aboutUsImg from "../../assets/png/aboutUs.png";
import screenTypesImg from "../../assets/png/screenTypes.png";
import manageWelcomeScreenImg from "../../assets/png/manageWelcomeScreen.png";
import webContentImg from "../../assets/png/webContent.png";
import ContactUs from "../../pages/ContactUs/ContactUs";
import PrivacyPolicy from "../../pages/PrivacyPolicy/PrivacyPolicy";
import TermAndConditions from "../../pages/TermandConditions/TermAndConditions";
import AboutUs from "../../pages/AboutUs/AboutUs";
import ScreenTypes from "../../pages/ScreenTypes/ScreenTypes";
import ManageWelcomeScreen from "../../pages/ManageWelcomeScreen/ManageWelcomeScreen";
import WebsiteContent from "../../pages/WebsiteContent/WebsiteContent";

export const useRoutes = () => {
  const { routes } = useSelector((state: any) => state.root.user);
  const mergeUserRoutes = routes?.map((item: any, index: number) => {
    const mapping = userRoutesAll?.find(
      (route: any) =>
        route?.type?.trim()?.toLowerCase() === item?.type?.trim()?.toLowerCase()
    );
    if (mapping) {
      return {
        ...item,
        ...mapping,
      };
    } else {
      return item;
    }
  }) || [];
  const userRoutes = [
    {
      to: "/dashboard",
      component: Dashboard,
      image: dashboardImg,
      screen_name: "Dashboard",
    },
    ...mergeUserRoutes,
    {
      to: "/screen-types",
      component: ScreenTypes,
      image: screenTypesImg,
      screen_name: "Screen Types",
    },
    {
      to: "/manage-titles",
      component: ManageWelcomeScreen,
      image: manageWelcomeScreenImg,
      screen_name: "Manage Welcome Screen",
    },
    {
      to: "/manage-content",
      component: WebsiteContent,
      image: webContentImg,
      screen_name: "Website Content",
    },
    {
      to: "/privacy-policy",
      component: PrivacyPolicy,
      image: privacyPolicyImg,
      screen_name: "Privacy Policy",
    },
    {
      to: "/terms-and-conditions",
      component: TermAndConditions,
      image: termAndConditionsImg,
      screen_name: "Term And Conditions",
    },
    {
      to: "/about-us",
      component: AboutUs,
      image: aboutUsImg,
      screen_name: "About us",
    },
    {
      to: "/contact-us",
      component: ContactUs,
      image: contactUsImg,
      screen_name: "Contact us",
    },
  ];

  return { userRoutes };
};
