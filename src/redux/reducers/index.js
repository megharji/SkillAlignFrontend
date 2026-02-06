import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import loginReducer from "./Auth/loginReducer";
import signupReducer from "./Auth/signupReducer";

const rootPersistConfig = {
  key: "root",
  storage,
  whitelist: ["login"], // ✅ only login state persist
};

const rootReducer = combineReducers({
  login: loginReducer,
  signup: signupReducer,
});

export default persistReducer(rootPersistConfig, rootReducer);
