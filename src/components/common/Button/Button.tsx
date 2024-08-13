import React from "react";
import classes from "./Button.module.scss";
import { IButtonProps } from "../../../models/common/IButtonProps";
import { Button } from "react-bootstrap";
const CustomButton = ({
  buttonClassName,
  containerClassName,
  text,
  ...props
}: IButtonProps) => {
  let buttonClass = classes.btn;
  let containerClass = classes.container;
  if (buttonClassName) {
    buttonClass = `${buttonClass} ${buttonClassName}`;
  }
  if (containerClassName) {
    containerClass = `${containerClass} ${containerClassName}`;
  }
  return (
    <div className={containerClass}>
      <Button className={buttonClass} {...props}>
        {text}
      </Button>
    </div>
  );
};

export default CustomButton;
