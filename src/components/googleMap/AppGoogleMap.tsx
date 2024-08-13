import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";
import {
  IDashboardMapDatum,
  ILocationCenter,
} from "../../models/IDashboardRedcuer";
import { useDispatch, useSelector } from "react-redux";
import {
  setLatitude,
  setLongitude,
} from "../../redux/reducers/locationReducer";

const AppGoogleMap = ({
  allMapLocations,
  handleClickOnMap,
  type,
  locationCenter,
  selectedLocationLatitude,
  selectedLocationLongitude,
  formType,
}: {
  allMapLocations?: IDashboardMapDatum[];
  handleClickOnMap?: (event: any) => void;
  type: string;
  selectedLocationLatitude?: number;
  selectedLocationLongitude?: number;
  locationCenter?: ILocationCenter;
  formType?: string;
}) => {
  const dispatch = useDispatch();
  const { longitude, latitude } = useSelector(
    (state: any) => state.root.location
  );
  const { isLoaded } = useLoadScript({
    id: "google-map-script",
    googleMapsApiKey: `${process.env.REACT_APP_GOOGLE_MAP_API_KEY}`,
  });

  const containerStyle = {
    width: "100%",
    height: "100%",
  };

  const center = {
    lat: 56.00963,
    lng: -4.583497,
  };

  const handleClick = (e: any) => {
    if (handleClickOnMap) {
      handleClickOnMap(e);
    }
    if (formType !== "view") {
      dispatch(setLatitude(e?.latLng?.lat()));
      dispatch(setLongitude(e?.latLng?.lng()));
    }
  };

  return (
    <>
      {!isLoaded ? (
        <div>Loading Maps</div>
      ) : (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={locationCenter ? locationCenter : center}
          zoom={17}
          onLoad={() => {}}
          onClick={handleClick}
        >
          {allMapLocations &&
            allMapLocations?.map((item: IDashboardMapDatum, index: number) => {
              return (
                <MarkerF
                  key={index}
                  icon={{
                    scaledSize: new google.maps.Size(30, 30),
                    url: getMapIcon(item?.type),
                  }}
                  position={{
                    lat: item?.location?.coordinates[1],
                    lng: item?.location?.coordinates[0],
                  }}
                />
              );
            })}
          {type === "marker" && (
            <MarkerF
              position={{
                lat: latitude ? latitude : selectedLocationLatitude,
                lng: longitude ? longitude : selectedLocationLongitude,
              }}
            />
          )}
        </GoogleMap>
      )}
    </>
  );
};
export default AppGoogleMap;

export const getMapIcon = (type: string) => {
  if (type === "walking-route") {
    return require("../../assets/allMapLocationsWebApp/WalkingRoutes.png");
  } else if (type === "parking") {
    return require("../../assets/allMapLocationsWebApp/CarParking.png");
  } else if (type === "dog-walk") {
    return require("../../assets/allMapLocationsWebApp/WalkingRoutes.png");
  } else if (type === "toilet") {
    return require("../../assets/allMapLocationsWebApp/Toilet.png");
  } else if (type === "entrance") {
    return require("../../assets/allMapLocationsWebApp/Lifebuoys.png");
  } else if (type === "exit") {
    return require("../../assets/allMapLocationsWebApp/Lifebuoys.png");
  } else if (type === "view_point") {
    return require("../../assets/allMapLocationsWebApp/Viewpoints.png");
  } else if (type === "play_park") {
    return require("../../assets/allMapLocationsWebApp/History.png");
  } else if (type === "picnic_tables_benches") {
    return require("../../assets/allMapLocationsWebApp/PicnicTables.png");
  } else if (type === "castle") {
    return require("../../assets/allMapLocationsWebApp/Viewpoints.png");
  } else if (type === "amenities") {
    return require("../../assets/allMapLocationsWebApp/PicnicTables.png");
  } else if (type === "nature") {
    return require("../../assets/allMapLocationsWebApp/KidsPlayPark.png");
  } else if (type === "garden") {
    return require("../../assets/allMapLocationsWebApp/FairyTrail.png");
  } else if (type === "history") {
    return require("../../assets/allMapLocationsWebApp/History.png");
  } else if (type === "water_safety") {
    return require("../../assets/allMapLocationsWebApp/PlacesofInterest.png");
  } else {
    return null;
  }
};
