import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const styles = {
    margin: 'auto',
    width: 1200,
}

const label = {
    marginLeft: 10
}

function Booking () {
  return (
    <div style={styles} className="main">
        <h1 style={{textAlign:'center', margin: 15}} >Huoltoajanvaraus</h1>
    <form className="row g-3 needs-validation" noValidate>
    <div className="col-md-4">
      <label style={label} htmlFor="validationCustom01" className="form-label">Etunimi*</label>
      <input type="text" className="form-control" id="validationCustom01"  required/>
      <div className="invalid-feedback">
        Kirjoita etunimi!
      </div>
    </div>
    <div className="col-md-4">
      <label style={label} htmlFor="validationCustom02" className="form-label">Sukunimi*</label>
      <input type="text" className="form-control" id="validationCustom02" required/>
      <div className="invalid-feedback">
        Kirjoita sukunimi!
      </div>
    </div>
    <div className="col-md-4">
      <label style={label} htmlFor="validationCustomUsername" className="form-label">Sähköposti*</label>
        <input type="email" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required/>
        <div className="invalid-feedback">
          Kirjoita sähköposti!
        </div>
    </div>
    <div className="col-md-4">
      <label style={label} htmlFor="validationCustom03" className="form-label">Puhelin*</label>
      <input type="tel" className="form-control" id="validationCustom03" required/>
      <div className="invalid-feedback">
        Kirjoita puhelinnumero!
      </div>
    </div>
    <div className="col-md-4">
      <label style={label} htmlFor="validationCustom04" className="form-label">Huoltopalvelu*</label>
      <select className="form-select" id="validationCustom04" required>
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
      <input type="text" className="form-control" id="validationCustom05" required/>
      <div className="invalid-feedback">
        Kirjoita pyörämerkki!
      </div>
    </div>
    <div className="col-md-4">
      <label style={label} htmlFor="datepicker" className="form-label">Päivämäärä*</label>
      <input type="text" className="form-control" id="datepicker" required/>
      <div className="invalid-feedback">
        Valitse päivämäärä!
      </div>
    </div>
    <div className="col-md-4">
      <label style={label} htmlFor="" className="form-label">Kelloaika*</label>
      <input type="text" className="form-control" id="" required/>
      <div className="invalid-feedback">
        Valitse Kelloaika!
      </div>
    </div>
    <div style={{textAlign: 'center'}} className="col-12">
          <button style={{width: 400, backgroundColor: 'black', textDecoration: 'none', borderColor:  'black'}} className="btn btn-primary" type="submit">Varata aika</button>
    </div>
      </form>
</div>
  )
}

export default Booking