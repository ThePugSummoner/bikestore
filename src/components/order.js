import '../css/shoppingCart.css';
import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, UNSAFE_LocationContext, useNavigate } from "react-router-dom";
import { decreaseCart, 
        removeFromCart, 
        addToCart, 
        clearCart, 
        getTotals } from '../features/cartSlice';
import {useEffect, useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from 'axios';
import e from 'cors';
import { stringify } from 'uuid';

const URL = 'http://localhost/angularbikes/'

function Order() {

    const getItem = JSON.parse(localStorage.getItem("cartItems"))
    const qty = getItem[0].cartQuantity
    const linecount = getItem.length
    const itemId = getItem[0].tuotenro
    const dataFetchedRef = useRef(false)
    const navigate = useNavigate()

    const order = JSON.parse(localStorage.getItem("tilaus"))
    const ordernum = order.tilausnro
    //console.log(order)

    //localStorage.setItem("item1", JSON.stringify(getItem[0]))

    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const handleHomepage = () => {
        navigate("/")
        dispatch(clearCart());
    };

    /*const handleAccount = () => {
        navigate("/account")
        dispatch(clearCart());
    };*/

    const lines = []
    

    getItem.forEach((data, index) => {
        const rows = {}
        rows["tuotenro"] = JSON.stringify(data.tuotenro)
        rows["rivinro"] = JSON.stringify(index + 1)
        rows["kpl"] = JSON.stringify(data.cartQuantity)
        rows["tilausnro"] = ordernum
        lines.push(rows)
    });

    useEffect(() => {
        if (dataFetchedRef.current) return;
        dataFetchedRef.current = true;
        //const json = JSON.stringify({itemId: itemId, qty: qty, ordernum: ordernum, linecount: linecount})
        const json = JSON.stringify({lines})
        axios.post(URL + 'addnewline.php', json, {
        headers: {
        'Content-Type': 'application/json'
            } 
        }) .then(response => {
            console.log(response.data)
        
            //alert("Tilauksesi on lähetetty!")
        }) .catch(error => {
            console.log(error.response ? error.response.data.error : error)
            alert('Häiriö järjestelmässä, yritä kohta uudelleen!')
    })
    },[])



    return(
        <div className="container-fluid cart-background min-vh-100">
            <div className="row">
                <div className="cart-container">
                    <h2>Tilauksesi on vastaanotettu!</h2>             
                </div>
                <div style={{margin: 'auto', width: 'fit-content'}}>
                    <button style={{width:250, textAlign: "center", fontSize: '1.5em'}} type="button" className="btn btn-dark mb-3" onClick={handleHomepage}>Palaa etusivulle</button>
                </div>
                {/*<div style={{margin: 'auto', width: 'fit-content'}}>
                    <button style={{width:250, textAlign: "center", fontSize: '1.5em'}} type="button" className="btn btn-dark mb-3" onClick={handleAccount}>Käyttäjätilini<FontAwesomeIcon icon="fa-solid fa-arrow-right" size='lg'/></button>
    </div>*/}
                {/*<ol className="col-12" style={{margin: 'auto', textAlign: 'center', paddingLeft: 80}}>
                {lines.map(lines => (
                    <li key={lines.tuotenro}>
                        {lines.tuotenro}&nbsp;
                        {lines.kpl}&nbsp;
                        {lines.tilausnro}&nbsp;

                    </li>
                ))}
                </ol>*/}
            </div>
        </div>
    );
};

export default Order;