export interface IManageWSReducer {
  results: string | IManageWSResults[];
  isTitlesLoading: boolean;
  resultError: string;
  contactNumber: string;
  isContactNoLoading: boolean;
  contactNoError: string;
}

export interface IManageWSResults {
  description: string;
  title: string;
  __v: number;
  _id: string;
}
