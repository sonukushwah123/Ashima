import React from "react";
import Slider from "react-slick";
import GetAllSlider from "../../APIS/GetAllSlider";
import { Link } from "react-router-dom";
import DownloadButton from "../DownloadButton";

const HomeSlider = () => {
  // console.log(GetAllSlider())
  let imageUrl = "http://admin.ashimaelectrotech.com/img/";

  let sliderSettings = {
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
   
  };

  return (
    <div>
      {" "}
      <div className="container-inner d-flax align-item-center justify-between paddind20">
        <div className="heading">
          <h1 className="align-item-center">
            <img src="./images/acme-logo02.jpg" alt="Acme Logo" /> - A Total
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
            <Slider {...sliderSettings}>
              {GetAllSlider().map((item) => {
                return (
                  <div className="slider-content">
                    <div className="position-absolute text-center">
                  <h3 >{item.heading}</h3>
                  <p >{item.description}</p>
                  </div>
                    <img src={imageUrl + item.image} alt="" />
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSlider;
