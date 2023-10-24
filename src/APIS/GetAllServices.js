import React, { useEffect, useState }  from 'react'

const GetAllServices = () => {
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
        setRes(json.successStory);

        console.log(json.successStory);
      })
      .catch((err) => {
        console.log(err);
      });
    }, []);
  return res
}

export default GetAllServices