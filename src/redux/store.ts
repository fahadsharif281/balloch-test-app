import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import userReducer from "./reducers/userReducer";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import storage from "redux-persist/lib/storage";
import locationReducer from "./reducers/locationReducer";
import dashboardReducer from "./reducers/dashboardReducer";
import contactUsReducer from "./reducers/contactUsReducer";
import manageWelcomeScreenReducer from "./reducers/manageWelcomeScreenReducer";
import screenTypesReducer from "./reducers/screenTypesReducer";
import aboutUsReducer from "./reducers/aboutUsReducer";
import termsAndConditionsReducer from "./reducers/termsAndConditionsReducer";
import privacyPolicyReducer from "./reducers/privacyPolicyReducer";
import webContentReducer from "./reducers/webContentReducer";

const persistConfig = {
  key: "root",
  storage: storage,
};

const reducers = combineReducers({
  user: userReducer,
  location: locationReducer,
  dashboard: dashboardReducer,
  contactUs: contactUsReducer,
  manageWelcomeScreen: manageWelcomeScreenReducer,
  screenTypes: screenTypesReducer,
  aboutUs: aboutUsReducer,
  termsAndConditions: termsAndConditionsReducer,
  privacyPolicy: privacyPolicyReducer,
  webContent: webContentReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: {
    root: persistedReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
