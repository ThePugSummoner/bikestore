import React from "react"
import userIcon from "../images/omatili icon.png"
import cart from "../images/shoppingcart icon.png"
import logo from "../images/AngularBikes3.png"
import { Link } from "react-router-dom"
import searchLogo from "../images/spanner 2.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faShoppingCart, faWrench } from '@fortawesome/free-solid-svg-icons'



const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: 'black',
    textAlign: 'center'
};


function Navbar() {

    return (
        <header>
            <div className="top-nav">
            <Link  to="/"><img className="logo-img"  src={logo} alt="logo"></img></Link>
            <input className="top-nav-search"  type="text" placeholder="Search..."></input>
            <button className="search-button"> <FontAwesomeIcon icon={faWrench} size="2x"/></button>
            <div className="user"> 
            {/*<img className="user-logo" src={userIcon} alt="usericon"></img>*/}
                        
                <Link style={linkStyle} to="/userinfo"><FontAwesomeIcon icon={faUser} size="2x" />KIRJAUDU SISÄÄN</Link>
            </div>  
            <div className="shoppingCart"> 
            {/*<img className="cart-logo" src={cart} alt="cartlogo"></img>*/}
                
                <Link style={linkStyle} to="/shoppingcart"><FontAwesomeIcon icon={faShoppingCart} size="2x"/>OSTOSKORI</Link>
            </div>
            </div>
            <div className="bottom-nav">
                <ul>
                    <li>Tuotteet</li>
                    <li>Huolto</li>
                </ul>
            </div>
        </header>
    )
}




export default Navbar