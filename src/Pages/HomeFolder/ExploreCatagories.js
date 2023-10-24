import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GetAllSolutions from "../../APIS/GetAllSolutions";


const ExploreCatagories = () => {
    const { id } = useParams();
    console.log("iddddddd",id)

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
      <div className="sub-solutions paddingtb30">
      <Slider {...sliderSettings}>
        {GetAllSolutions()?.map((item) => {
            console.log(item)
            return(
             
        <Link className="solutions-img  outline-0" onClick={() => window.location.href=`/la/${item.id}`} to={`/la/${item.id}`}>
          <img src={imageUrl+item.image} alt="" />
          <h3>{item.title}</h3>
        </Link>
     
        )
    })}
        
        <Link className="information-img" to="/form">
          <img src="/images/mail.jpg" alt="" />
          <h3>Enquiry Form</h3>
        </Link>
        <Link className="information-img" to="/contact">
          <img src="/images/call01.jpg" alt="" />
          <h3>Contact Us</h3>
        </Link>
        <Link className="information-img" to="/about">
          <img src="/images/profile.jpg" alt="" />
          <h3>About Us</h3>
        </Link>
        </Slider>
      </div>
    </div>
  );
};

export default ExploreCatagories;
