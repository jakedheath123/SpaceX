import theSportsDb from "../apis/theSportsDb";
import { GET_ALL_SPORTS } from "./types";

export const getAllSports = () => dispatch =>
  theSportsDb.get("/all_sports.php").then(response => {
    return dispatch({
      type: GET_ALL_SPORTS,
      payload: response.data.sports
    });
  });
