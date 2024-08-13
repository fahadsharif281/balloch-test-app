import React, { useRef } from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileTimePicker } from "@mui/x-date-pickers/MobileTimePicker";
import { ITimePicker } from "../../../models/common/ITimePicker";
import closeIcon from "../../../assets/png/close.png";
import classes from "./TimePicker.module.scss";

const TimePicker = ({
  containerClassName,
  timePickerClassName,
  imageClassName,
  titleClassName,
  title,
  isClearAble,
  onClear = () => {},
  ...props
}: ITimePicker) => {
  let timePickerClass = classes.picker_class;
  let containerClass = classes.container;
  let imageClass = classes.close_icon;
  let titleClass = classes.title;
  if (timePickerClassName) {
    timePickerClass = `${timePickerClass} ${timePickerClassName}`;
  }
  if (containerClassName) {
    containerClass = `${containerClass} ${containerClassName}`;
  }
  if (imageClassName) {
    imageClass = `${imageClass} ${imageClassName}`;
  }
  if (titleClassName) {
    titleClass = `${titleClass} ${titleClassName}`;
  }

  return (
    <>
      <div className={containerClass}>
        {title && <p className={titleClass}>{title}</p>}
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <MobileTimePicker className={timePickerClass} {...props} />
          {isClearAble && (
            <img onClick={onClear} className={imageClass} src={closeIcon} />
          )}
        </LocalizationProvider>
      </div>
    </>
  );
};

export default TimePicker;
