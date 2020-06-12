import { combineReducers } from "redux";

import getAllLaunchesReducer from "./getAllLaunchesReducer";
import googleAuthReducer from "./googleAuthReducer";
import getSingleLaunchReducer from "./getSingleLaunchReducer";
import viewTogglerReducer from "./viewTogglerReducer";
import getCompanyInfoReducer from "./getCompanyInfoReducer";
import errorBoundaryReducer from "./errorBoundaryReducer";

export default combineReducers({
  launches: getAllLaunchesReducer,
  auth: googleAuthReducer,
  singleLaunch: getSingleLaunchReducer,
  showOrHide: viewTogglerReducer,
  companyInfo: getCompanyInfoReducer,
  errorBoundary: errorBoundaryReducer
});
