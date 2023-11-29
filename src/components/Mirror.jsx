import React, { useState } from "react";

function Mirror() {
  const [mirror, setMirror] = useState("");

  return (
    <div>
      <input type="text" onChange={(e) => setMirror(e.target.value)} />
      <p>{mirror}</p>
    </div>
  );
}

export default Mirror;
