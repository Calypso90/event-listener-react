import React, { useState } from "react";

function Bluebox() {
  const [isBlue, setIsBlue] = useState(false);
  function handleClick() {
    setIsBlue(!isBlue)
  }
  return (
    <div
      onClick={handleClick}
      className={isBlue ? "bluebox" : "whiteBox"}
    ></div>
  );
}

export default Bluebox;
