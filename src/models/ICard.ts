import React, { ReactNode } from "react";

export interface ICard extends React.ComponentProps<"div"> {
  cardClassName?: string;
  src?: string;
  title?: string;
  description?: string;
  handleEdit?: (event: any) => void;
  handleDelete?: (event: any) => void;
  containerClassName?: string;
}
