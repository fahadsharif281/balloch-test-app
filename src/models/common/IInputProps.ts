import { ReactNode } from "react";

export interface IInputProps extends React.ComponentProps<"input"> {
  containerClassName?: string;
  labelClassName?: string;
  errorClassName?: string;
  inputClassName?: string;
  label?: string;
  error?: string;
  src?: string;
  type: string;
  imageProps?: any;
  imageClassName?: string;
}

export interface IImageInput extends React.ComponentProps<"input"> {
  handleFileUpload: (e?: any) => void;
  placeHolder?: string | ReactNode;
  label?: string;
  labelClassName?: string;
  containerClassName?: string;
  placeHolderClassName?: string;
}
