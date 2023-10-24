import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import clientsData from "./Json/services.json";
import ExploreCatagories from "./HomeFolder/ExploreCatagories";
import GetAllClients from "../APIS/GetAllClients";
import DownloadButton from "./DownloadButton";

const Clints = () => {
  console.log(clientsData.message);
  const { id } = useParams();
  console.log(id, "id");

  let imageUrl = "http://admin.ashimaelectrotech.com/img/"
  
  return (
    <div>
      <div className="container-inner d-flax align-item-center justify-between paddind20">
        <div className="heading">
          <h1 className="align-item-center">
            <img src="/images/acme-logo02.jpg" alt="Acme Logo" /> - A Total
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
            <img src="/images/our-clients.jpg" alt="" />
          </div>
        </div>
      </div>
      <div className="container-inner solutions">
        <h1>Clients</h1>
        <div className="sec-solutions ">
          {GetAllClients().map((item)=>{
            return(
          <div className=" clients-img w-100 paddingtb30">
            <img src={imageUrl+item.image} alt="" />
            <h3>{item.title}</h3>
          </div>
          )
        })}

     
        </div>
      </div>
    
    
     
      <div className="container-inner solutions">
        <h1>Explore More Catagories</h1>
        <ExploreCatagories />
      </div>
    </div>
  );
};

export default Clints;
