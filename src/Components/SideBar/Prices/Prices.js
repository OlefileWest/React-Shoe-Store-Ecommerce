import React from "react";
import RadioButtons from "../RadioButtons/RadioButtons";

function Prices() {
  const name = "prices";
  const handleClick = () => {};
  return (
    <div>
      <h4>Price range</h4>
      <RadioButtons name={name} label="All" value="All" onclick={handleClick} />
      <RadioButtons name={name} label="0 -499" value="" onclick={handleClick} />
      <RadioButtons
        name={name}
        label="500 - 999"
        value=""
        onclick={handleClick}
      />
      <RadioButtons
        name={name}
        label="1000 - 1499"
        value="White"
        onclick={handleClick}
      />
      <RadioButtons
        name={name}
        label="1500 - 1999"
        value="White"
        onclick={handleClick}
      />
    </div>
  );
}

export default Prices;
