import React, { useEffect } from "react";
import Aboutus from "./Aboutus/Aboutus";
import Sponsors from "./sponsors/sponsors";
import HomeAnimation from "./HomeAnimation/HomeAnimation";
import Footer from "../Footer/footer";
import classes from "./HomeComponent.module.css";
import Timer from "./Timer";

const Home = () => {
  return (
    <div>
      <div className={classes.body}>
        {/* <h1 style={{color: "ivory"}}>Credenz Home Page</h1> */}
        <HomeAnimation />
        <div
          data-aos='fade-up'
          data-aos-mirror='true'
          data-aos-offset='200'
          data-aos-easing='ease-in-sine'
          data-aos-duration='600'
          className='d-flex justify-content-center aos-item'>
          <h1>Coming Soon!</h1>
          {/*<Timer />*/}
        
        <div id='Aboutus'>
          <Aboutus />
        </div>
        <div className={classes.sponsor}>
          {" "}
          <Sponsors />
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
