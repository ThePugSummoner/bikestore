import React, { useEffect } from "react"
import logo from "../images/AngularBikes3.png"
import { Link } from "react-router-dom"
import searchLogo from "../images/spanner 2.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState} from "react"
import DropwDown from "./dropdown"
import uuid from 'react-uuid';


const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: 'black',
    textAlign: 'center'
};

function Navbar() {
    const [open, setOpen] = useState(false)
    const [array,setArray]=useState([])
    const [testi,setTesti]=useState([
        {
            heading:"Maastopyörä",
            items:["Sokkelia","item2","item3","item4"]

    },
    {
        heading:"Sähköpyörät",
        items:["item1","item2","item3","Rokkelia"]

},   
{
    heading:"Maantiepyörät",
    items:["Tottelia","item2","item3","item4"]

},   
{
    heading:"Lastenpyörät",
    items:["item1","item2","Hokkelia","item4"]

},  
 {
    heading:"Tarvikkeet",
    items:["item1","Kokkelia","item3","item4"]

},
{
    heading:"Huolto",
    items:["Jarrut","Johdot ja akut","Kampisarjat","Kasetit","Keskiöt","Ketjut","Kiekot","Klossit","Navat","Osasarjat","Polkimet","Vaihdevivut","Vaihtajat","Vaijerit ja kuoret","Vanteet","Varaosat DT"]

}
])
    function handleOpen() {
        setOpen(!open)

    }
    useEffect(()=>{
        setArray(["Jarrut","Johdot ja akut","Kampisarjat","Kasetit","Keskiöt","Ketjut","Kiekot","Klossit","Navat","Osasarjat","Polkimet","Vaihdevivut","Vaihtajat","Vaijerit ja kuoret","Vanteet","Varaosat DT"])
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
                <div className="dropdown-tuote">
                    <button onClick={handleOpen}><FontAwesomeIcon icon="fa-solid fa-bars" size="lg" /> {open ? "Sulje" : "Tuotealueet"}</button>
                    <div className="dropdown-contents" style={{maxHeight: open && '700px'}}>
                        {open && (
                            <>
                              {testi.map(test => <DropwDown key={uuid()} item={test} />)}
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