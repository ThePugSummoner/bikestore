
import React from "react";
import { Link } from "react-router-dom";

const styles = {
    width: '500px',
    textAlign: 'center',
    margin: 'auto'
}

function User() {

return (
    <div style={styles} className="main">
        <h1 style={{margin: 15}}>Kirjaudu sisään</h1>
    <form>
        <div style={styles} className="form-floating mb-3">
            <input style={{width:500}} type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
            <label htmlFor="floatingInput">Sähköposti*</label>
        </div>
        <div style={styles} className="form-floating mb-3">
            <input style={{width:500}} type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
            <label htmlFor="floatingPassword">Salasana*</label>
        </div>
        <div>
            <button style={{width:500, textAlign: "center", fontSize: '1.5em'}} type="button" className="btn btn-dark mb-3">Kirjaudu sisään</button>
        </div>
        <div style={styles}>
            <p style={{width:500, textAlign: "center"}}>Etkö ole vielä rekisteröinyt?</p>
        </div>
        <div>
            <Link to="/regform">Luo tili täältä!</Link>
        </div>
    </form>
</div>
    
)
}


export default User