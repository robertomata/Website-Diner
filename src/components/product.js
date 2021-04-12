import React from "react";
import "../App.css"

const product = (props) => {
    return(
        <div className="productWrapper">
        <img  src = {props.imagePath} id={props.imgId} alt={props.name}/>
        <p>{props.name}</p>
        <p>{props.price} NOK</p>
        <p>{props.description}</p>
        </div>
    )
}

export default product;