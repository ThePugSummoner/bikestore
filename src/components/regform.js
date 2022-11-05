import React from "react";

const styles = {
    margin: 'auto',
    width: '500px',
    
}

//rekisteröinti lomake

function RegForm() {
    return (

    <div className="main" style={styles}>
         <h1 style={{textAlign:'center', margin: 15}}>Luo tili</h1>
        <form className="row g-3">
            <div className="col-12">
                <label style={{marginLeft:10}} htmlFor="inputFname" className="form-label">Etunimi*</label>
                <input type="text" className="form-control" id="inputFname" placeholder="Etunimi"/>
            </div>
            <div className="col-md-12">
                <label style={{marginLeft:10}} htmlFor="inputLname" className="form-label">Sukunimi*</label>
                <input type="text" className="form-control" id="inputLname" placeholder="Sukunimi*"/>
            </div>
            <div className="col-md-12">
            <label style={{marginLeft:10}} htmlFor="inputEmail4" className="form-label">Sähköposti*</label>
                <input type="email" className="form-control" id="inputEmail4" placeholder="Sähköposti"/>
            </div>
            <div className="col-md-12">
                <label style={{marginLeft:10}} htmlFor="inputPhone" className="form-label">Puhelinnumero*</label>
                <input type="email" className="form-control" id="inputPhone" placeholder="Puhelinnumero"/>
            </div>
            <div className="col-md-12">
                <label style={{marginLeft:10}} htmlFor="inputPAsword4" className="form-label">Salasana*</label>
                <input type="password" className="form-control" id="inputPassword4" placeholder="Salasana"/>
            </div>
            <div className="col-12">
                <button style={{width:500, fontSize:'1.5em', backgroundColor: '#333', marginTop:10}}type="submit" className="btn btn-dark mb-3">Rekisteröidy</button>
            </div>
            </form>
        </div>
    )
}

export default RegForm