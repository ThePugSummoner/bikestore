import React from "react"
import"./card.css"
import {useDispatch,useSelector} from "react-redux";
import {addToCart,getTotals} from "../../features/cartSlice";
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect } from "react";



const URL = 'http://localhost/angularbikes/'

function Card(props) {

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    }
    const dispatch = useDispatch()
    const cart = useSelector((state) => state.cart)

    useEffect(() => {
            dispatch(getTotals());
    }, [ cart, dispatch])

    return (

        <div style={{maxWidth:props.width}} className="col-4 card-item py-2">
            <Link to={`/product/${props.product.tuotenro}`}>
            <div className="card-image-container">
                <img style={{height:props.height,width:80}} src={URL +"tuotekuvat/"+props.product.kuva} alt="bike"></img>
            </div>
            <div className="card-body">
                <h5>{props.product.nimi.split(" ",2).join(" ")}</h5>
            </div>
            </Link>
            <div className="card-footer pt-auto">
                <span>{props.product.hinta}</span>
                <button onClick={()=> handleAddToCart(props.product)}><FontAwesomeIcon icon="fa-solid fa-basket-shopping" /></button>
            </div>
            
            
            
           
            
        </div>
    )
}
export default Card