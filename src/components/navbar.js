import React from "react"
import logo from "../images/AngularBikes3.png"
import { Link } from "react-router-dom"
import searchLogo from "../images/spanner 2.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: 'black',
};

function Navbar() {

    return (
        <header>
            <div className="top-nav">
            <Link  to="/"><img className="logo-img"  src={logo} alt="logo"></img></Link>
            <input className="top-nav-search"  type="text" placeholder="Search..."></input>
            <button className="search-button"><img src={searchLogo} alt="search logo"></img></button>
            <div className="user">          
            <Link style={linkStyle} to="/userinfo"><FontAwesomeIcon icon="fa-solid fa-user"size="lg" /> Oma Tili</Link>
            </div>  
            <div className="shoppingCart">        
            <Link style={linkStyle} to="/shoppingcart"><FontAwesomeIcon icon="fa-solid fa-cart-shopping" size="lg"/> Ostoskärry</Link>
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