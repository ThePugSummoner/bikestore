import React from "react"
import"./card.css"
import {useDispatch} from "react-redux";
import {addToCart} from "../../features/cartSlice";
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const URL = 'http://localhost/angularbikes/'

function Card(props) {

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    }
    const dispatch = useDispatch();


    return (

        <div style={{maxWidth:props.width}} className="col-4 card-item py-2">
            <Link to={`/product/${props.product.tuotenro}`}>
            <div className="card-image-container">
                <img style={{height:props.height}} src={URL +"tuotekuvat/"+props.product.kuva} alt="bike"></img>
            </div>
            <div className="card-body">
                <h5>{props.product.nimi.split(" ",2).join(" ")}</h5>
            </div>
            <div className="card-footer">
                <span>{props.product.hinta}</span>
            </div>
            </Link>
            <button onClick={()=> handleAddToCart(props.product)}><FontAwesomeIcon icon="fa-solid fa-basket-shopping" /></button>
        </div>
    )
}
export default Card