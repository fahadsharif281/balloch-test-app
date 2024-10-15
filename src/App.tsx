import "bootstrap/dist/css/bootstrap.min.css";
import Routes from "./router/Routes";
import { initializeConfig } from "./utils/config";
import React, { useEffect } from "react";
import { BrowserRouter as ReactRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

const App = (): JSX.Element => {
  useEffect(() => {
    initializeConfig(store);
  }, []);
  return (
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <ReactRouter>
            <Routes />
          </ReactRouter>
        </PersistGate>
      </Provider>
    </React.StrictMode>
  );
};

export default App;
