import React from "react";
import Homeproductslider from "./Homeproductslider";
import Homehero from "./Homehero";
import Homemain from "./Homemain";

const Home = () => {
  return (
    <React.Fragment>
      <Homehero />
      <Homemain />
      <Homeproductslider />
    </React.Fragment>
  );
};
export default Home;
