
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Account from "./account";
//import { useNavigate } from "react-router-dom";

const styles = {
    width: '500px',
    textAlign: 'center',
    margin: 'auto'
}

const URL = 'http://localhost/angularbikes/'

function User() {

    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    /*const [user, setUser] = useState()*/
    //const [asiakas, setAsiakas] = useState([]);
    //const getEmail = localStorage.getItem("sposti")
    //const getPwd = localStorage.getItem("salasana")
    //const getEmail = JSON.parse(localStorage.getItem("sposti"));
    //const getPassword = JSON.parse(localStorage.getItem("salasana"));
    //const getPassword2 = JSON.parse(localStorage.getItem("password"));
    const navigate = useNavigate();

    useEffect(() => { 
        
        localStorage.setItem("sposti", JSON.stringify(email))
        localStorage.setItem("salasana", JSON.stringify(pwd))
        //localStorage.setItem("password", JSON.stringify(pwd))
    }, [email, pwd]);

    /*const [input, setInput] = useState({
        sposti: "",
        salasana: ""
    })*/
    //const getEmail = JSON.parse(localStorage.getItem("sposti"));
    //const getPassword = JSON.parse(localStorage.getItem("salasana"));

    /*const handleLogin = (e) => {
        e.preventDefault(e)
        const getEmail = JSON.parse(localStorage.getItem("sposti"))
        const getPwd = JSON.parse(localStorage.getItem("salasana"))
        if (email === getEmail && getPwd === pwd) {
            navigate('/account')
        } else {
        alert("Virhellinen käyttäjätunnus/salsana")
    }}*/

    /*useEffect(() => {
        axios.get(URL)
        .then((response) => {
            setAsiakas(response.data)
        }).catch(error => {
            console.log(error.response ? error.response.data.error : error)
            alert('Häiriö järjestelmässä, yritä kohta uudelleen')
        })
    }, [])*/

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
                    //console.log("Correct");
                    navigate("/account");     
                } else {
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
    

    /*const handleLogout = () => {
        setUser({});
        setUsername("");
        setPassword("");
        localStorage.clear();
      };*/

    /*const handle = (e) => {
        e.preventDefault()
        if  (email === JSON.str(getEmail) && pwd === JSON.parse(getPwd)) {
            navigate('/account')
        }
        else {
            alert("ERROR")
    
        }
            
    }*/

    /*useEffect(() => { 
        localStorage.setItem('salasana', JSON.stringify(pwd))
        localStorage.setItem('sposti', JSON.stringify(email))
    }, [pwd, email]);*/

    /*const check = () => {
        const json = JSON.stringify({password: pwd})
        axios.post(URL + 'login.php', json, {
            headers: {
              'Content-Type': 'application/json'
            }
          })
          .then(response => {
            setPwd('')
        }).catch(error => {
            console.log(error.response ? error.response.data.error : error)
            alert('Häiriö järjestelmässä, yritä kohta uudelleen!')
          })
        }*/
    

    /*const remove = () => {
        localStorage.removeItem('Email')
        localStorage.removeItem('Password')
    }*/



return (
    <div style={styles} className="main">
        {/*<form onSubmit={handle}>*/}
        <form onSubmit={handleSubmit}>
        <h1 style={{margin: 15}}>Kirjaudu sisään</h1>
        <div style={styles} className="form-floating mb-3">
            {/*<input style={{width:500}} type="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={(e) => setEmail(e.target.value)}/>*/}
            <input style={{width:500}} name="sposti" type="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={(e) => setEmail(e.target.value)}/>
            <label htmlFor="floatingInput">Sähköposti*</label>
        </div>
        <div style={styles} className="form-floating mb-3">
            <input style={{width:500}} type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={(e) => setPwd(e.target.value)}/>
            <label htmlFor="floatingPassword">Salasana*</label>
        </div>
        <div>
            {/*<button style={{width:500, textAlign: "center", fontSize: '1.5em'}} type="button" className="btn btn-dark mb-3" ><Link style={{textDecoration: 'none', color:'white'}}to="/account">Kirjaudu sisään</Link></button>*/}

            <button style={{width:500, textAlign: "center", fontSize: '1.5em'}} type="submit" className="btn btn-dark mb-3">Kirjaudu sisään</button>
        </div>
        <div style={styles}>
            <p style={{width:500, textAlign: "center"}}>Etkö ole vielä rekisteröinyt?</p>
        </div>
        <div>
            <Link to="/regform">Luo tili täältä!</Link>
        </div>
        {/*<div>
            <button onClick={remove}>Remove</button>
    </div>*/}
    </form>
    {/*<ol className="col-12">
            {asiakas?.map(asiakas => (
                <li key={asiakas.astunnus}>
                    {asiakas.etunimi}&nbsp;
                    {asiakas.sukunimi}&nbsp;
                    {asiakas.sposti}&nbsp;
                    {asiakas.puhnro}&nbsp;
                    {asiakas.salasana}&nbsp;
                    {asiakas.uutiskirje}&nbsp;
                </li>
            ))}
            </ol>*/}
    {/*{getEmail && <Navigate to="/account"/>}*/}

</div>
    
)
}


export default User