import React from "react";

function Buttons({ onclick, buttonName }) {
  return (
    <div>
      <button onClick={onclick}>{buttonName}</button>
    </div>
  );
}

export default Buttons;
