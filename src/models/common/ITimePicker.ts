import { MobileTimePickerProps } from "@mui/x-date-pickers";

export interface ITimePicker extends MobileTimePickerProps<any, any> {
  title?: string;
  onClear?: (e: any) => void;
  isClearAble?: boolean;
  containerClassName?: string;
  timePickerClassName?: string;
  imageClassName?: string;
  titleClassName?: string;
}
