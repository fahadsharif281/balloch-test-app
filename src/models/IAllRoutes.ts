export interface IAllUserRoutes {
  message: string;
  status: boolean;
  result: Result[];
}

export interface Result {
  _id: string;
  screen_name: string;
  type: string;
  image: string;
  __v: number;
}
