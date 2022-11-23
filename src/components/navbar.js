import React, { useEffect } from "react"
import logo from "../images/AngularBikes3.png"
import { Link } from "react-router-dom"
import searchLogo from "../images/spanner 2.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState} from "react"
import DropwDown from "./dropdown"


const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: 'black',
    textAlign: 'center'
};

function Navbar() {
    const [open, setOpen] = useState(false)
    const [array,setArray]=useState([])
    const [array2,setArray2]=useState([])
    function handleOpen() {
        setOpen(!open)

    }
    const [openHuolto, setOpenHuolto] = useState(false)
    function handleOpenHuolto() {
        setOpenHuolto(!openHuolto)

    }useEffect(()=>{
        setArray(["Jarrut","Johdot ja akut","Kampisarjat","Kasetit","Keskiöt","Ketjut","Kiekot","Klossit","Navat","Osasarjat","Polkimet","Vaihdevivut","Vaihtajat","Vaijerit ja kuoret","Vanteet","Varaosat DT"])
        setArray2(["item1","item2","item3","item4"])
    },[])
    
    return (
        <header>
            <div className="top-nav">
                <Link to="/"><img className="logo-img" src={logo} alt="logo"></img></Link>
                <span>Angular Bikes</span>
                <div className="search-container">
                    <input className="top-nav-search" type="text" placeholder="Search..."></input>
                    <button className="search-button"><img src={searchLogo} alt="search logo"></img></button>
                </div>
                <Link style={linkStyle} to="/userinfo"><FontAwesomeIcon icon="fa-solid fa-user" size="lg" /><span>Oma tili</span></Link>
                <Link style={linkStyle} to="/shoppingcart"><FontAwesomeIcon icon="fa-solid fa-cart-shopping" size="lg" /><span>Ostoskärry</span></Link>

            </div>
            <div className="bottom-nav">
                <div className="dropdown-tuote mx-2">
                    <button onClick={handleOpen}><FontAwesomeIcon icon="fa-solid fa-bars" size="lg" /> {open ? "Sulje" : "Tuotealueet"}</button>
                    <div className="dropdown-contents">
                        {open && (
                            <>
                                <DropwDown items={array2} heading="Maastopyörät" />
                                <DropwDown items={array2} heading="Sähköpyörät" />
                                <DropwDown items={array2} heading="Maantiepyörät" />
                                <DropwDown items={array2} heading="Lastenpyörät" />
                                <DropwDown items={array2} heading="Tarvikkeet" />
                            </>
                        )}
                    </div>
                
                <button onClick={handleOpenHuolto}><FontAwesomeIcon icon="fa-solid fa-screwdriver-wrench" /> {openHuolto ? "Sulje" : "Huolto"}</button>
                <div style={open ? {left:140}:{left:-10}} className="dropdown-contents-huolto">
                    {openHuolto && (
                        <>
                            <DropwDown  items={array} heading="Komponentit"/>
                            <Link style={{textDecoration: 'none', color: 'white'}} to="/booking"><h5>Ajanvaraus</h5></Link>
                        </>
                    )}
                    </div>
                </div>
            </div>
        </header>
    )
}




export default Navbar