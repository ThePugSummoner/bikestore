import React from "react"
import logo from "../images/AngularBikes3.png"
import { Link } from "react-router-dom"
import searchLogo from "../images/spanner 2.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {useState} from "react"


const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: 'black',
    textAlign: 'center'
};


function Navbar() {
const [open,setOpen]= useState(false)
const [openMenuOne,setOpenMenuOne]= useState(false)
const [openMenuTwo,setOpenMenuTwo]= useState(false)
const [openMenuThree,setOpenMenuThree]= useState(false)
const [openMenuFour,setOpenMenuFour]= useState(false)
const [openMenuFive,setOpenMenuFive]= useState(false)

function handleOpen (){
setOpen(!open)
if(open===false){
    setOpenMenuOne(false)
    setOpenMenuTwo(false)
    setOpenMenuThree(false)
    setOpenMenuFour(false)
    setOpenMenuFive(false)
}
}

function handleMenuOne(){
    setOpenMenuOne(!openMenuOne)
}
function handleMenuTwo(){
    setOpenMenuTwo(!openMenuTwo)
}
function handleMenuThree(){
    setOpenMenuThree(!openMenuThree)
}
function handleMenuFour(){
    setOpenMenuFour(!openMenuFour)
}
function handleMenuFive(){
    setOpenMenuFive(!openMenuFive)
}




    return (
        <header>
            <div className="top-nav">
            <Link  to="/"><img className="logo-img"  src={logo} alt="logo"></img></Link>
            <span>Angular Bikes</span>
            <div className="search-container">
            <input className="top-nav-search"  type="text" placeholder="Search..."></input>
            <button className="search-button"><img src={searchLogo} alt="search logo"></img></button>
            </div>       
            <Link style={linkStyle} to="/userinfo"><FontAwesomeIcon icon="fa-solid fa-user"size="lg" />Oma tili</Link>
            <Link style={linkStyle} to="/shoppingcart"><FontAwesomeIcon icon="fa-solid fa-cart-shopping" size="lg"/>Ostoskärry</Link>
            
            </div>
            <div className="bottom-nav">
                <div className="dropdown-tuote mx-2">
                <button onClick={handleOpen}><FontAwesomeIcon icon="fa-solid fa-bars" size="lg"/> {open? "Sulje":"Tuotealueet"}</button>
                <div className="dropdown-contents">
                {open&&(
                <ul>
                    <li onClick={handleMenuOne}>Maastopyörät <FontAwesomeIcon icon="fa-solid fa-caret-down" /></li>
                    {openMenuOne&&(<ul>
                        <li>Item 1</li>
                        <li>Item 2</li>
                        <li>Item 3</li>
                        <li>Item 4</li>
                    </ul>)}
                    
                    <li onClick={handleMenuTwo}>Sähköpyörät <FontAwesomeIcon icon="fa-solid fa-caret-down" /></li>
                    {openMenuTwo&&(<ul>
                        <li>Item 1</li>
                        <li>Item 2</li>
                        <li>Item 3</li>
                        <li>Item 4</li>
                    </ul>)}
                    <li onClick={handleMenuThree}>Maantiepyörät <FontAwesomeIcon icon="fa-solid fa-caret-down" /></li>
                    {openMenuThree&&(<ul>
                        <li>Item 1</li>
                        <li>Item 2</li>
                        <li>Item 3</li>
                        <li>Item 4</li>
                    </ul>)}
                    <li onClick={handleMenuFour}>Lastenpyörät <FontAwesomeIcon icon="fa-solid fa-caret-down" /></li>
                    {openMenuFour&&(<ul>
                        <li>Item 1</li>
                        <li>Item 2</li>
                        <li>Item 3</li>
                        <li>Item 4</li>
                    </ul>)}
                    <li onClick={handleMenuFive}>Tarvikkeet <FontAwesomeIcon icon="fa-solid fa-caret-down" /></li>
                    {openMenuFive&&(<ul>
                        <li>Item 1</li>
                        <li>Item 2</li>
                        <li>Item 3</li>
                        <li>Item 4</li>
                    </ul>)}                   
                </ul>)}
                </div>
                </div>
                <button>Huolto</button>
            </div>
        </header>
    )
}




export default Navbar