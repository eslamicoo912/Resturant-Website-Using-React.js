import React from "react";

const ChefCard = ({ chef }) => {
  const { id, name, description, image } = chef;
  return (
    <div className="chef-card row">
      <div className="col info">
        <h1 className="mb-5">{name}</h1>
        <hr className="hr"></hr>
        <p className="lh-lg mt-5">{description}</p>
      </div>
      <div className="col">
        <img className="img-fluid" src={image} alt="" />
      </div>
    </div>
  );
};

export default ChefCard;
