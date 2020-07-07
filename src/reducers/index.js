import { combineReducers } from "redux";

import allLaunchesReducer from "./allLaunchesReducer";
import singleLaunchReducer from "./singleLaunchReducer";
import viewTogglerReducer from "./viewTogglerReducer";

export default combineReducers({
  allLaunches: allLaunchesReducer,
  singleLaunch: singleLaunchReducer,
  viewToggler: viewTogglerReducer
});
