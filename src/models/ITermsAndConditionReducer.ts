export interface ITermsAndConditionReducer {
  termsAndConditionResults: string | ITermsAndConditionReducerApiResponse;
  isTermsAndConditionResultsLoading: boolean;
  termsAndConditionResultsError: string;
}

export interface ITermsAndConditionReducerApiResponse {
  active: boolean;
  text: string;
  __v: number;
  _id: string;
}
