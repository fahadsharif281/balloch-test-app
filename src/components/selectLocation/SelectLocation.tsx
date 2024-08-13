import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./SelectLocation.module.scss";
import CustomButton from "../common/Button/Button";
import AppGoogleMap from "../googleMap/AppGoogleMap";
import { useDispatch, useSelector } from "react-redux";
import {
  setLatitude,
  setLongitude,
} from "../../redux/reducers/locationReducer";
import { getAllMapLocations } from "../../redux/actions/dashboard.action";

const SelectLocation = ({
  to,
  heading,
  subHeading,
  formType,
  mapContainerClassName,
}: {
  to?: string;
  heading?: string;
  subHeading?: string;
  formType?: string;
  mapContainerClassName?: string;
}) => {
  const dispatch = useDispatch<any>();
  const { allMapLocations } = useSelector((state: any) => state.root.dashboard);
  const { selectedLocation } = useSelector((state: any) => state.root.location);
  useEffect(() => {
    dispatch(setLatitude(null));
    dispatch(setLongitude(null));
    dispatch(getAllMapLocations());
  }, []);
  const navigate = useNavigate();
  const [showNext, setShowNext] = useState(false);
  let mapContainerClass = classes.map_container;

  if (mapContainerClassName) {
    mapContainerClass = `${mapContainerClass} ${mapContainerClassName}`;
  }

  return (
    <>
      <div className={classes.container}>
        <div className={classes.flex_container}>
          {heading && <p className={classes.heading}>{heading}</p>}
          {to && showNext && (
            <CustomButton
              onClick={() => {
                if (to) {
                  navigate(to);
                }
              }}
              containerClassName={classes.btn_container}
              text="Next"
            />
          )}
        </div>
        {subHeading && <div className={classes.sub_heading}>{subHeading}</div>}
        <div className={mapContainerClass}>
          <AppGoogleMap
            handleClickOnMap={(e) => {
              setShowNext(true);
            }}
            allMapLocations={
              (formType && formType === "view") || formType === "edit"
                ? undefined
                : allMapLocations
            }
            selectedLocationLatitude={
              (formType && formType === "view") || formType === "edit"
                ? selectedLocation?.location?.coordinates[1]
                : undefined
            }
            selectedLocationLongitude={
              (formType && formType === "view") || formType === "edit"
                ? selectedLocation?.location?.coordinates[0]
                : undefined
            }
            locationCenter={
              (formType && formType === "view") || formType === "edit"
                ? {
                    lng: selectedLocation?.location?.coordinates[0],
                    lat: selectedLocation?.location?.coordinates[1],
                  }
                : undefined
            }
            type="marker"
            formType={formType}
          />
        </div>
      </div>
    </>
  );
};

export default SelectLocation;
