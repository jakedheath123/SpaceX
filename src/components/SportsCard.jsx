import React from "react";

const SportsCard = ({ sport }) => {
  const { strSport, strSportThumb } = sport;

  return (
    <li>
      <h1>{strSport}</h1>
      <img src={strSportThumb} alt="Sport Logo" />
    </li>
  );
};

export default SportsCard;
