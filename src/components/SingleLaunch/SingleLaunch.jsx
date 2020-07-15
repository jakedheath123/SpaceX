import React, { useEffect } from "react";

import "./SingleLaunch.css";
import Loader from "../Loader/Loader";
import SingleLaunchCard from "./SingleLaunchCard";

const SingleLaunch = ({
  getSingleLaunch,
  flight_number,
  singleLaunch: { data, isLoading },
  setTogglerFalse
}) => {
  useEffect(() => {
    getSingleLaunch(flight_number);
  }, [getSingleLaunch, flight_number]);

  return isLoading ? (
    <Loader />
  ) : (
    <SingleLaunchCard launch={data} setTogglerFalse={setTogglerFalse} />
  );
};

export default SingleLaunch;
