import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GetAllSolutions from "../../APIS/GetAllSolutions";


const HomeSolutions = () => {

  console.log("GetAllSolutions()",GetAllSolutions())

  let imageUrl = "http://admin.ashimaelectrotech.com/img/"

 
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
      {/* Solution */}
      <div className="container-inner solutions">
        <>
          <h1>Solutions</h1>
          <div className="sub-solutions  paddingtb30">
            <Slider {...sliderSettings}>
              {GetAllSolutions()?.map((item) => {
               console.log("item",item)
                return (
                  <Link className="solutions-img" to={`/la/${item.id}`}>
                    <img src={imageUrl+item.image} alt="" />
                    <h3>{item.title}</h3>
                  </Link>
                );
              })}
              <Link className="information-img" to="/form">
                <img src="images/mail.jpg" alt="" />
                <h3>Enquiry Form</h3>
              </Link>
              <Link className="solutions-img" to="/contact">
                <img src="images/call.jpg" alt="" />
                <h3>Contact Us</h3>
              </Link>
         
            </Slider>
          </div>
        </>
      </div>
    </div>
  );
};

export default HomeSolutions;
