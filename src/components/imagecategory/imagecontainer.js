import React from "react"
import { Link } from "react-router-dom"

function ImageContainer(props){

return(
    <div className="col-md-3 col-10 p-0 image-container">
    {props.item.map(items => items.id===props.bikeCategory.trnro && <img key={items.id} className="img-fluid" src={items.img} alt={props.item.id+ " kuva"}></img>)}
    <Link to={`/category/${props.bikeCategory.trnro}`} state={{ name:props.bikeCategory.trnimi }}>
        <div className="black-canvas ">
            <h3>{props.bikeCategory.trnimi}</h3>
        </div>
    </Link>
</div>
)}


export default ImageContainer