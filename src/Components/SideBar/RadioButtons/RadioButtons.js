import React from "react";
import "./RadioButtons.css";

function RadioButtons({ name, onclick, label, value }) {
  return (
    <div>
      <input
        className="radioButtons"
        type="radio"
        name={name}
        value={value}
        onClick={onclick}
      />
      {label}
    </div>
  );
}

export default RadioButtons;
