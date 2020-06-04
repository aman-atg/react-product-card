// REDUX
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// APP -> REDUCERS
import userReducer from "./user/user.reducer";
import profileCardsReducer from "./profileCards/profileCards.reducer";

// CODE
const rootReducer = combineReducers({
  user: userReducer,
  profileCards: profileCardsReducer,
});

// add names of reducers to whitelist if you want to persist them
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["profileCards"],
};

export default persistReducer(persistConfig, rootReducer);
