import React, { useState } from "react";
import breakfastData from "../breakfastData";
import lunchData from "../lunchData";
import dinnerData from "../dinnerData";
import Footer from "./Footer";

const Menu = () => {
  const [data, setData] = useState(breakfastData);
  const [active, setActive] = useState("break");

  function handleBreakFastClick() {
    setData(breakfastData);
    setActive("break");
  }

  function handleLunchClick() {
    setData(lunchData);
    setActive("lunch");
  }

  function handleDinnerClick() {
    setData(dinnerData);
    setActive("dinner");
  }

  const list = data.map((item) => {
    const { id, name, price, desc } = item;
    return (
      <div className="menu-card p-4 col-5 m-auto" key={id}>
        <div className="primary-info">
          <h5>{name}</h5>
          <p>${price}</p>
        </div>
        <p className="lead lh-lg">{desc}</p>
      </div>
    );
  });

  return (
    <div className="menu-container  mt-5 pt-5">
      <div className="menu w-75 m-auto">
        <div className="list mb-5">
          <div
            className={active === "break" ? "active" : ""}
            onClick={handleBreakFastClick}
          >
            BREAKFAST
          </div>
          <div
            className={active === "lunch" ? "active" : ""}
            onClick={handleLunchClick}
          >
            LUNCH
          </div>
          <div
            className={active === "dinner" ? "active" : ""}
            onClick={handleDinnerClick}
          >
            DINNER
          </div>
        </div>
        <div className="py-5 content row gap-5">{list}</div>
      </div>
      <Footer />
    </div>
  );
};

export default Menu;
