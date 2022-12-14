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

    var etunimi = ""
    //var way = ""

    if (user === "") {
       etunimi = "Oma tili"
       //way = "/userinfo"
    } else {
       etunimi = "Käyttäjätilini"
       //way = "/account"
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

     /* useEffect(() => {
        const getEmail = JSON.parse(localStorage.getItem("sposti"));
        const json = JSON.stringify({email: getEmail})
        axios.post(URL + 'user.php', json, {
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then((response) => {
          setUser(response.data)
          console.log(response.data)
        }).catch(error => {
          console.log(error.response ? error.response.data.error : error)
          alert('Häiriö järjestelmässä, yritä kohta uudelleen')
        })
      }, [])*/

    const {cartTotalQuantity} = useSelector(state => state.cart)
    const [openKori, setOpenKori] = useState(false)
    
    function handleOpenKori() {
        setOpenKori(!openKori)
    }

    function handleOpen() {
        setOpen(!open)

    }
    function closeOpen(){
        setOpen(false)
    }
console.log(subCategories)
    return (
        <header>
            <div className="top-nav">
                <Link to="/" style={{textDecoration:'none', color: 'antiquewhite'}} ><img className="logo-img" src={logo} alt="logo"></img><span>Angular Bikes</span></Link>
                {/*<span>Angular Bikes</span>*/}
                <Search />
                <button style={{backgroundColor: 'transparent', border: 'none'}} onClick={handleUser}><FontAwesomeIcon icon="fa-solid fa-user" size="lg" /><span style={{marginLeft:3, color: 'antiquewhite'}}>{etunimi}</span></button>
                <div className="cart-preview">
                    <FontAwesomeIcon style={{cursor: "pointer"}} icon="fa-solid fa-cart-shopping" size="lg" onClick={handleOpenKori} />
                    <span className="cart-quantity">
                        <span>{cartTotalQuantity}</span>
                    </span>
                    <span style={{cursor: "pointer"}} className="cart-text" onClick={handleOpenKori}>Ostoskori</span>
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