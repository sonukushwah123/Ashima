import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import ExploreCatagories from "./HomeFolder/ExploreCatagories";
import DownloadButton from "./DownloadButton";

const Inspection = () => {

  const { id } = useParams();
  console.log(id, "id");
  const [res, setRes] = useState([]);

 


  useEffect(() => {
    fetch("https://admin.ashimaelectrotech.com/getAllServices", {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())

      .then((json) => {
        const filterData = json.successStory.filter((item) => {
          console.log(item);
          return item.id == id;
        });
        console.log("filterData", filterData);
        setRes(filterData);
 console.log(json.successStory)
        console.log(filterData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  const RenderHTML = (props) => (
    <p dangerouslySetInnerHTML={{ __html: props.HTML }}></p>
  );
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
            <img src="/images/services01.jpg" alt="" />
          </div>
        </div>
      </div>
      {/* About Us */}
      <div className="container-inner inspection paddind20">
        <h1>Sevices</h1>
        <p>
          AEPL carryout soil resistivity survey to determine the exact type of
          soil and resistance at specific location. The work is always done with
          the help of latest test &amp; measuring instruments. Type of soil and
          its resistivity plays an important role in deciding the earthing
          system of any installation.
        </p>
        {res.map((item) => {
          return (
            <>
              {" "}
              <h3>{item.heading}</h3>
              <p>
              <RenderHTML HTML={item.description} />
              </p>
            </>
          );
        })}
       
        <p>
          A report is presented to customer at the end which indicates the
          present electric safety level along with corrective measures to be
          carryout in future.
        </p>
      </div>
      {/* More information */}
      <div className="container-inner information paddind20">
        <h1>More Information</h1>
      <ExploreCatagories/>
      </div>
    </div>
  );
};

export default Inspection;
