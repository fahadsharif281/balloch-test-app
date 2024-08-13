import React from "react";
import classes from "./TextArea.module.scss";
import { ITextArea } from "../../../models/common/ITextAreaProps";
export const TextArea = ({
  containerClassName,
  labelClassName,
  errorClassName,
  textAreaClassName,
  label,
  error,
  ...props
}: ITextArea) => {
  let labelClass = classes.label;
  let textAreaClass = error ? classes.error_input : classes.input;
  let errorClass = classes.error;
  let containerClass = classes.container;

  if (labelClassName) {
    labelClass = `${labelClass} ${labelClassName}`;
  }

  if (errorClassName) {
    errorClass = `${errorClass} ${labelClassName}`;
  }

  if (textAreaClassName) {
    textAreaClass = `${textAreaClass} ${textAreaClassName}`;
  }
  if (containerClassName) {
    containerClass = `${containerClass} ${containerClassName}`;
  }

  return (
    <div className={containerClass}>
      {label && <p className={labelClass}>{label}</p>}
      <textarea className={textAreaClass} {...props} />
      {error && <span className={errorClass}>{error}</span>}
    </div>
  );
};
