import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GetAllServices from "../../APIS/GetAllServices";

const HomeServices = () => {
 
  let imageUrl = "http://admin.ashimaelectrotech.com/img/"
   

  var sliderSettings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: false,
   
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
         
          initialSlide: 4
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
      <div className="container-inner services">
        <h1>Services</h1>
        <div className="sub-services paddingtb30">
        <Slider {...sliderSettings} className="services">
        {GetAllServices()?.map((item) => {
               
                return (
          <Link className="services-img text-center" to={`/inspection/${item.id}`}>
            <img src={imageUrl+item.backLogo} alt="" />
            <h3>{item.heading}</h3>
          </Link>
                )})}
      
       
          
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default HomeServices;
