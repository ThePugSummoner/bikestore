
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Account from "./account";
import "./userInfo.css"


const URL = 'http://localhost/angularbikes/'

function User() {

    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const navigate = useNavigate();

    localStorage.setItem("user", JSON.stringify(""))

    useEffect(() => { 
        
        localStorage.setItem("sposti", JSON.stringify(email))
        localStorage.setItem("salasana", JSON.stringify(pwd))
    }, [email, pwd]);

    

    const handleSubmit = (e) => {
        e.preventDefault()
        const getEmail = JSON.parse(localStorage.getItem("sposti"));
        const getPassword = JSON.parse(localStorage.getItem("salasana"));
        const json = JSON.stringify({email: getEmail, pwd: getPassword})
        axios.post(URL + 'login.php', json, {
            headers: {
              'Content-Type': 'application/json'
            }
          })
            .then((response) => {
                if(response.data === 'Data Matched'){
                    //console.log(response.data);
                    navigate("/account");
                    window.location.reload(false)   
                }
                else if (response.data === 'Admin logged in!') {
                    //console.log(response.data)
                    navigate("/adminOrders")
                }         
                else {
                    //localStorage.clear();
                    localStorage.setItem("sposti", JSON.stringify(""))
                    localStorage.setItem("salasana", JSON.stringify(""))
                    alert("Käyttäjätunnus/salasana on virhellinen");
                }
        }).catch(error => {
            console.log(error.response ? error.response.data.error : error)
            alert('Häiriö järjestelmässä, yritä kohta uudelleen!')
          })
        }
    

    


return (
    <div  className="userinfo">
        <form onSubmit={handleSubmit} className="login">
        <h1 className="loginh1">Kirjaudu sisään</h1>
        <div className="form-floating mb-3">
           
            <input  name="sposti" type="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={(e) => setEmail(e.target.value)}/>
            <label htmlFor="floatingInput">Sähköposti*</label>
        </div>
        <div className="form-floating mb-3">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={(e) => setPwd(e.target.value)}/>
            <label htmlFor="floatingPassword">Salasana*</label>
        </div>
        <div>
            <button type="submit" className="btn btn-dark mb-3">Kirjaudu sisään</button>
        </div>
        <div>
            <p>Etkö ole vielä rekisteröinyt?</p>
        </div>
        <div>
            <Link to="/regform" className="regform">Luo tili täältä!</Link>
        </div>
    </form>
</div>
    
)
}


export default User