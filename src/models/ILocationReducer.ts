export interface ILoactionReducer {
  allLocations: string | Result[];
  isLoading: boolean;
  error: string;
  longitude: string | number;
  latitude: string | number;
  selectedLocation: string | Result;
}

export interface ILocationAPIResponse {
  message: string;
  statusCode: number;
  result: Result[];
}

export interface Result {
  location: Location;
  _id: string;
  type: string;
  images: Image[];
  title: string;
  description: string;
  distance: string;
  avg_time: string;
  __v: number;
}

export interface Location {
  coordinates: number[];
  type: string;
}

export interface Image {
  image_url: string;
  public_id: string;
}
