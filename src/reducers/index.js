import { combineReducers } from "redux";
import getAllLaunchesReducer from "./getAllLaunchesReducer";
import googleAuthReducer from "./googleAuthReducer";
import getSingleLaunchReducer from "./getSingleLaunchReducer";
import viewTogglerReducer from "./viewTogglerReducer";

export default combineReducers({
  launches: getAllLaunchesReducer,
  auth: googleAuthReducer,
  singleLaunch: getSingleLaunchReducer,
  showOrHide: viewTogglerReducer
});
