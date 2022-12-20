import React from "react"
import "./card.css"
import { useDispatch, useSelector } from "react-redux";
import { addToCart, getTotals } from "../../features/cartSlice";
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react";



const URL = 'http://localhost/angularbikes/'

function Card(props) {
    const [discountProduct, setDiscountProduct] = useState({
        nimi: props.product.nimi,
        hinta: props.product.uusihinta,
        saldo: props.product.saldo,
        tuotenro: props.product.tuotenro,
        kuva: props.product.kuva
    })
    const [hide, setHide] = useState(props.hide)

    const handleAddToCart = (product) => {

        if (props.product.alennus === 1) {
            dispatch(addToCart(discountProduct));

        } else {
            dispatch(addToCart(product));
        }

    }
    const dispatch = useDispatch()
    const cart = useSelector((state) => state.cart)

    useEffect(() => {
        dispatch(getTotals());
    }, [cart, dispatch])

function discount(){

}

    return (

        <div style={{ maxWidth: props.maxWidth,height:props.cardHeigh }} className="col-4 card-item py-2">
            <Link style={{ textDecoration: "none", color: "black" }} to={`/product/${props.product.tuotenro}`}>
                <div className="card-image-container">
                    <img style={{ height: props.height, width: props.width }} src={URL + "tuotekuvat/" + props.product.kuva} alt="bike"></img>
                </div>
                <div className="card-body">
                    <h5>{props.product.nimi.split(" ", 2).join(" ")}</h5>
                </div>
            </Link>
            <div className="card-footer pt-auto">
                <span style={{ textDecoration: props.product.alennus === 1 ? "line-through" : "none", color: props.product.alennus === 1 ? "gray" : "red" }}>{props.product.hinta}</span>
                {props.product.alennus === 1 && <span>{props.product.uusihinta}</span>}
                {hide === false && <button onClick={() => handleAddToCart(props.product)}><FontAwesomeIcon icon="fa-solid fa-basket-shopping" /></button>}
            </div>





        </div>
    )
}
export default Card