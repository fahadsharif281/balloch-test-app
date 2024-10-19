export interface IScreenTypesReducer {
  allUsers: string | IScreenTypesAPIResult[];
  isUsersLoading: boolean;
  allUsersError: string;
}

export interface IScreenTypesAPIResult {
  _id: string;
  screen_name: string;
  type: string;
  image: string;
  __v: number;
  isDeleted?: boolean;
}
