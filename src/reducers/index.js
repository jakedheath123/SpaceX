import { combineReducers } from "redux";
import getAllLaunchesReducer from "./getAllLaunchesReducer";
import googleAuthReducer from "./googleAuthReducer";
import getSingleLaunchReducer from "./getSingleLaunchReducer";

export default combineReducers({
  launches: getAllLaunchesReducer,
  auth: googleAuthReducer,
  singleLaunch: getSingleLaunchReducer
});
