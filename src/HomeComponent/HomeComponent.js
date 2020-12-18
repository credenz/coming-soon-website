import React, { useEffect } from "react";
import Aboutus from "./Aboutus/Aboutus";
import Sponsors from "./sponsors/sponsors";
import HomeAnimation from "./HomeAnimation/HomeAnimation";
import classes from "./HomeComponent.module.css";
import Timer from "./Timer";
import  cred  from "../assests/img/crewhite.png";
import Social from '../floatingButton/sideEvent';

const Home = () => {
  return (
    <div className="container">
      <div style={{justifyContent:"center", display:'flex'}} className="justify-content-centre">
        <img style={{width:'25%'}} alt="black" src={cred}></img>
      </div>
      <div className="d-flex justify-content-center">
        {/* <h1 style={{color: "ivory"}}>Credenz Home Page</h1> */}
        <HomeAnimation />
      </div>
      <div className="d-flex justify-content-center">
        {/* <h1 style={{color: "ivory"}}>Credenz Home Page</h1> */}
        <h1 style={{fontSize:"90px", display:"flex", justifyContent:"center"}}>Coming Soon!</h1>
      </div>
      <Social/>
    </div>
  );
};

export default Home;
