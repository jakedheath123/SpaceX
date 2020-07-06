import { combineReducers } from "redux";

import getAllLaunchesReducer from "./getAllLaunchesReducer";
import getSingleLaunchReducer from "./getSingleLaunchReducer";
import viewTogglerReducer from "./viewTogglerReducer";

export default combineReducers({
  getAllLaunches: getAllLaunchesReducer,
  getSingleLaunch: getSingleLaunchReducer,
  viewToggler: viewTogglerReducer
});
