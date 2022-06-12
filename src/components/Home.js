import React, { useState } from "react";
import chefsData from "../chefsData";
import ChefCard from "./ChefCard";
import { FcPrevious } from "react-icons/fc";
import { FcNext } from "react-icons/fc";
import Dishes from "./Dishes";
import Footer from "./Footer";

export const Home = () => {
  // A state to manage the "previous" and "next" button
  const [count, setCount] = useState(0);

  // The list that contains the data of the chefs
  const list = chefsData.map((item) => {
    // Passing the chef data as props to the "Chef Card"
    return <ChefCard chef={item} />;
  });

  // This function will be executed after clicking "Next" button
  function handleNext() {
    if (count === chefsData.length - 1) return;
    setCount(count + 1);
  }

  // This function will be executed after clicking "Previous" button
  function handlePrev() {
    if (count === 0) return;
    setCount(count - 1);
  }

  return (
    <div className="home mt-5">
      <div className="chefs-data w-75 m-auto">
        <FcPrevious className="icon me-5" onClick={handlePrev}>
          Prev
        </FcPrevious>
        {list[count]}
        <FcNext className="icon ms-5" onClick={handleNext}>
          Next
        </FcNext>
      </div>
      <div className="dishes h1-h2-container my-5 py-5 w-75 m-auto">
        <div className="title text-center">
          <h1>Discover our popular dishes</h1>
          <h2>FOOD GALLERY</h2>
          <Dishes />
        </div>
      </div>
      <Footer />
    </div>
  );
};
