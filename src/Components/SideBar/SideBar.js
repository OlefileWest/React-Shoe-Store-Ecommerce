import React from "react";
import "./SideBar.css";
import Category from "./Category/Category";
import Colors from "./Colors/Colors";
import Prices from "./Prices/Prices";

function SideBar({ handleClickCategory, handleClickColor, handlePrice }) {
  return (
    <div id="sideBar">
      <Category handleClickCategory={handleClickCategory} />
      <Colors handleClickColor={handleClickColor} />
      <Prices handlePrice={handlePrice} />
    </div>
  );
}

export default SideBar;
