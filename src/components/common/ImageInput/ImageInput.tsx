import React, { ReactNode } from "react";
import { Input } from "../Input/Input";
import classes from "./ImageInput.module.scss";
import { IImageInput } from "../../../models/common/IInputProps";

const ImageInput = ({
  handleFileUpload = () => {},
  placeHolder,
  label,
  labelClassName,
  containerClassName,
  placeHolderClassName,
  ...props
}: IImageInput) => {
  let labelClass = classes.label;
  let containerClass = classes.upload_image_container;
  let placeHolderClass = classes.upload_image;
  if (containerClassName) {
    containerClass = `${containerClass} ${containerClassName}`;
  }
  if (labelClassName) {
    labelClass = `${labelClass} ${labelClassName}`;
  }
  if (placeHolderClassName) {
    placeHolderClass = `${placeHolderClass} ${placeHolderClassName}`;
  }
  return (
    <>
      {label && <p className={labelClass}>{label}</p>}
      <div className={containerClass}>
        {placeHolder && <p className={placeHolderClass}>{placeHolder}</p>}
        <Input type="file" onChange={handleFileUpload} {...props} />
      </div>
    </>
  );
};

export default ImageInput;
