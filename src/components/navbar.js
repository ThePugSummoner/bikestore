import React from "react"
import userIcon from "../images/omatili icon.png"
import cart from "../images/shoppingcart icon.png"
import logo from "../images/sivunlogo.png"
import { Link } from "react-router-dom"
import searchLogo from "../images/spanner 2.png"


const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: 'black',
};

function Navbar() {

    return (
        <header>
            <div className="top-nav">
            <Link  to="/"><img className="logo-img" src={logo} alt="logo"></img></Link>
            <input className="top-nav-search"  type="text" placeholder="Search..."></input>
            <button className="search-button"><img src={searchLogo} alt="search logo"></img></button>
            <div className="user"> 
            <img className="user-logo" src={userIcon} alt="usericon"></img>          
            <Link style={linkStyle} to="/userinfo">Oma Tili</Link>
            </div>  
            <div className="shoppingCart"> 
            <img className="cart-logo" src={cart} alt="cartlogo"></img>        
            <Link style={linkStyle} to="/shoppingcart">Ostoskärry</Link>
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