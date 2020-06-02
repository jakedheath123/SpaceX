import { combineReducers } from "redux";
import getAllSportsReducer from "./getAllSportsReducer";

export default combineReducers({
  sports: getAllSportsReducer
});
