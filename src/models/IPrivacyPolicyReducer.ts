export interface IPrivacyPolicyReducer {
  privacyPolicyResults: string | IPrivacyPolicyReducerApiResponse;
  isPrivacyPolicyResultsLoading: boolean;
  privacyPolicyResultsError: string;
}

export interface IPrivacyPolicyReducerApiResponse {
  active: boolean;
  text: string;
  __v: number;
  _id: string;
}
