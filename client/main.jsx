import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { Provider } from "react-redux";
import store from "./app/store";

import "./index.css";

// TODO: Add React Router

// TODO: Add Redux Store

// TODO: Import any other providers needed (eg. Material UI)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
