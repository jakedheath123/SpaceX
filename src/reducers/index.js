import { combineReducers } from "redux";
import getAllLaunchesReducer from "./getAllLaunchesReducer";
import googleAuthReducer from "./googleAuthReducer";

export default combineReducers({
  launches: getAllLaunchesReducer,
  auth: googleAuthReducer
});
