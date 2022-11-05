import userIcon from "../images/omatili icon.png"
import cart from "../images/shoppingcart icon.png"
import logo from "../images/Logo.png"
import { Link } from "react-router-dom"


const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: 'black',
};

function Navbar() {

    return (
        <header>
            <div className="top-nav">
            <Link className="logo-img" to="/"><img  src={logo} alt="logo"></img></Link>
            <input className="top-nav-search" style={{padding:10}} type="text" placeholder="Search..."></input>
            
            <div className="user"> 
            <img className="user-logo" src={userIcon} alt="usericon"></img>          
            <Link style={linkStyle} to="/userinfo">Oma Tili</Link>
            </div>  
            <div className="shoppingCart"> 
            <img className="cart-logo" src={cart} alt="cartlogo"></img>        
            <Link style={linkStyle} to="/shoppingcart">Ostoskärry</Link>
            </div>

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
                    <li>Info</li>
                </ul>
            </div>
        </header>
    )
}




export default Navbar