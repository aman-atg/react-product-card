// DEFAULT
import React from "react";
import ReactDOM from "react-dom";

// REDUX
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";

// APP
import "./styles/index.css";
import App from "./App";

// CODE
ReactDOM.render(
  <Provider store={store}>
    {/* Use BrowserRouter here if needed */}
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
