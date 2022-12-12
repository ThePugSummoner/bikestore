import React, { useEffect } from "react"
import logo from "../../images/AngularBikes3.png"
import { Link } from "react-router-dom"
import searchLogo from "../../images/spanner 2.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState} from "react"
import DropwDown from "../dropdown/dropdown"
import uuid from 'react-uuid'
import "./navbar.css"
import axios from "axios"


const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: 'black',
    textAlign: 'center'
};
const URL = 'http://localhost/angularbikes/'
function Navbar() {
    const [open, setOpen] = useState(false)
    const [categories,setCategories] = useState([])
    const [subCategories,setSubCategories] = useState([])

    useEffect(() => {
      axios.get(URL + 'getCategories.php')
        .then((response) => {
          const json = response.data;
          setCategories(json);
        }).catch (error => {
          alert(error.response === undefined ? error : error.response.data.error);
        })
    }, [])

    useEffect(() => {
        axios.get(URL + 'getSubCategories.php')
          .then((response) => {
            const json = response.data;
            setSubCategories(json);
          }).catch (error => {
            alert(error.response === undefined ? error : error.response.data.error);
          })
      }, [])



    function handleOpen() {
        setOpen(!open)

    }
    function closeOpen(){
        setOpen(false)
    }

    return (
        <header>
            <div className="top-nav">
                <Link to="/" style={{textDecoration:'none', color: 'antiquewhite'}} ><img className="logo-img" src={logo} alt="logo"></img>Angular Bikes</Link>
                {/*<span>Angular Bikes</span>*/}
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
                    <div className="dropdown-contents" style={{maxHeight: open && '1500px'}}>
                        {open && (
                            <>
                              {categories.map(test => <DropwDown key={uuid()} handleClose={closeOpen} item={test} subCate={subCategories} />)}
                              <Link style={{textDecoration: 'none', color: 'white'}} to="/booking"><h5 onClick={closeOpen}>Huollon ajanvaraus</h5></Link>
                            </>
                        )}
                    </div> 
                </div>
            </div>
        </header>
    )
}




export default Navbar