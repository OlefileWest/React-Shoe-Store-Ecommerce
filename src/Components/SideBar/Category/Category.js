import RadioButtons from "../RadioButtons/RadioButtons";

function Category({ handleClickCategory }) {
  const name = "category";

  return (
    <div>
      <h4>Category</h4>
      <RadioButtons
        name={name}
        label="All"
        value="All"
        onclick={handleClickCategory}
      />
      <RadioButtons
        name={name}
        label="Sandals"
        value="Sandals"
        onclick={handleClickCategory}
      />
      <RadioButtons
        name={name}
        label="Sneaker"
        value="Sneaker"
        onclick={handleClickCategory}
      />
      <RadioButtons
        name={name}
        label="Slides"
        value="Slides"
        onclick={handleClickCategory}
      />
      <RadioButtons
        name={name}
        label="Heels"
        value="Heel"
        onclick={handleClickCategory}
      />
    </div>
  );
}

export default Category;
