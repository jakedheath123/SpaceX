import spaceXDb from "../apis/spaceXDb";
import { GET_LAUNCHES, SIGN_IN } from "./types";

export const getLaunches = () => dispatch =>
  spaceXDb.get("/launches?limit=20").then(response => {
    return dispatch({
      type: GET_LAUNCHES,
      payload: response.data
    });
  });

export const signIn = userId => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};
