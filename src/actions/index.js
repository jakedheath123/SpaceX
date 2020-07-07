import spaceXDb from "../apis/spaceXDb";
import {
  GET_ALL_LAUNCHES,
  GET_SINGLE_LAUNCH,
  IS_VISIBLE,
  SET_TOGGLER_FALSE
} from "./types";

export const getAllLaunches = launch_year => dispatch =>
  spaceXDb
    .get("/launches", {
      params: {
        order: "asc",
        launch_year,
        limit: "50"
      }
    })
    .then(response => {
      return dispatch({
        type: GET_ALL_LAUNCHES,
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
