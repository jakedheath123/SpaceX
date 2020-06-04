import { combineReducers } from "redux";
import getAllLaunches from "./getAllLaunches";

export default combineReducers({
  launches: getAllLaunches
});
