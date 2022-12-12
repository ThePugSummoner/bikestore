import '../css/shoppingCartBox.css';
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { decreaseCart, 
        removeFromCart, 
        addToCart,  
        getTotals } from '../features/cartSlice';
import {useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function ShoppingCartBox(props) {

    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTotals());
    }, [cart, dispatch]);

    const handleRemoveFromCart = (cartItem) => {
        dispatch(removeFromCart(cartItem));
    };

    const handleDecreaseCart = (cartItem) => {
        dispatch(decreaseCart(cartItem));
    };

    const handleIncreaseCart = (cartItem) => {
        dispatch(addToCart(cartItem));
    };

    return(
        <>
        <div className="container-fluid cart-background-box">
            <div className="row">
                <div className="col-12 p-0"></div>
                <div className="cart-container-box">
                <h2>Ostoskori</h2>
                <span style={{position: "absolute", right: 12, top: 3, fontSize: 20, cursor: "pointer"}}>
                <FontAwesomeIcon icon="fa-solid fa-x" onClick={props.handleClose}/>
                </span>
                {cart.cartItems.length === 0 ? (
                    <div className="cart-empty-box">
                        <p>Ostoskorisi on tyhjä</p>
                    </div>
                ) : (
                    <div>
                        <div className="cart-items-box">
                            {cart.cartItems?.map(cartItem => (
                                <div className="cart-item-box" key={cartItem.tuotenro}>
                                    <div className="cart-product-box">
                                        <img src={require(`../tuotekuvat/${cartItem.kuva}`)} alt={cartItem.nimi} />
                                        <div>
                                            <h3>{cartItem.nimi}</h3>
                                            <button onClick={() => handleRemoveFromCart(cartItem)}>
                                                <FontAwesomeIcon icon="fa-solid fa-trash-can" />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="cart-product-price-box">€ {cartItem.hinta}</div>
                                    <div className="cart-product-quantity-box">
                                        <button onClick= {() => handleDecreaseCart(cartItem)}>
                                          -
                                        </button>
                                        <div className="count-box">{cartItem.cartQuantity}</div>
                                        <button onClick= {() => handleIncreaseCart(cartItem)}>
                                          +
                                        </button>
                                    </div>
                                    <div className="cart-product-total-price-box">
                                        € {cartItem.hinta * cartItem.cartQuantity}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="cart-summary-box">
                            <div className="cart-checkout-box">
                                <div className="subtotal-box">
                                    <span className="amount-text-box">Yhteensä</span>
                                    <span className="amount-box">€ {cart.cartTotalAmount}</span>
                                </div>
                                <button>
                                 <Link style={{textDecoration: "none", color: "white"}} to="/shoppingcart" onClick={props.handleClose}>Ostoskoriin</Link>
                                </button>                         
                            </div>
                        </div>
                    </div>
                )}            
            </div>
            </div>
        </div>
     </>
    );
}

export default ShoppingCartBox;