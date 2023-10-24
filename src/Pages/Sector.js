import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";

// import sectorsData from "./Json/sectors.json";
import ExploreCatagories from "./HomeFolder/ExploreCatagories";
import GetAllSectors from "../APIS/GetAllSectors";
import { useParams } from "react-router-dom";
import DownloadButton from "./DownloadButton";

const Sector = () => {
  const { id } = useParams();
  console.log(id, "id");

  let imageUrl = "http://admin.ashimaelectrotech.com/img/";

  let sector = GetAllSectors();

  const [res, setRes] = useState([]);

  useEffect(() => {
    fetch("https://admin.ashimaelectrotech.com/getAllSectors", {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json(console.log(response)))

      .then((json) => {
        console.log("tyknbzxcv", json.sectors);
        const filterData = json.sectors.filter((item) => {
          console.log(item);
          return item.id == id;
        });
        console.log("filterData", filterData);
        setRes(filterData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log("sector", sector);

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
            <img src="/images/sectors-slider.jpg" alt="" />
          </div>
        </div>
      </div>
      {/* Sectors */}
      <div className="container-inner solutions">
        <h1>Sectors</h1>
        <div className="sec-solutions">
          {res.map((item) => {
            console.log("item", item);
            return (
              <div
                className=" text-center 
               paddingtb30"
              >
                <Link className="solutions-img" to={item.id} spy={true}>
                  <img src={imageUrl + item.image} alt="" />
                  <h3>{item.title}</h3>
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      <div className="container-inner earthing-sectors paddind20">
        {res.map((item) => {
          return (
            <div id={item.id}>
              <h1>{item.title}</h1>
              <div dangerouslySetInnerHTML={{ __html: item.brief_desc }} />
            </div>
          );
        })}
      </div>
      <div className="container-inner solutions">
        <h1>Explore More Catagories</h1>
        <ExploreCatagories />
      </div>
    </div>
  );
};

export default Sector;
