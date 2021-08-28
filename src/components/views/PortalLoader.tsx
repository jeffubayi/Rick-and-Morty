import React from "react";
import spinner from "../../img/spinner.gif";

const PortalLoader = () => {
  return (
    <img
      src={spinner}
      style={{  width: "25rem", height: "12rem", margin: "auto", display: "block" }}
      alt="Loading"
    />
  );
};

export default PortalLoader;