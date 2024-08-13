export interface IContactUsReducer {
  results: string | Result[];
  isResultsLoading: boolean;
  resultError: string;
}

export interface Root {
  message: string;
  status: boolean;
  result: Result[];
}

export interface Result {
  _id: string;
  email: string;
  __v: number;
  message?: string;
  full_name?: string;
}
