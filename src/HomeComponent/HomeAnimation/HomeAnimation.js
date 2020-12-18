import React from "react";
import './HomeAnimation.module.css';
import CredenzEye from './AnimationSVGs/Credenzeye';
import cred from '../../assests/img/crewhite.png';
const homeanimation = (props) =>{
    return(
        <div style={{width:'100%'}} className="anim">
            {/* <img style={{width:'10%'}} src={cred}/> */}
        <CredenzEye/>
        </div>
    );
}

export default homeanimation;