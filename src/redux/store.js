// REDUX
import { applyMiddleware, createStore } from "redux";
import { persistStore } from "redux-persist";
import thunk from "redux-thunk";

// DEV
import { logger } from "redux-logger";

// APP
import rootReducer from "./root-reducer";

// add thunk to middlewares' Array
const middlewares = [thunk];

// also add logger to it if we are in development
if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

// CODE
const store = createStore(rootReducer, applyMiddleware(...middlewares));
const persistor = persistStore(store);

export { store, persistor };
