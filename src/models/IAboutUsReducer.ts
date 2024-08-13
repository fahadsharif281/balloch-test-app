export interface IAboutUsReducer {
  aboutUsResults: string | IAboutUsReducerApiResponse;
  isAboutUsResultsLoading: boolean;
  aboutUsResultsError: string;
}

export interface IAboutUsReducerApiResponse {
  active: boolean;
  text: string;
  __v: number;
  _id: string;
}
