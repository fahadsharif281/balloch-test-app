import React from "react";
import classes from "./ViewImage.module.scss";
import userAvatar from "../../assets/png/userAvatar.png";

const ViewImage = ({ label, src }: { label?: string; src: string }) => {
  return (
    <>
      <div className={classes.container}>
        <p className={classes.title}>{label}</p>
        <div className={classes.img_container}>
          <img src={src ? src : userAvatar} />
        </div>
      </div>
    </>
  );
};

export default ViewImage;
