import React from "react";
import classes from "./Card.module.scss";
const Card = ({
  heading,
  subheading,
  id,
}: {
  heading: string;
  subheading: string;
  id: string;
}) => {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <div className={classes.title}> {heading}</div>
        <h4 className={classes.subtitle}>{subheading}</h4>
      </div>
    </div>
  );
};

export default Card;
