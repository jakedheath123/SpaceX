import spaceXDb from "../apis/spaceXDb";
import {
  GET_LAUNCHES,
  SIGN_IN,
  GET_SINGLE_LAUNCH,
  IS_VISIBLE,
  SET_FALSE
} from "./types";

export const getLaunches = () => dispatch =>
  spaceXDb.get("/launches?limit=20&&order=desc").then(response => {
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
