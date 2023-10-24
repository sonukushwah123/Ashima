import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GetAllSectors from "../../APIS/GetAllSectors";

const HomeSectors = () => {
  console.log("sdgd",GetAllSectors())
  let imageUrl = "http://admin.ashimaelectrotech.com/img/";

  var sliderSettings = {
    slidesToShow: 6,
    slidesToScroll: 1,
    infinite: false,
   
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: false,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          initialSlide: 0,
         
        },
      },
    ],
  };


  return (
    <div>
      {" "}
      <div className="container-inner Sectors">
        <h1>Sectors</h1>
        <div className="sub-Sectors paddingtb30">
          <Slider {...sliderSettings}>
            {GetAllSectors().map((item) => {
              return (
                <Link className="Sectors-img" to={`/sector/${item.id}`}>
                  <img src={imageUrl + item.image} alt="" />
                  <h3>{item.title}</h3>
                </Link>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default HomeSectors;
