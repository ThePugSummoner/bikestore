import '../css/shoppingCart.css';
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { decreaseCart, 
        removeFromCart, 
        addToCart, 
        clearCart, 
        getTotals } from '../features/cartSlice';
import {useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ShoppingCart= () => {
    
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

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    return(
        <><div className="container-fluid cart-background min-vh-100">
            <div className="row">
                <div className="col-12 p-0"></div>
                <div className="cart-container">
                <h2>Ostoskori</h2>
                {cart.cartItems.length === 0 ? (
                    <div className="cart-empty">
                        <p>Ostoskorisi on tyhjä</p>
                        <div className="start-shopping">
                            <Link to="/">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    width="18" height="18" 
                                    fill="currentColor"
                                    className="bi bi-arrow-left" 
                                    viewBox="0 0 16 16"
                                >
                                    <path fillRule="evenodd" 
                                    d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 
                                    0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 
                                    0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" 
                                    />
                                </svg>
                                <span>Aloita shoppailu</span>
                            </Link>
                        </div>
                    </div>
                ) : (
                    <div>
                        <div className="titles">
                            <h3 className="product-title">Tuote</h3>
                            <h3 className="price">Hinta</h3>
                            <h3 className="quantity">Määrä</h3>
                            <h3 className="total">Yhteensä</h3>
                        </div>
                        <div className="cart-items">
                            {cart.cartItems?.map(cartItem => (
                                <div className="cart-item" key={cartItem.tuotenro}>
                                    <div className="cart-product">
                                        <img src={require(`../tuotekuvat/${cartItem.kuva}`)} alt={cartItem.nimi} />
                                        <div>
                                            <h3>{cartItem.nimi}</h3>
                                        
                                            <button onClick={() => handleRemoveFromCart(cartItem)}>
                                                <FontAwesomeIcon icon="fa-solid fa-trash-can" />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="cart-product-price">€ {cartItem.hinta}</div>
                                    <div className="cart-product-quantity">
                                        <button onClick= {() => handleDecreaseCart(cartItem)}>
                                          -
                                        </button>
                                        <div className="count">{cartItem.cartQuantity}</div>
                                        <button onClick= {() => handleIncreaseCart(cartItem)}>
                                          +
                                        </button>
                                    </div>
                                    <div className="cart-product-total-price">
                                        € {cartItem.hinta * cartItem.cartQuantity}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="cart-summary">
                            <button className="clear-cart" onClick= {() => handleClearCart()}>
                              Tyhjennä ostoskori
                            </button>
                            <div className="cart-checkout">
                                <div className="subtotal">
                                    <span>Yhteensä</span>
                                    <span className="amount">€ {cart.cartTotalAmount}</span>
                                </div>
                                <p>ALV (24%) sisältyy hintaan</p>
                                <button>Kassalle</button>
                                                                  
                            </div>
                        </div>
                    </div>
                )}            
            </div>
        </div>
        </div>
        
            </>
    );
};

export default ShoppingCart;