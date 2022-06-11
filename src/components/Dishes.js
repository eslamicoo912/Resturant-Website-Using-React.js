import React from "react";
import dishesData from "../dishesData";

const Dishes = () => {
  const list = dishesData.map((dish) => {
    const { id, name, image } = dish;
    return (
      <div className="img-dish my-3 col-4">
        <img className="w-75" src={image} alt={name} />
        <div className="img-overlay">{name}</div>
      </div>
    );
  });
  return <div className="dishes row my-5">{list}</div>;
};

export default Dishes;
