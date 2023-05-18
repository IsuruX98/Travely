import React from "react";
// import { useContext } from "react";
// import { AuthContext } from "../context/authContext";

import Aboutus from "../components/aboutus/Aboutus";
import Hero2 from "../components/hero2/Hero2";
import Services from "../components/services/Services";
import Hero3 from "../components/hero2/Hero3";

const Home = () => {
  // const { user } = useContext(AuthContext);

  return (
    <div>
      <Hero2 />
      <Aboutus />
      <Services />
      <Hero3 />
    </div>
  );
};

export default Home;
