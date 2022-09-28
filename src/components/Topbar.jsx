import React from "react";
import citysport from "../assets/citysport.png"
import profile from "../assets/profile.jpg"

const Topbar = () => {
    return ( 
        <div style={{marginTop: 10}} className="Topbar">
            <img src={citysport} alt="citysport logo" style={{height: 50}} />
            <div className="user">
            <div className="userinfo">
                <span className="username">
                    Yohann Obiang
                </span>
                <span className="logout-btn">
                    <a href="">Se deconnecter</a>
                </span>
            </div>
            <img src={profile} alt="citysport logo" className="profile"/>
            </div>
        </div>
     );
}
 
export default Topbar;