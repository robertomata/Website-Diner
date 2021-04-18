import React from "react";
import "../App.css"
import background from"../heroDiner.jpg"
import Logo from "../logo.png";


function Header() { 
    return (
        <div className="headerWrapper" style={{backgroundImage: `url(${background})`}}>
           
              <div className="banner-content">
                    <div>
                        <img src={Logo} className="logo" alt="logo" />
                        <h1>Warm food for chill people!</h1>
                        <a href="#" className="book-btn">Book Now</a>
                    </div>
                    <div></div>
                </div>
        </div>
    )
}

export default Header