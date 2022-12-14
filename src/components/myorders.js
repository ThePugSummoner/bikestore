import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMemo, useEffect, useState } from "react";
import Table from "./table";
import axios from "axios";



const styles = {
    margin: 'auto',
    textAlign: 'center'
}

const ulstyle = {
  padding: 0
}

const btnstyle = { 
  backgroundColor: 'transparent', 
  color: 'black', 
  border: 'none'
}

const URL = 'http://localhost/angularbikes/'

function MyOrders() {

    const [data, setData] = useState([])
    const navigate = useNavigate()


    const columns = useMemo (() => [
        /*{
            Header: "Asiakastunnus",
            accessor: "astunnus"
        },*/
        {
            Header: "Tilausnumero",
            accessor: "tilausnro"
        },
        {
            Header: "Tilauspäivä",
            accessor: "tilauspvm"
        },
        {
            Header: "Summa",
            accessor: "summa"
        },
        {
            Header: "Toimituksen tila",
            accessor: "tila"
        },
        {
            Header: "Vaihto ja palautus",
            accessor: "palautus"
        }
    ],
    []);


      const handleLogout = () => {
        localStorage.clear();
        navigate('/userinfo')
        window.location.reload(false)
      }

      useEffect(() => {
        const getEmail = JSON.parse(localStorage.getItem("sposti"));
        const json = JSON.stringify({email: getEmail})
        axios.post(URL + 'order.php', json, {
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then((response) => {
          setData(response.data)
          //console.log(response.data)
        }).catch(error => {
          console.log(error.response ? error.response.data.error : error)
          alert('Häiriö järjestelmässä, yritä kohta uudelleen')
        })
      }, [])
    
      
      const handleOrder = (e) => {
        navigate("/myorders")
      }

      const handleUser = (e) => {
        navigate("/account")
      }
    
  return (
    <div style={{display: 'flex'}} className="main">
      <aside style={{width: 300, textAlign: 'left', margin: 30}}>
        <h1 style={{margin:15}}>Käyttäjätilini</h1>
        <ol>
          <ul style={ulstyle}>
            <button style={btnstyle} type="button" className="btn5 btn-dark mb-2" onClick={handleUser}>Tietoni</button>
          </ul>
          <ul style={ulstyle}>
            <button style={btnstyle} type="button" className="btn6 btn-dark mb-1" onClick={handleOrder}>Tilaukseni</button>
          </ul>
        </ol>
        <button style={{width:250, textAlign: "center", fontSize: '1.5em', marginTop: '15px'}} type="button" className="btn btn-dark mb-3" onClick={handleLogout}>Kirjaudu ulos</button>
      </aside>
      <div style={{width: 1000, textAlign:'center', marginTop: 30, marginLeft: 70}}>
        <h1 style={{margin:15}}>Tilaukseni</h1>
            <Table columns={columns} data={data}/>
        </div>
        
        {/*<div>
            <button style={{width:300, textAlign: "center", fontSize: '1.5em', marginTop: '15px'}} type="button" className="btn btn-dark mb-3" onClick={handleLogout}>Kirjaudu ulos</button>
  </div>*/}
        {/*<div>
            <button style={{width:500, textAlign: "center", fontSize: '1.5em'}} type="button" className="btn btn-dark mb-3" onClick={handleOrders}>Tilaukset</button>
  </div>*/}      
        {/*<ol className="col-12">
            {tilaus?.map(tilaus => (
                <li key={tilaus.astunnus}>
                    {tilaus.tila}&nbsp;
                    {tilaus.tilausnro}&nbsp;
                    {tilaus.tilauspvm}&nbsp;
                    {tilaus.summa}&nbsp;
                    {tilaus.palautus}&nbsp;
                </li>
            ))}
            </ol>*/}
    </div>
  )
}

export default MyOrders