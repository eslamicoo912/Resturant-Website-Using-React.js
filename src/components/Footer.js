import React from "react";

const Footer = () => {
  return (
    <div className="footer text-center">
      <div className="address m-5">
        <h3>Address</h3>
        <div className="hr my-4"></div>
        <p className="lead text-white-50">74 Norava Street, 542B Town 51 MT.</p>
      </div>
      <div className="timing m-5">
        <h3>Timing</h3>
        <div className="hr my-4"></div>
        <p className="lead text-white-50">
          Monday - Thursday 10:00 AM - 7:00 PM
        </p>
        <p className="lead text-white-50">
          Friday - Saturday 10:00 AM - 3:00 PM
        </p>{" "}
      </div>
      <div className="contact m-5">
        <h3>Contact</h3>
        <div className="hr my-4"></div>
        <p className="lead text-white-50">+20 101 354 0912</p>
        <p className="lead text-white-50">eslamicoo3@gmail.com</p>
      </div>
    </div>
  );
};

export default Footer;
