import React, { useEffect } from "react"
import logo from "../../images/AngularBikes3.png"
import { Link, Navigate, useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState} from "react"
import DropwDown from "../dropdown/dropdown"
import uuid from 'react-uuid'
import "./navbar.css"
import axios from "axios"
import ShoppingCartBox from "../shoppingCartBox" 
import { useSelector } from "react-redux";
import Search from "./search"


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
    //const [path, setPath] = useState('')
    const navigate = useNavigate()

    //const [user, setUser] = useState('')


    const user = JSON.parse(localStorage.getItem("sposti"))

    var signup = ""
    

    if (user === "") {
       signup = "Oma tili"
    } else {
       signup = "Käyttäjätilini"
    }

    const handleUser = (e) => {
      const user = JSON.parse(localStorage.getItem("sposti"))
      if (user === "") {
        navigate("/userinfo")
        window.location.reload(false)  
      }
      else if (user === "admin@admin.com") {
        navigate ("/adminOrders")
        window.location.reload(false)  
      }
      else {
        navigate("/account")
        window.location.reload(false)  
      }
    }

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

    

    const {cartTotalQuantity} = useSelector(state => state.cart)
    const [openKori, setOpenKori] = useState(false)
    
    function handleOpenKori() {
        if (user === ""){
          navigate("/userinfo")
        } else if (user === "admin@admin.com") {
          navigate("/adminOrders")
        }
        else {
          setOpenKori(!openKori)
        }
        //setOpenKori(!openKori)
    }

    function handleOpen() {
        setOpen(!open)

    }
    function closeOpen(){
        setOpen(false)
    }

    return (
        <header>
            <div className="top-nav">
                <Link to="/" style={{textDecoration:'none', color: 'antiquewhite'}} ><img className="logo-img" src={logo} alt="logo"></img><span style={{marginLeft:3, color: 'antiquewhite'}}>Angular Bikes</span></Link>
                {/*<span>Angular Bikes</span>*/}
                <Search />
                <button style={{backgroundColor: 'transparent', border: 'none'}} onClick={handleUser}><FontAwesomeIcon icon="fa-solid fa-user" size="lg" /><span style={{marginLeft:5, color: 'antiquewhite'}}>{signup}</span></button>
                <div className="cart-preview">
                    <FontAwesomeIcon style={{cursor: "pointer"}} icon="fa-solid fa-cart-shopping" size="lg" onClick={handleOpenKori} />
                    <div className="cart-quantity">
                        <div>{cartTotalQuantity}</div>
                    </div>
                    <span style={{cursor: "pointer", marginRight:3, color: 'antiquewhite'}} className="cart-text" onClick={handleOpenKori}>Ostoskori</span>
                    <div style={{position: "absolute", top: 70, right: 8, zIndex:2}} className="cart-dropdown">
                        {openKori && (
                            <div>
                                <ShoppingCartBox handleClose={handleOpenKori}/>
                            </div>                          
                        )}
                    </div>
                </div>

            </div>
            <div className="bottom-nav">
                <div className="dropdown-tuote">
                    <button onClick={handleOpen}><FontAwesomeIcon icon="fa-solid fa-bars" size="lg" /> {open ? "Sulje" : "Tuotealueet"}</button>
                    <div className="dropdown-contents" style={{maxHeight: open && '1500px'}}>
                        {open && (
                            <>
                              {categories.map(category => <DropwDown key={uuid()} handleClose={closeOpen} category={category} subCate={subCategories} />)}
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