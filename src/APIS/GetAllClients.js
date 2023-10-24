import React, { useEffect, useState } from 'react'

const GetAllClients = () => {
    const [res, setRes] = useState([]);
  
    useEffect(() => {
      fetch("https://admin.ashimaelectrotech.com/getAllClients", {
      method: "GET",
      mode: "cors",
    })
      .then((response) => response.json())

      .then((json) => {
        setRes(json.Clients);

        console.log(json);
      })
      .catch((err) => {
        console.log(err);
      });
    }, []);
  return res
}

export default GetAllClients