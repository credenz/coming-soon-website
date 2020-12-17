import React, { useEffect } from "react";
import Aboutus from "./Aboutus/Aboutus";
import Sponsors from "./sponsors/sponsors";
import HomeAnimation from "./HomeAnimation/HomeAnimation";
import classes from "./HomeComponent.module.css";
import Timer from "./Timer";

const Home = () => {
  return (
    <div className="container">
      <div className="d-flex justify-content-center">
        <img alt="black" src={require('../assests/img/final-logo.png')}></img>
      </div>
      <div className="d-flex justify-content-center">
        {/* <h1 style={{color: "ivory"}}>Credenz Home Page</h1> */}
        <HomeAnimation />
      </div>
      <div className="d-flex justify-content-center">
        {/* <h1 style={{color: "ivory"}}>Credenz Home Page</h1> */}
        <h1>Coming Soon!</h1>
      </div>
    </div>
  );
};

export default Home;
