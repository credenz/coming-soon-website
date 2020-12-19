import React, { useEffect } from "react";
import HomeAnimation from "./HomeAnimation/HomeAnimation";
import Timer from "./Timer";
import  cred  from "../assests/img/crewhite.png";
import Social from '../floatingButton/sideEvent';
import { Random1 } from "./Jump";

const Home = () => {
  return (
    <div className="container">
      <div style={{justifyContent:"center", display:'flex'}} className="justify-content-centre">
        <img style={{width:'25%'}} alt="black" src={cred}></img>
      </div>
      <div className="d-flex justify-content-center">
          <HomeAnimation />
        {/* <h1 style={{color: "ivory"}}>Credenz Home Page</h1> */}
      </div>
      <div className="d-flex justify-content-center">
        {/* <h1 style={{color: "ivory"}}>Credenz Home Page</h1> */}
        <Random1/>
      </div>
      <Social/>
    </div>
  );
};

export default Home;
