export interface IDashboardReducer {
  allMapLocations: IDashboardMapDatum[] | string;
  isMapLocationLoading: boolean;
  mapLocationError: string;
  allUsers: string;
  walkingRouteCount: number;
  dogWalkCount: number;
  toiletCount: number;
}

export interface IDashboardReducerAPIResponse {
  message: string;
  data: IDashboardMapDatum[];
}

export interface IDashboardMapDatum {
  location: Location;
  _id: string;
  type: string;
  images: Image[];
  title: string;
  description: string;
  distance: string;
  avg_time: string;
  parking_capacity?: string;
  __v: number;
}

export interface ILocationCenter {
  lat: number;
  lng: number;
}

export interface Image {
  image_url: string;
  public_id: string;
}

export interface Location {
  coordinates: number[];
  type: Type;
}

export enum Type {
  Point = "Point",
}
