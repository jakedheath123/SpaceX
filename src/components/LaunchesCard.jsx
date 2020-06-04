import React from "react";

const LaunchesCard = ({ launch }) => {
  console.log(launch);
  const { mission_name, links } = launch;

  return (
    <li>
      <h1>{mission_name}</h1>
      <img src={links.mission_patch} alt="Launch Logo" />
    </li>
  );
};

export default LaunchesCard;
