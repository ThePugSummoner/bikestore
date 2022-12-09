import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";
import Table from "./table";
import axios from "axios";
import DatePicker, { registerLocale } from "react-datepicker";
import fi from 'date-fns/locale/fi';




import "react-datepicker/dist/react-datepicker.css"
import 'react-datepicker/dist/react-datepicker-cssmodules.css';


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
  const [pvm, setPvm] = useState(new Date())
  const [aika, setAika] = useState("")
  
  
  registerLocale('fi', fi);

  //moment.tz.setDefault("Europe/Berlin");

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
      if (response.data === 'Antamasi tiedot ovat virhellisiä') {
        alert ("Antamasi tiedot ovat virhellisiä")
      //navigate("/booking")
      setEtunimi('')
      setSukunimi('')
      setSposti('')
      setPuhnro('')
      setPnimi('')
      setMerkki('')
      setPvm(new Date())
      setAika('')
      } else {
        setAppt(ajanvaraus => [...ajanvaraus, response.data])
      alert ("Huoltoaikasi on nyt varattu!")
      setEtunimi('')
      setSukunimi('')
      setSposti('')
      setPuhnro('')
      setPnimi('')
      setMerkki('')
      setPvm(new Date())
      setAika('')
      }
    }).catch(error => {
      console.log(error.response ? error.response.data.error : error)
      alert('Häiriö järjestelmässä, yritä kohta uudelleen!')
      setEtunimi('')
      setSukunimi('')
      setSposti('')
      setPuhnro('')
      setPnimi('')
      setMerkki('')
      setPvm(new Date())
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
      
    </div>
    <div className="col-md-4">
      <label style={label} htmlFor="validationCustom02" className="form-label">Sukunimi*</label>
      <input type="text" className="form-control" id="validationCustom02" required value={sukunimi} onChange={e => setSukunimi(e.target.value)}/>
      
    </div>
    <div className="col-md-4">
      <label style={label} htmlFor="validationCustomUsername" className="form-label">Sähköposti*</label>
        <input type="email" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required value={sposti} onChange={e => setSposti(e.target.value)}/>
        
    </div>
    <div className="col-md-4">
      <label style={label} htmlFor="validationCustom03" className="form-label">Puhelin*</label>
      <input type="tel" className="form-control" id="validationCustom03" required value={puhnro} onChange={e => setPuhnro(e.target.value)}/>
      
    </div>
    <div className="col-md-4">
      <label style={label} htmlFor="validationCustom04" className="form-label">Huoltopalvelu*</label>
      <select className="form-select" id="validationCustom04" required value={pnimi} onChange={e => setPnimi(e.target.value)}>
        <option>Valitse...</option>
        <option>Ensihuolto</option>
        <option>Kausihuolto</option>
        <option>Perushuolto</option>
        <option>Täyshuolto</option>
        <option>Etu-/takarenkaan vaihto</option>
        <option>Renkaiden vaihto (eteen ja taakse)</option>
      </select>
      
    </div>
    <div className="col-md-4">
      <label style={label} htmlFor="validationCustom05" className="form-label">Pyörämerkki*</label>
      <input type="text" className="form-control" id="validationCustom05" required value={merkki} onChange={e => setMerkki(e.target.value)}/>
      
    </div>
    <div className="col-md-4">
      <label style={label} htmlFor="datepicker" className="form-label">Päivämäärä*</label>
      {/*<input type="text" className="form-control" id="datepicker" required value={pvm} onChange={e => setPvm(e.target.value)}/>*/}
      <DatePicker className="form-control" selected={pvm} onChange={(date) => setPvm(date)} shouldCloseOnSelect={false} locale="fi" dateFormat="dd/MM/yyyy" calendarStartDay={1} showWeekNumbers fixedHeight/>
      
    </div>
    {/*<div className="col-md-4">
      <label style={label} htmlFor="datepicker" className="form-label">Kelloaika*</label>
      <input type="text" className="form-control" id="" required value={aika} onChange={e => setAika(e.target.value)}/>
      <DatePicker selected={aika} onChange={(date) => setAika(date)}  minTime={minTime}
          maxTime={maxTime} showTimeSelect showTimeSelectOnly timeIntervals={15} locale="fi" timeCaption="Time" dateFormat="HH:mm" timeFormat="HH:mm"/>
    </div>*/}
    <div className="col-md-4">
      <label style={label} htmlFor="validationCustom05" className="form-label">Kelloaika*</label>
      <select className="form-select" id="validationCustom05" required value={aika} onChange={e => setAika(e.target.value)}>
        <option>Valitse...</option>
        <option>08:00</option>
        <option>08:30</option>
        <option>09:00</option>
        <option>09:30</option>
        <option>10:00</option>
        <option>10:30</option>
        <option>11:00</option>
        <option>11:30</option>
        <option>12:00</option>
        <option>12:30</option>
        <option>13:00</option>
        <option>13:30</option>
        <option>14:00</option>
        <option>14:30</option>
        <option>15:00</option>
        <option>15:30</option>
        <option>16:00</option>
      </select>
      
    </div>
    <div style={{textAlign: 'center'}} className="col-12">
          <button style={{width: 390, backgroundColor: 'black', textDecoration: 'none', borderColor: 'black', margin: 15, marginBottom: 30}} className="btn btn-primary" type="submit">Varata aika</button>
    </div>
      </form>
</div>
  )
}

export default Booking