import React from "react";
import classes from "./Input.module.scss";
import { IInputProps } from "../../../models/common/IInputProps";
export const Input = ({
  containerClassName,
  labelClassName,
  errorClassName,
  inputClassName,
  imageClassName,
  label,
  error,
  type,
  imageProps = {},
  ...props
}: IInputProps) => {
  let labelClass = classes.label;
  let inputClass = error ? classes.error_input : classes.input;
  let errorClass = classes.error;
  let imageClass = classes.img;
  let containerClass = classes.container;
  const { src } = imageProps;

  if (labelClassName) {
    labelClass = `${labelClass} ${labelClassName}`;
  }

  if (errorClassName) {
    errorClass = `${errorClass} ${labelClassName}`;
  }

  if (inputClassName) {
    inputClass = `${inputClass} ${inputClassName}`;
  }
  if (containerClassName) {
    containerClass = `${containerClass} ${containerClassName}`;
  }
  if (imageClassName) {
    imageClass = `${imageClass} ${imageClassName}`;
  }

  return (
    <div className={containerClass}>
      {label && <p className={labelClass}>{label}</p>}
      <input className={inputClass} type={type} {...props} />
      {src && <img className={imageClass} src={src} {...imageProps}></img>}
      {error && <span className={errorClass}>{error}</span>}
    </div>
  );
};
