import classes from "./WebsiteContent.module.scss";
import BreadCrumbs from "../../components/common/BreadCrumbs/BreadCrumbs";
import HomePageSection from "./HomePageSection";
import FeaturesSection from "./FeaturesSection";
import PlacestoVisit from "./PlacestoVisit";
import HowitWorksSection from "./HowitWorksSection";
import CardSection1 from "./CardSection1";
import CardSection2 from "./CardSection2";
import CardSection3 from "./CardSection3";
import FeaturesCardSection from "./FeaturesCardSection";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllContentCard,
  getWebPageContents,
} from "../../redux/actions/webContent.action";

const WebsiteContent = () => {
  const dispatch = useDispatch<any>();
  const breadCrumbsItems = [
    { name: "Home", to: "/dashboard" },
    { name: "Website Content", to: "/privacy-policy", active: true },
  ];
  useEffect(() => {
    dispatch(getAllContentCard());
    dispatch(getWebPageContents());
  }, []);
  return (
    <>
      <BreadCrumbs items={breadCrumbsItems} />
      <p className={classes.title}>Website Content</p>
      <HomePageSection />
      <FeaturesSection />
      <FeaturesCardSection />
      <PlacestoVisit />
      <HowitWorksSection />
      <CardSection1 />
      <CardSection2 />
      <CardSection3 />
    </>
  );
};

export default WebsiteContent;
