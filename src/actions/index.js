import spaceXDb from "../apis/spaceXDb";
import { GET_LAUNCHES, SIGN_IN, GET_SINGLE_LAUNCH } from "./types";

export const getLaunches = () => dispatch =>
  spaceXDb.get("/launches?limit=20").then(response => {
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
