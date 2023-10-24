import React, { useEffect, useState } from 'react'

const GetAllSlider = () => {

    const [res, setRes] = useState([]);

  useEffect(() => {

    
    fetch("https://admin.ashimaelectrotech.com/getAllSlaider", {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json(console.log(res)))

      .then((res) => {
        setRes(res.slaider);

        console.log(res.slaider);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return res
}

export default GetAllSlider