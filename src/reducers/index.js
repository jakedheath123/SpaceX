import { combineReducers } from "redux";
import getAllLaunches from "./getAllLaunches";
import googleAuthReducer from "./googleAuthReducer";

export default combineReducers({
  launches: getAllLaunches,
  auth: googleAuthReducer
});
