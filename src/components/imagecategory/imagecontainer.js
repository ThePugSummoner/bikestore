import React from "react"
import { Link } from "react-router-dom"

function ImageContainer(props){
return(
    <div className="col-md-3 col-10 p-0 image-container">
    <img className="img-fluid" src={props.item.img} alt={props.item.category + " kuva"}></img>
    <Link to="/category" state={{ name:props.item.category }}>
        <div className="black-canvas ">
            <h3>{props.item.category}</h3>
        </div>
    </Link>
</div>
)}


export default ImageContainer