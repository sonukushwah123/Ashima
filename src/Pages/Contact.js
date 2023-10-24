import React from "react";
import { Link } from "react-router-dom";
import Form from "./Form";
import ExploreCatagories from "./HomeFolder/ExploreCatagories";
import DownloadButton from "./DownloadButton";

const Contact = () => {
  return (
    <div>
      {" "}
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
            <img src="images/slider-images03.jpg" alt="" />
          </div>
        </div>
      </div>
      {/* Contact Us */}
      <div className="container-inner contact paddind20">
        <h1>Contact Us</h1>
        <h4>Customer services &amp; technical advice</h4>
        <p>
          Our sales and technical teams are ready to assist with all your
          earthing &amp; lightning protection needs.
        </p>
        <p>
          You can contact us to place orders, request quotations and receive
          technical assistance through the following details below.
        </p>
        <p>
          Alternatively, fill out an enquiry form and our local team will be in
          touch.{" "}
        </p>
      </div>
      {/* Location */}
      <div className="container-inner location d-flax align-item-center justify-between paddind10">
        <div className="jaipur-location">
          <h4>Head Office</h4>
          <p>G-4-B, Indraprastha Residency,</p>
          <p>Near Gayatri Public School</p>
          <p>Swage Farm, Bhagawan Marg,</p>
          <p>Nandpuri, Sodala, Jaipur</p>
          <p>Rajasthan - 302019, India.</p>
        </div>
        <div className="chomu-location">
          <h4>Works</h4>
          <p>Plot No. 197,</p>
          <p>Silver Soil Industrial Park,</p>
          <p>Gram-Anatpura, Govindgarh,</p>
          <p>Chomu, Jaipur-303702</p>
          <p>Rajasthan, India</p>
        </div>
        <div className="contact-no">
          <h4>Contact No.</h4>
          <p>+91 98290 53764</p>
          <p>+91 86909 72754</p>
          <p>+91 95300 27222</p>
          <p>0141-2290807</p>
          <p>0141-2294336</p>
        </div>
        <div className="email">
          <h4>Email.</h4>
          <p>
            <Link href="mailto:rajeev@ashimaelectrotech.com">
              rajeev@ashimaelectrotech.com
            </Link>
          </p>
          <p>
            <Link href="mailto:info@ashimaelectrotech.com">
              info@ashimaelectrotech.com
            </Link>
          </p>
          <p>
            <Link href="mailto:sales@ashimaelectrotech.com">
              sales@ashimaelectrotech.com
            </Link>
          </p>
          <p>
            <Link href="mailto:js@ashimaelectrotech.com">
              js@ashimaelectrotech.com
            </Link>
          </p>
          <p>
            <Link href="mailto:support@ashimaelectrotech.com">
              support@ashimaelectrotech.com
            </Link>
          </p>
        </div>
      </div>
      {/* inquiry form */}
      <Form />
      <div className="container-inner information paddind20">
        <h1>More Information</h1>
        <ExploreCatagories />
      </div>
    </div>
  );
};

export default Contact;
