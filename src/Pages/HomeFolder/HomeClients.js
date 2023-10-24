import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import GetAllClients from '../../APIS/GetAllClients'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomeClients = () => {
  let imageUrl = "http://admin.ashimaelectrotech.com/img/"

  const [res, setRes] = useState([]);
  const [res2,setRes2] = useState([])
  
  const [res3,setRes3] = useState([])
  const [res4,setRes4] = useState([])
  const [res5,setRes5] = useState([])

  useEffect(() => {
    fetch("https://admin.ashimaelectrotech.com/getAllClients", {
      method: "GET",
      mode:"cors",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json(console.log(response)))

      .then((json) => {
        setRes(json.Clients[0]);
        setRes2(json.Clients[1]);
        setRes3(json.Clients[2]);
        setRes4(json.Clients[3]);
        setRes5(json.Clients[4]);

        console.log(json.Clients[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
    <div>     {/* Clients */}
    <div className="container-inner clients">
      <h1>Clients</h1>
      <div className="sub-clients  paddingtb30">
      <Slider {...sliderSettings}>
        <Link className="clients-img" to={"/clints"}>
          <img src={imageUrl+res.image} alt="" />
          <h3>{res.title}</h3>
        </Link>
        <Link className="clients-img" to={"/clints"}>
          <img src={imageUrl+res2.image} alt="" />
          <h3>{res2.title}</h3>
        </Link>
        <Link className="clients-img" to={"/clints"}>
          <img src={imageUrl+res3.image} alt="" />
          <h3>{res3.title}</h3>
        </Link>
        <Link className="clients-img" to={"/clints"}>
          <img src={imageUrl+res4.image} alt="" />
          <h3>{res4.title}</h3>
        </Link>
        <Link className="clients-img" to={"/clints"}>
          <img src={imageUrl+res5.image} alt="" />
          <h3>{res5.title}</h3>
        </Link>

          
   
        <Link className="clients-img" to="/clints">
          <img src="images/right-arrow.jpg" alt="" />
          <h3>More</h3>
        </Link>
        </Slider>
      </div>
    </div></div>
  )
}

export default HomeClients