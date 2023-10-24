import React from "react";


import HomeSlider from "./HomeSlider";
import HomeSolutions from "./HomeSolutions";
import HomeServices from "./HomeServices";
import HomeSectors from "./HomeSectors";
import HomeClients from "./HomeClients";

const Home = () => {
 
  return (
    <div>
    <HomeSlider />
 <HomeSolutions />
   <HomeServices />
   <HomeSectors />
 <HomeClients />
 
    </div>
  );
};

export default Home;
