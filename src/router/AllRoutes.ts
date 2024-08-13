import AddCarParking from "../pages/CarParking/AddCarParking";
import AddCarParkingSelectLocation from "../pages/CarParking/AddCarParkingSelectLocation";
import CarParking from "../pages/CarParking/CarParking";
import EditCarParkingDetails from "../pages/CarParking/EditCarParkingDetails";
import ViewCarParkingDetails from "../pages/CarParking/ViewCarParkingDetails";
import AddDangerousWaters from "../pages/DangerousWaters/AddDangerousWaters";
import AddDangerousWatersSelectLocation from "../pages/DangerousWaters/AddDangerousWatersSelectLocation";
import DangerousWaters from "../pages/DangerousWaters/DangerousWaters";
import EditDangerousWaters from "../pages/DangerousWaters/EditDangerousWaters";
import ViewDangerousWaters from "../pages/DangerousWaters/ViewDangerousWaters";
import AddEntrancesAndExit from "../pages/EntrancesAndExit/AddEntrancesAndExit";
import AddEntrancesAndExitSelectLocation from "../pages/EntrancesAndExit/AddEntrancesAndExitSelectLocation";
import EditEntrancesAndExit from "../pages/EntrancesAndExit/EditEntrancesAndExit";
import EntrancesAndExit from "../pages/EntrancesAndExit/EntrancesAndExit";
import ViewEntrancesAndExit from "../pages/EntrancesAndExit/ViewEntrancesAndExit";
import AddFairyTrails from "../pages/FairyTrails/AddFairyTrails";
import AddFairyTrailsSelectLocation from "../pages/FairyTrails/AddFairyTrailsSelectLocation";
import EditFairyTrails from "../pages/FairyTrails/EditFairyTrails";
import FairyTrails from "../pages/FairyTrails/FairyTrails";
import ViewFairyTrails from "../pages/FairyTrails/ViewFairyTrails";
import AddGardenWoodsAndFairy from "../pages/GardenWoodsAndFairy/AddGardenWoodsAndFairy";
import AddGardenWoodsAndFairySelectLocation from "../pages/GardenWoodsAndFairy/AddGardenWoodsAndFairySelectLocation";
import EditGardenWoodsAndFairy from "../pages/GardenWoodsAndFairy/EditGardenWoodsAndFairy";
import GardenWoodsAndFairy from "../pages/GardenWoodsAndFairy/GardenWoodsAndFairy";
import ViewGardenWoodsAndFairy from "../pages/GardenWoodsAndFairy/ViewGardenWoodsAndFairy";
import AddHistory from "../pages/History/AddHistory";
import AddHistorySelectLocation from "../pages/History/AddHistorySelectLocation";
import EditHistory from "../pages/History/EditHistory";
import History from "../pages/History/History";
import ViewHistory from "../pages/History/ViewHistory";
import AddKidsPlay from "../pages/KidsPlay/AddKidsPlay";
import AddKidsPlaySelectLocation from "../pages/KidsPlay/AddKidsPlaySelectLocation";
import EditKidsPlay from "../pages/KidsPlay/EditKidsPlay";
import KidsPlay from "../pages/KidsPlay/KidsPlay";
import ViewKidsPlay from "../pages/KidsPlay/ViewKidsPlay";
import AddLifeBouys from "../pages/LifeBouys/AddLifeBouys";
import AddLifeBouysSelectLocation from "../pages/LifeBouys/AddLifeBouysSelectLocation";
import EditLifeBouys from "../pages/LifeBouys/EditLifeBouys";
import LifeBouys from "../pages/LifeBouys/LifeBouys";
import ViewLifeBouys from "../pages/LifeBouys/ViewLifeBouys";
import AddNatureTrails from "../pages/NatureTrails/AddNatureTrails";
import AddNatureTrailsSelectLocation from "../pages/NatureTrails/AddNatureTrailsSelectLocation";
import EditNatureTrails from "../pages/NatureTrails/EditNatureTrails";
import NatureTrails from "../pages/NatureTrails/NatureTrails";
import ViewNatureTrails from "../pages/NatureTrails/ViewNatureTrails";
import AddParkAndCastle from "../pages/ParkAndCastle/AddParkAndCastle";
import AddParkAndCastleSelectLocation from "../pages/ParkAndCastle/AddParkAndCastleSelectLocation";
import EditParkAndCastle from "../pages/ParkAndCastle/EditParkAndCastle";
import ParkAndCastle from "../pages/ParkAndCastle/ParkAndCastle";
import ViewParkAndCastle from "../pages/ParkAndCastle/ViewParkAndCastle";
import AddPicnicTables from "../pages/PicnicTables/AddPicnicTables";
import AddPicnicTablesSelectLocation from "../pages/PicnicTables/AddPicnicTablesSelectLocation";
import EditPicnicTables from "../pages/PicnicTables/EditPicnicTables";
import PicnicTables from "../pages/PicnicTables/PicnicTables";
import ViewPicnicTables from "../pages/PicnicTables/ViewPicnicTables";
import AddPointOfInterest from "../pages/PointOfInterest/AddPointOfInterest";
import AddPointOfInterestSelectLocation from "../pages/PointOfInterest/AddPointOfInterestSelectLocation";
import EditPointOfInterest from "../pages/PointOfInterest/EditPointOfInterest";
import PointOfInterest from "../pages/PointOfInterest/PointOfInterest";
import ViewPointOfInterest from "../pages/PointOfInterest/ViewPointOfInterest";
import AddToiltes from "../pages/Toilets/AddToiltes";
import AddToiltesSelectLocation from "../pages/Toilets/AddToiltesSelectLocation";
import EditToiltes from "../pages/Toilets/EditToiltes";
import Toiltes from "../pages/Toilets/Toiltes";
import ViewToiltes from "../pages/Toilets/ViewToiltes";
import AddViewPoints from "../pages/ViewPoints/AddViewPoints";
import AddViewPointsSelectLocation from "../pages/ViewPoints/AddViewPointsSelectLocation";
import EditViewPoints from "../pages/ViewPoints/EditViewPoints";
import ViewPoints from "../pages/ViewPoints/ViewPoints";
import ViewViewPoints from "../pages/ViewPoints/ViewViewPoints";

