import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMemo, useEffect, useState } from "react";
import Table from "./table";
import axios from "axios";


const styles = {
    margin: 'auto',
    textAlign: 'center'
}

const URL = 'http://localhost/angularbikes/'

function Account() {

    //const [tilaus, setTilaus] = useState([])
    const [data, setData] = useState([])
    const getEmail = localStorage.getItem('sposti')
    const getPwd = localStorage.getItem('salasana')
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

    /*useEffect(() => {
        axios.get(URL)
        .then((response) => {
          setTilaus(response.data)
        }).catch(error => {
          console.log(error.response ? error.response.data.error : error)
          alert('Häiriö järjestelmässä, yritä kohta uudelleen')
        })
      }, [])*/

      /*const handleOrders = (e) => {
        e.preventDefault()
        const json = JSON.stringify({email: getEmail})
        axios.post(URL + 'order.php', json, {
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(response => {
            setData(response.data);
        }).catch(error => {
          console.log(error.response ? error.response.data.error : error)
          alert('Häiriö järjestelmässä, yritä kohta uudelleen!')
        })
      }*/

      const handleLogout = () => {
        localStorage.clear();
        navigate('/userinfo')
      }

      useEffect(() => {
        (async () => {
          const result = await axios(URL);
          setData(result.data);
        })();
      }, []);
    
    
  return (
    <div style={{display: 'flex'}} className="main">
      <aside style={{width: 300, textAlign: 'left', margin: 30}}>
        <h1 style={{margin:15}}>Käyttäjätilini</h1>
        <p style={{margin:15}}>Asiakasnumero: 103</p>
        <ol>
          <ul style={{padding: 0}}>
            Tilaukseni
          </ul>
          <ul style={{padding: 0}}>
            Asetukseni
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

export default Account