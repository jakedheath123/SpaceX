import spaceXDb from "../apis/spaceXDb";
import {
  GET_LAUNCHES,
  GET_SINGLE_LAUNCH,
  IS_VISIBLE,
  SET_TOGGLER_FALSE,
  GET_COMPANY_INFO
} from "./types";

export const getLaunches = () => dispatch =>
  spaceXDb.get("/launches?order=asc").then(response => {
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

export const toggleVisible = () => {
  return {
    type: IS_VISIBLE
  };
};

export const setTogglerFalse = () => {
  return {
    type: SET_TOGGLER_FALSE
  };
};
