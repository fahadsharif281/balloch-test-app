import { ReactNode } from "react";
import { ButtonProps } from "react-bootstrap";

export interface IButtonProps extends ButtonProps {
  buttonClassName?: string;
  text?: string | ReactNode;
  containerClassName?: string;
}
