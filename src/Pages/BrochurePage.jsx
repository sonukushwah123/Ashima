import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
let urlPdf = "https://admin.ashimaelectrotech.com/img/";

const BrochurePage = () => {
  const [res, setRes] = useState([]);

  useEffect(() => {
    axios
      .get("https://admin.ashimaelectrotech.com/getAllBroshure")

      .then((res) => setRes(res.data.Broshure));
  }, []);
  return (
    <div className="body container m-auto">
      <table className="table table-bordered">
        <thead>
          <tr className="bg-secondary text-white">
            <th>#</th> <th>Heading</th>
            <th>Description</th>
            {/* <th>Image</th> */}
            <th>Download</th>
          </tr>
        </thead>
        <tbody>
          {res.map((item, index) => {
            console.log(item);
            return (
              <tr>
                <td>{index + 1}</td>

                <td>{item.heading}</td>
                <td>{item.description}</td>
                {/* <td style={{width:"20%"}}>
                 <img src="/images/lightning.jpg" className="w-100" style={{height:"100px",objectFit:"contain"}} alt="" />
                </td> */}
                <td>
                  <Link to={urlPdf + item.pdf} target="_blank" alt="" download>
                    Download.pdf
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default BrochurePage;
