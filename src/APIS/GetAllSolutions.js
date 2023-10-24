import React, { useEffect, useState } from "react";

const GetAllSolutions = () => {
  const [res, setRes] = useState([]);

  useEffect(() => {
    fetch("https://admin.ashimaelectrotech.com/getAllSolutionsCategory", {
      method: "GET",
      mode: "cors",
    })
      .then((response) => response.json())

      .then((json) => {
        setRes(json.message);

        console.log(json.message);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return res;
};

export default GetAllSolutions;
