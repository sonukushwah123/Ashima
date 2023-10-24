import React, { useEffect, useState } from "react";

const GetAllSectors = () => {
    const [res, setRes] = useState([]);

    useEffect(() => {
      fetch("https://admin.ashimaelectrotech.com/getAllSectors", {
        method: "GET",
        mode:"cors",
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
        },
      })
        .then((response) => response.json(console.log(response)))
  
        .then((json) => {
          setRes(json.sectors);
  
          console.log(json.sectors[0]);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);
  return res
}

export default GetAllSectors