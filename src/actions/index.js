import spaceXDb from "../apis/spaceXDb";
import {
  GET_LAUNCHES,
  SIGN_IN,
  GET_SINGLE_LAUNCH,
  IS_VISIBLE,
  SET_FALSE,
  GET_COMPANY_INFO,
  SET_ERROR_BOUNDARY
} from "./types";

export const getLaunches = () => dispatch =>
  spaceXDb.get("/launches?limit=30&&order=asc").then(response => {
    return dispatch({
      type: GET_LAUNCHES,
      payload: response.data
    });
  });

export const getSingleLaunch = flight_number => dispatch => {
  spaceXDb.get(`/launches/${flight_number}`).then(response => {
    return dispatch({
      type: GET_SINGLE_LAUNCH,
      payload: response.data
    });
  });
};

export const getCompanyInfo = () => dispatch => {
  spaceXDb.get("/info").then(response => {
    return dispatch({
      type: GET_COMPANY_INFO,
      payload: response.data
    });
  });
};

export const signIn = userId => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};

export const toggleVisible = () => {
  return {
    type: IS_VISIBLE
  };
};

export const setFalse = () => {
  return {
    type: SET_FALSE
  };
};

export const setErrorBoundary = () => {
  return {
    type: SET_ERROR_BOUNDARY
  };
};
