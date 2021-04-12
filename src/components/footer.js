import React from "react";
import "../App.css"



function Footer() { 
    return (
        <div className="footerWrapper">
            <div className="contentFooter">
            <img src="./img/logo.png" className="logoFooter" alt="logo" />
            
            </div>
            <div className="contentFooter">
            <h4>Information</h4>
            <ul>
                <a href="#" >Menu </a><br/>
                <a href="#" >About Us</a><br/>
                <a href="#" >FAQ</a>
            </ul>
            </div>
            <div className="contentFooter">
            <ul>
                <h4>Contact us</h4>
                <p class="footertxt">0047-123456789</p>
                <p class="footertxt">bookings@robsdiner.com</p>

            </ul>
            </div>
        </div>
    )
}

export default Footer