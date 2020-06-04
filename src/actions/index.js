import spaceXDb from "../apis/spaceXDb";
import { GET_LAUNCHES } from "./types";

export const getLaunches = () => dispatch =>
  spaceXDb.get("/launches?limit=20").then(response => {
    return dispatch({
      type: GET_LAUNCHES,
      payload: response.data
    });
  });
