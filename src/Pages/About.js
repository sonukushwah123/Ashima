import React from "react";
import { Link } from "react-router-dom";
import ExploreCatagories from "./HomeFolder/ExploreCatagories";
import DownloadButton from "./DownloadButton";

const About = () => {
  return (
    <div>
      <div className="container-inner d-flax align-item-center justify-between paddind20">
        <div className="heading">
          <h1 className="align-item-center">
            <img src="images/acme-logo02.jpg" alt="Acme Logo" /> - A Total
            Solution For Earthing &amp; Lightning Protection
          </h1>
        </div>
        <div className="down-btn">
        <DownloadButton />
        </div>
      </div>
      {/* Slider */}
      <div className="container-outer  ">
        <div className="slider">
          <div className=" container-inner">
            <img src="images/slider-images02.jpg" alt="" />
          </div>
        </div>
      </div>
      {/* About Us */}
      <div className="container-inner about paddind20">
        <h1>About Us</h1>
        <p>
          Over the Past decade and continue in present, ‘’ Ashima Electrotech
          (P) Ltd. (AEPL) has emerged as a leading manufacturer and solution
          provider in Electrical Protection field, our custom built products and
          solutions are pride of company. Customers from solar to electrical
          distributions and Banking to Telecom are the backbone to the company's
          success and we are thankful to our esteemed customers. Always keeping
          the quality and service on first priority our customers always get ‘’
          VALUE FOR MONEY’’.
        </p>
        <p>
          The Growing list of new customer along with Repeat orders from
          existing customers always keeps us on move. Certifications from CPRI,
          ERDA, NSIC and NABL accredited Labs have proved the quality of our
          products. Continuous development is a part of company policy and
          everybody in AEPL is committed to achieve their goal.
        </p>
      </div>
      {/* More information */}
      <div className="container-inner information paddind20">
        <h1>More Information</h1>
        <ExploreCatagories />
      </div>
    </div>
  );
};

export default About;
