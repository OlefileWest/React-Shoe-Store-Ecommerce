import React from "react";
import RadioButtons from "../RadioButtons/RadioButtons";

function Colors({ handleClickColor }) {
  const name = "Colors";

  return (
    <div>
      <h4>Colors</h4>
      <RadioButtons
        name={name}
        label="All"
        value="All"
        onclick={handleClickColor}
      />
      <RadioButtons
        name={name}
        label="Red"
        value="Red"
        onclick={handleClickColor}
      />
      <RadioButtons
        name={name}
        label="White"
        value="White"
        onclick={handleClickColor}
      />
      <RadioButtons
        name={name}
        label="Green"
        value="Green"
        onclick={handleClickColor}
      />
      <RadioButtons
        name={name}
        label="Black"
        value="Black"
        onclick={handleClickColor}
      />
      <RadioButtons
        name={name}
        label="Multi-Color"
        value="multiColor"
        onclick={handleClickColor}
      />
      <RadioButtons
        name={name}
        label="Blue"
        value="Blue"
        onclick={handleClickColor}
      />
    </div>
  );
}

export default Colors;
