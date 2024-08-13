export interface ITextArea extends React.ComponentProps<"textarea"> {
  containerClassName?: string;
  labelClassName?: string;
  errorClassName?: string;
  textAreaClassName?: string;
  label?: string;
  error?: string;
}
