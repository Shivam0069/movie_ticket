import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import appStore, { persistor } from "./utils/appStore";
import { PersistGate } from "redux-persist/integration/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={appStore}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
  // <React.StrictMode>
  // </React.StrictMode>
);
