import { Result } from "./ILocationReducer";

export interface IDetailCard {
  title: string;
  addTo?: string;
  viewTo?: string;
  editTo?: string;
  results?: Result[];
}