export const userRoutesAll = [
  {
    to: "/entrance-exit",
    component: EntrancesAndExit,
    type: "walking-route",
    add_to: "/entrance-exit/select-location/add-form",
    add_component: AddEntrancesAndExit,
    select_location_to: "/entrance-exit/select-location",
    select_location_component: AddEntrancesAndExitSelectLocation,
    edit_to: "/entrance-exit/edit-details",
    edit_component: EditEntrancesAndExit,
    view_to: "/entrance-exit/view-details",
    view_component: ViewEntrancesAndExit,
  },
  {
    to: "/car-parking",
    component: CarParking,
    type: "dog-walk",
    add_to: "/car-parking/select-location/add-form",
    add_component: AddCarParking,
    select_location_to: "/car-parking/select-location",
    select_location_component: AddCarParkingSelectLocation,
    edit_to: "/car-parking/edit-details",
    edit_component: EditCarParkingDetails,
    view_to: "/car-parking/view-details",
    view_component: ViewCarParkingDetails,
  },
  {
    to: "/toilets",
    component: Toiltes,
    type: "parking",
    add_to: "/toilets/select-location/add-form",
    add_component: AddToiltes,
    select_location_to: "/toilets/select-location",
    select_location_component: AddToiltesSelectLocation,
    edit_to: "/toilets/edit-details",
    edit_component: EditToiltes,
    view_to: "/toilets/view-details",
    view_component: ViewToiltes,
  },
  {
    to: "/park-and-castle",
    component: ParkAndCastle,
    type: "toilet",
    add_to: "/park-and-castle/select-location/add-form",
    add_component: AddParkAndCastle,
    select_location_to: "/park-and-castle/select-location",
    select_location_component: AddParkAndCastleSelectLocation,
    edit_to: "/park-and-castle/edit-details",
    edit_component: EditParkAndCastle,
    view_to: "/park-and-castle/view-details",
    view_component: ViewParkAndCastle,
  },
  {
    to: "/garden-woods",
    component: GardenWoodsAndFairy,
    type: "view_point",
    add_to: "/garden-woods/select-location/add-form",
    add_component: AddGardenWoodsAndFairy,
    select_location_to: "/garden-woods/select-location",
    select_location_component: AddGardenWoodsAndFairySelectLocation,
    edit_to: "/garden-woods/edit-details",
    edit_component: EditGardenWoodsAndFairy,
    view_to: "/garden-woods/view-details",
    view_component: ViewGardenWoodsAndFairy,
  },
  {
    to: "/history",
    component: History,
    type: "play_park",
    add_to: "/history/select-location/add-form",
    add_component: AddHistory,
    select_location_to: "/history/select-location",
    select_location_component: AddHistorySelectLocation,
    edit_to: "/history/edit-details",
    edit_component: EditHistory,
    view_to: "/history/view-details",
    view_component: ViewHistory,
  },
  {
    to: "/nature-trails",
    component: NatureTrails,
    type: "picnic_tables_benches",
    add_to: "/nature-trails/select-location/add-form",
    add_component: AddNatureTrails,
    select_location_to: "/nature-trails/select-location",
    select_location_component: AddNatureTrailsSelectLocation,
    edit_to: "/nature-trails/edit-details",
    edit_component: EditNatureTrails,
    view_to: "/nature-trails/view-details",
    view_component: ViewNatureTrails,
  },
  {
    to: "/view-points",
    component: ViewPoints,
    type: "castle",
    add_to: "/view-points/select-location/add-form",
    add_component: AddViewPoints,
    select_location_to: "/view-points/select-location",
    select_location_component: AddViewPointsSelectLocation,
    edit_to: "/view-points/edit-details",
    edit_component: EditViewPoints,
    view_to: "/view-points/view-details",
    view_component: ViewViewPoints,
  },
  {
    to: "/picnic-tables",
    component: PicnicTables,
    type: "amenities",
    add_to: "/picnic-tables/select-location/add-form",
    add_component: AddPicnicTables,
    select_location_to: "/picnic-tables/select-location",
    select_location_component: AddPicnicTablesSelectLocation,
    edit_to: "/picnic-tables/edit-details",
    edit_component: EditPicnicTables,
    view_to: "/picnic-tables/view-details",
    view_component: ViewPicnicTables,
  },
  {
    to: "/kids-play",
    component: KidsPlay,
    type: "nature",
    add_to: "/kids-play/select-location/add-form",
    add_component: AddKidsPlay,
    select_location_to: "/kids-play/select-location",
    select_location_component: AddKidsPlaySelectLocation,
    edit_to: "/kids-play/edit-details",
    edit_component: EditKidsPlay,
    view_to: "/kids-play/view-details",
    view_component: ViewKidsPlay,
  },
  {
    to: "/fairy-trails",
    component: FairyTrails,
    type: "garden",
    add_to: "/fairy-trails/select-location/add-form",
    add_component: AddFairyTrails,
    select_location_to: "/fairy-trails/select-location",
    select_location_component: AddFairyTrailsSelectLocation,
    edit_to: "/fairy-trails/edit-details",
    edit_component: EditFairyTrails,
    view_to: "/fairy-trails/view-details",
    view_component: ViewFairyTrails,
  },
  {
    to: "/point-of-interest",
    component: PointOfInterest,
    type: "water_safety",
    add_to: "/point-of-interest/select-location/add-form",
    add_component: AddPointOfInterest,
    select_location_to: "/point-of-interest/select-location",
    select_location_component: AddPointOfInterestSelectLocation,
    edit_to: "/point-of-interest/edit-details",
    edit_component: EditPointOfInterest,
    view_to: "/point-of-interest/view-details",
    view_component: ViewPointOfInterest,
  },
  {
    to: "/dangerous-waters",
    component: DangerousWaters,
    type: "entrance",
    add_to: "/dangerous-waters/select-location/add-form",
    add_component: AddDangerousWaters,
    select_location_to: "/dangerous-waters/select-location",
    select_location_component: AddDangerousWatersSelectLocation,
    edit_to: "/dangerous-waters/edit-details",
    edit_component: EditDangerousWaters,
    view_to: "/dangerous-waters/view-details",
    view_component: ViewDangerousWaters,
  },
  {
    to: "/life-bouys",
    component: LifeBouys,
    type: "exit",
    add_to: "/life-bouys/select-location/add-form",
    add_component: AddLifeBouys,
    select_location_to: "/life-bouys/select-location",
    select_location_component: AddLifeBouysSelectLocation,
    edit_to: "/life-bouys/edit-details",
    edit_component: EditLifeBouys,
    view_to: "/life-bouys/view-details",
    view_component: ViewLifeBouys,
  },
];
