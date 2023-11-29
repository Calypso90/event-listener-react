import { useState } from "react";

function Race() {
  const [race, setRace] = useState(0);

  function handleKeyDown(e) {
    console.log(e.key);
    if (e.key === "ArrowRight") {
      setRace(race + 10);
      console.log("right");
    } else if (e.key === "ArrowLeft") {
      setRace(race - 10);
      console.log("left");
    }
  }

  // window.addEventListener("keydown", () => {
  //   console.log("key down");
  // });
 
  return (
    <div tabIndex={0} onKeyDown={handleKeyDown}>
      <p>Move car to the right by pressing the right arrow</p>
      <div id="raceCar" style={{ marginLeft: race }}>
        🏎
      </div>
    </div>
  );
}

export default Race;
