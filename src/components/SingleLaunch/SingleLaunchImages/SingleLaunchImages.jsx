import React from "react";

import "./SingleLaunchImages.css";

const SingleLaunchImages = ({ images }) => {
  return (
    <>
      {!images.length ? (
        <p>No images</p>
      ) : (
        <ul className="single-launch-images">
          {images.map(image => {
            return (
              <li key={image}>
                <img src={image} alt="Rocket" />
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default SingleLaunchImages;
