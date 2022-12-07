import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const styles = {
    margin: 'auto',
    width: '500px',
    
}

const URL = 'http://localhost/angularbikes/'

//rekisteröinti lomake

function RegForm() {

    const [asiakas, setAsiakas] = useState([])
    
    const [newName, setNewName] = useState('')
    const [newLname, setNewLname] = useState('')
    const [newEmail, setNewEmail] = useState('')
    const [newPnum, setNewPnum] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [newLetter, setNewLetter] = useState('')
    const [isChecked, setIsChecked] = useState(false);
    const [isCheckedTwo, setIsCheckedTwo] = useState(false);
    const navigate = useNavigate()
    
    const save = (e) => {
        e.preventDefault()
        const json = JSON.stringify({description1: newName, description2: newLname, description3: newEmail, description4: newPnum, description5: newPassword, description6: newLetter})
        axios.post(URL + 'add.php', json, {
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(response => {
        if (response.data === 'Antamasi tiedot ovat virhellisiä') {
            alert ("Antamasi tiedot ovat virhellisiä")
            setNewName('')
            setNewLname('')
            setNewEmail('')
            setNewPnum('')
            setNewPassword('')
            setNewLetter('')
            setIsChecked(false)
            setIsCheckedTwo(false)
        } else {
          setAsiakas(asiakas => [...asiakas,response.data])
          alert ("Olet nyt rekisteröinyt")
          navigate("/userinfo") }
        }).catch(error => {
          console.log(error.response ? error.response.data.error : error)
          alert('Häiriö järjestelmässä, yritä kohta uudelleen!')
          setNewName('')
          setNewLname('')
          setNewEmail('')
          setNewPnum('')
          setNewPassword('')
          setNewLetter('')
          setIsChecked(false)
          setIsCheckedTwo(false)
        })

      }
    
    return (

    <div className="main" style={styles}>
         <h1 style={{textAlign:'center', margin: 15}}>Luo tili</h1>
        <form onSubmit={save} className="row g-3">
            <div className="col-12">
                <label style={{marginLeft:10}} htmlFor="inputFname" className="form-label">Etunimi*</label>
                <input type="text" className="form-control" id="inputFname" placeholder="Etunimi" value={newName} onChange={e => setNewName(e.target.value)}/>
            </div>
            <div className="col-md-12">
                <label style={{marginLeft:10}} htmlFor="inputLname" className="form-label">Sukunimi*</label>
                <input type="text" className="form-control" id="inputLname" placeholder="Sukunimi" value={newLname} onChange={e => setNewLname(e.target.value)}/>
            </div>
            <div className="col-md-12">
            <label style={{marginLeft:10}} htmlFor="inputEmail4" className="form-label">Sähköposti*</label>
                <input type="email" className="form-control" id="inputEmail4" placeholder="Sähköposti" value={newEmail} onChange={e => setNewEmail(e.target.value)}/>
            </div>
            <div className="col-md-12">
                <label style={{marginLeft:10}} htmlFor="inputPhone" className="form-label">Puhelinnumero*</label>
                <input type="phone" className="form-control" id="inputPhone" placeholder="Puhelinnumero" value={newPnum} onChange={e => setNewPnum(e.target.value)}/>
            </div>
            <div className="col-md-12">
                <label style={{marginLeft:10}} htmlFor="inputPassword4" className="form-label">Salasana*</label>
                <input type="password" className="form-control" id="inputPassword4" placeholder="Salasana" value={newPassword} onChange={e => setNewPassword(e.target.value)}/>
            </div>
            <div className="col-6">
                <div style={{marginLeft:10}} className="form-check" >
                    <input className="form-check-input" type="checkbox" id="newsCheck" checked={isCheckedTwo} value={newLetter} onChange={e => {setNewLetter(e.target.value); setIsCheckedTwo((prev) => !prev)}}/>
                    <label className="form-check-label" htmlFor="newsCheck">
                        Haluan tilata uutiskirjen
                    </label>
                </div>
            </div>
            <div className="col-6">
                <div style={{marginLeft:10}} className="form-check">
                    <input className="form-check-input" type="checkbox" checked={isChecked} id="rulesCheck" onChange={e => setIsChecked((prev) => !prev)}/>
                    <label className="form-check-label" htmlFor="rulesCheck">
                        Hyväksyn <Link to="/rules">käyttöehdot</Link>
                    </label>
                    {/*<p>{isChecked ? "Selected" : "Unchecked"}</p>*/}
            </div>
            </div>
            <div className="col-12">
                <button style={{width:500, fontSize:'1.5em', backgroundColor: '#333', marginTop:10}} disabled={isChecked ? "" : true} type="submit" className="btn btn-dark mb-3">Rekisteröidy</button>
            </div>
            </form>
        </div>
    )
}

export default RegForm