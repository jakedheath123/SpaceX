import { combineReducers } from "redux";

import getAllLaunchesReducer from "./getAllLaunchesReducer";
import getSingleLaunchReducer from "./getSingleLaunchReducer";
import viewTogglerReducer from "./viewTogglerReducer";
import getCompanyInfoReducer from "./getCompanyInfoReducer";

export default combineReducers({
  launches: getAllLaunchesReducer,
  singleLaunch: getSingleLaunchReducer,
  showOrHide: viewTogglerReducer,
  companyInfo: getCompanyInfoReducer
});
