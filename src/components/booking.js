import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";
import Table from "./table";
import axios from "axios";
//import e from "cors";

const styles = {
    margin: 'auto',
    width: 1200,
}

const label = {
    marginLeft: 10
}

const URL = 'http://localhost/angularbikes/'

function Booking () {

  const [data, setData] = useState([])
  const navigate = useNavigate()
  const [appt, setAppt] = useState([])
  const [etunimi, setEtunimi] = useState("")
  const [sukunimi, setSukunimi] = useState("")
  const [sposti, setSposti] = useState("")
  const [puhnro, setPuhnro] = useState("")
  const [pnimi, setPnimi] = useState("")
  const [merkki, setMerkki] = useState("")
  const [pvm, setPvm] = useState("")
  const [aika, setAika] = useState("")

  const columns = useMemo (() => [
    {
        Header: "Numero",
        accessor: "ptunnus"
    },
    {
        Header: "Palvelu",
        accessor: "pnimi"
    },
    {
        Header: "Hinta",
        accessor: "hinta"
    }
  ],
  []);

  useEffect(() => {
    axios.get(URL + 'service.php')
    .then((response) => {
      setData(response.data)
    }).catch(error => {
      console.log(error.response ? error.response.data.error : error)
      alert('Häiriö järjestelmässä, yritä kohta uudelleen')
    })
  }, [])

  const save = (e) => {
    e.preventDefault()
    const json = JSON.stringify({fname: etunimi, lname: sukunimi, email: sposti, pnum: puhnro, service: pnimi, bike_model: merkki, appt_day: pvm, appt_time: aika})
    axios.post(URL + 'appointment.php', json, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      setAppt(ajanvaraus => [...ajanvaraus, response.data])
      alert ("Huoltoaikasi on nyt varattu!")
      //navigate("/booking")
      setEtunimi('')
      setSukunimi('')
      setSposti('')
      setPuhnro('')
      setPnimi('')
      setMerkki('')
      setPvm('')
      setAika('')
    }).catch(error => {
      console.log(error.response ? error.response.data.error : error)
      alert('Häiriö järjestelmässä, yritä kohta uudelleen!')
      setEtunimi('')
      setSukunimi('')
      setSposti('')
      setPuhnro('')
      setPnimi('')
      setMerkki('')
      setPvm('')
      setAika('')
    })

  }


  return (
    <div style={styles} className="main">
      <div style={{textAlign:'center', marginTop: 30}}>
        <h1 style={{margin:15}}>Hinnasto</h1>
            <Table columns={columns} data={data}/>
    </div>
    <div style={{marginTop: 30}}>
      <p>* Sähköpyörien huoltopaketit +20€</p>
      <p>** Tavara- ja erikoispyörien huolto +100%</p>
    </div>
        <h1 style={{textAlign:'center', margin: 15, marginTop: 30}}>Ajanvaraus</h1>
    <form className="row g-3 needs-validation" noValidate onSubmit={save}>
    <div className="col-md-4">
      <label style={label} htmlFor="validationCustom01" className="form-label">Etunimi*</label>
      <input type="text" className="form-control" id="validationCustom01"  required value={etunimi} onChange={e => setEtunimi(e.target.value)}/>
      <div className="invalid-feedback">
        Kirjoita etunimi!
      </div>
    </div>
    <div className="col-md-4">
      <label style={label} htmlFor="validationCustom02" className="form-label">Sukunimi*</label>
      <input type="text" className="form-control" id="validationCustom02" required value={sukunimi} onChange={e => setSukunimi(e.target.value)}/>
      <div className="invalid-feedback">
        Kirjoita sukunimi!
      </div>
    </div>
    <div className="col-md-4">
      <label style={label} htmlFor="validationCustomUsername" className="form-label">Sähköposti*</label>
        <input type="email" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required value={sposti} onChange={e => setSposti(e.target.value)}/>
        <div className="invalid-feedback">
          Kirjoita sähköposti!
        </div>
    </div>
    <div className="col-md-4">
      <label style={label} htmlFor="validationCustom03" className="form-label">Puhelin*</label>
      <input type="tel" className="form-control" id="validationCustom03" required value={puhnro} onChange={e => setPuhnro(e.target.value)}/>
      <div className="invalid-feedback">
        Kirjoita puhelinnumero!
      </div>
    </div>
    <div className="col-md-4">
      <label style={label} htmlFor="validationCustom04" className="form-label">Huoltopalvelu*</label>
      <select className="form-select" id="validationCustom04" required value={pnimi} onChange={e => setPnimi(e.target.value)}>
        <option>Valitse...</option>
        <option>Ensihuolto</option>
        <option>Kausihuolto</option>
        <option>Perushuolto</option>
        <option>Täyshuolto</option>
        <option>Rengastyöt</option>
        <option>Pikahuolto</option>
      </select>
      <div className="invalid-feedback">
        Valitse huoltopalevelu!
      </div>
    </div>
    <div className="col-md-4">
      <label style={label} htmlFor="validationCustom05" className="form-label">Pyörämerkki*</label>
      <input type="text" className="form-control" id="validationCustom05" required value={merkki} onChange={e => setMerkki(e.target.value)}/>
      <div className="invalid-feedback">
        Kirjoita pyörämerkki!
      </div>
    </div>
    <div className="col-md-4">
      <label style={label} htmlFor="datepicker" className="form-label">Päivämäärä*</label>
      <input type="text" className="form-control" id="datepicker" required value={pvm} onChange={e => setPvm(e.target.value)}/>
      <div className="invalid-feedback">
        Valitse päivämäärä!
      </div>
    </div>
    <div className="col-md-4">
      <label style={label} htmlFor="" className="form-label">Kelloaika*</label>
      <input type="text" className="form-control" id="" required value={aika} onChange={e => setAika(e.target.value)}/>
      <div className="invalid-feedback">
        Valitse Kelloaika!
      </div>
    </div>
    <div style={{textAlign: 'center'}} className="col-12">
          <button style={{width: 390, backgroundColor: 'black', textDecoration: 'none', borderColor: 'black', margin: 15, marginBottom: 30}} className="btn btn-primary" type="submit">Varata aika</button>
    </div>
      </form>

</div>
  )
}

export default Booking