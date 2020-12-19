import React, { useEffect } from "react";
import HomeAnimation from "./HomeAnimation/HomeAnimation";
import Timer from "./Timer";

const Home = () => {
  return (
    <div className="container">
      <div className="d-flex justify-content-center">
        <img alt="black" src={require('./final-logo.png')}></img>
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
