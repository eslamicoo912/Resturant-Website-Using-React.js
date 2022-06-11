import React from "react";
import Service from "./Service";

const About = () => {
  return (
    <div className="about">
      <div className="about-section w-75 m-auto row my-5">
        <div className="col about-img">
          <img
            className="img-fluid "
            src="https://static.wixstatic.com/media/0fd7cb_6cbbc16b3ff94e7796326304571b0096~mv2.png/v1/fill/w_526,h_715,al_c,lg_1,q_90,enc_auto/Capture_PNG.png"
          />
        </div>
        <div className="col about-content">
          <div className="h1-h2-container">
            <h1>Unique story</h1>
            <h2>ABOUT US</h2>
          </div>
          <p className="lead text-black-50 lh-lg">
            Restaurant food dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod eius modi tempora incidunt ut labore et dolore magnam
            aliquam quaerat eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat olore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation Duis aute irure dolor in reprehenderit in
            voluptate. Cafe ut perspiciatis unde omnis iste natus error sit
            voluptatem totam rem aperiam, eaque ipsa quae ab illo inventore
            veritatis dicta sunt explicabo.
          </p>
        </div>
      </div>
      <div className="services-section">
        <div className="row w-75 m-auto">
          <Service
            image="https://cefrax.websitelayout.net/img/icon-events.png"
            title="PRIVATE EVENTS"
            text="We provide best and fresh quality foods. We also gives you required signature dishes."
          />
          <Service
            image="https://cefrax.websitelayout.net/img/icon-order.png"
            title="ONLINE ORDER"
            text="We provide best and fresh quality foods. We also gives you required signature dishes."
          />
          <Service
            image="https://cefrax.websitelayout.net/img/icon-delivery.png"
            title="FREE DELIVERY"
            text="We provide best and fresh quality foods. We also gives you required signature dishes."
          />
          <Service
            image="https://cefrax.websitelayout.net/img/icon-foods.png"
            title="DELICIOUS FOODS"
            text="We provide best and fresh quality foods. We also gives you required signature dishes."
          />
        </div>
      </div>
    </div>
  );
};

export default About;
