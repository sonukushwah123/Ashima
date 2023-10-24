import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import GetAllSolutions from "../APIS/GetAllSolutions";

import ExploreCatagories from "./HomeFolder/ExploreCatagories";
import Loader from "./Loader";
import { dblClick } from "@testing-library/user-event/dist/click";
import DownloadButton from "./DownloadButton";

const La = () => {
  console.log(GetAllSolutions());
  let imageUrl = "http://admin.ashimaelectrotech.com/img/";

  const { id } = useParams();
  console.log(id, "id");
  const [res, SetRes] = useState([]);

  const [res2, setRes2] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  // const levelup = Data.message.filter((item) => {
  //   console.log(item);
  //   return item.category == id;
  // });

  // console.log(levelup);

  useEffect(() => {
    setIsLoading(true);

    fetch("https://admin.ashimaelectrotech.com/getAllSolutions", {
      method: "GET",
      mode: "cors",
    })
      .then((response) => response.json())

      .then((json) => {
        const levelup = json.message.filter((item) => {
          console.log(item);
          return item.category == id;
        });
        SetRes(levelup);

        console.log(levelup);
        console.log(json.message);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    fetch("https://admin.ashimaelectrotech.com/getAllSolutionsCategory", {
      method: "GET",
      mode: "cors",
    })
      .then((response) => response.json())

      .then((json) => {
        const newData = json.message.filter((item) => {
          console.log(item);
          return item.id == id;
        });
        setRes2(newData);
        console.log(newData);
        console.log(json.message);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const RenderHTML = (props) => (
    <p dangerouslySetInnerHTML={{ __html: props.HTML }}></p>
  );

  return (
    <>
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
      {res2.map((item) => {
        console.log("dsfffffffff", item);
        return (
          <>
            <div className="container-outer  ">
              <div className="slider">
                <div className=" container-inner">
                  <img src={imageUrl + item.backgroundImage} alt="" />
                </div>
              </div>
            </div>
            {/* about lightning */}
            <div className="container-inner Arrester paddind20">
              <RenderHTML HTML={item.short_description} />
            </div>
          </>
        );
      })}
      {/* ESE Lightning Arrester */}

      <div className="container-inner Arrester paddind20">
        {id === "17" ? (
          <>
            <h1>Surge Protection Device (SPDs)</h1>
            <h3 className="surge">Protection using the 3-stage method</h3>
            <ul class="paddind20">
              <li>Technical features differ from SPD to SPD.</li>
              <li>
                The SPDs of a protection system must be able to withstand the
                discharged current and provide a U<sub>res</sub>level (residual
                voltage) lower than the U<sub>e</sub> peak volatage that the
                equipment can withstand.
              </li>
              <li>
                Most of the times it is not possible to achieve this with just
                one SPD. The optimal system of protection is the CASCADE type,
                in which successive stages are comnbined in the performance of
                high discharge capacity devices and devices with an optimal
                voltage protection level (low).
              </li>
            </ul>

            <div class="ese d-flax align-item-center justify-between">
              <div class="ese-img">
                <h3 className="surge">SPD Application</h3>
                <img src="/images/spd-application.jpeg" alt="" />
                <h3 className="surge">SPD Overview</h3>
                <img src="/images/spd-overview.jpeg" alt="" />
                <img src="/images/spd-overview01.jpeg" alt="" />
              </div>
            </div>
          </>
        ) : null}
        {res.map((item) => {
          console.log(item);
          return (
            <>
              <div className="ese d-flax align-item-center flex-wrap justify-between">
                <div className="cu">
                  <h1>{item.heading}</h1>
                  <table className="table table-bordered table-striped table-hover table-condensed table-responsive">
                    <RenderHTML HTML={item.description} />
                  </table>
                  <div className="btn ">
                    <Link className="cart" href="#">
                      Add To Cart
                    </Link>
                    <Link className="buy" href="#">
                      Buy Now
                    </Link>
                  </div>
                </div>

                <div className="cu-img">
                  <img src={imageUrl + item.imager} alt="" />
                </div>
              </div>
            </>
          );
        })}
      </div>
      {/* Copper Lightning Arrester */}

      {/* mast Rods */}

      <div className="container-inner solutions">
        <h1>Explore More Catagories</h1>
        <ExploreCatagories />
      </div>
    </>
  );
};

export default La;
