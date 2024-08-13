export interface IWebContentReducer {
  contentCards: string | IContentCardApiCall;
  isContentCardsLoading: boolean;
  contentCardError: string;
  webContentResult: string | IWebContentApiResult;
  isWebContentLoading: boolean;
  webContentResultError: string;
}

export interface IContentCardApiCall {
  description: string;
  title: string;
  __v: number;
  _id: string;
  image: string;
}

export interface IWebContentApiResult {
  _id: string;
  section: number;
  heading: string;
  text?: string;
  __v: number;
  images: Image[];
}

export interface Image {
  image_url: string;
  public_id: string;
}
