import React from "react";

const Service = ({ image, title, text }) => {
  return (
    <div className="service-card py-5 text-center col text-white">
      <div className="service-img w-50 m-auto">
        <img src={image} alt={title} />
      </div>
      <h2 className="py-3">{title}</h2>
      <p className="lh-lg lead">{text}</p>
      <div className="hr"></div>
    </div>
  );
};

export default Service;
