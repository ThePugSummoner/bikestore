import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMemo, useEffect, useState } from "react";
import Table from "./table";
import MyOrders from "./myorders";
import axios from "axios";



const styles = {
    margin: 'auto',
    textAlign: 'center'
}

const URL = 'http://localhost/angularbikes/'

function Admin() {

    //const [tilaus, setTilaus] = useState([])
    const [data, setData] = useState([])
    //const getEmail = localStorage.getItem('sposti')
    //const getPwd = localStorage.getItem('salasana')
    //const [user, setUser] = useState([])
    const navigate = useNavigate()


    /*const columns = useMemo (() => [
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
    []);*/

    const columns = useMemo (() => [
        {
          Header: "Asiakasnro",
          accessor: "astunnus"
      },
      {
          Header: "Etunimi",
          accessor: "etunimi"
      },
      {
          Header: "Sukunimi",
          accessor: "sukunimi"
      },
      {
          Header: "Sähköposti",
          accessor: "sposti"
      },
      {
          Header: "Puhelin",
          accessor: "puhnro"
      }
  ],
  []);

    useEffect(() => {
        const getEmail = JSON.parse(localStorage.getItem("sposti"));
        const json = JSON.stringify({email: getEmail})
        axios.post(URL + 'user.php', json, {
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

      /*useEffect(() => {
        (async () => {
          const result = await axios(URL);
          setData(result.data);
        })();
      }, []);*/

      /*useEffect(() => {
        (async () => {
          const result = await axios(URL);
          setData(result.data);
        })();
      }, []);*/

      /*const handleOrder = (e) => {
        e.preventDefault()
        navigate("/myorders");
        const getEmail = JSON.parse(localStorage.getItem("sposti"));
        const json = JSON.stringify({email: getEmail})
        axios.post(URL + 'order.php', json, {
          headers: {
            'Content-Type': 'application/json'
          }
        })
          .then((response) => {
            setData(response.data);
      }).catch(error => {
          console.log(error.response ? error.response.data.error : error)
          alert('Häiriö järjestelmässä, yritä kohta uudelleen!')
        })
      }

      const handleUser = (e) => {
        e.preventDefault()
        const getEmail = JSON.parse(localStorage.getItem("sposti"));
        const json = JSON.stringify({email: getEmail})
        axios.post(URL + 'user.php', json, {
          headers: {
            'Content-Type': 'application/json'
          }
        })
          .then((response) => {
            setData(response.data);
      }).catch(error => {
          console.log(error.response ? error.response.data.error : error)
          alert('Häiriö järjestelmässä, yritä kohta uudelleen!')
        })
      }*/

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
        {/*{data?.map(data => (
        <h4 key={data.astunnus}style={{margin:15}}>Asiakasnumero: {data.astunnus}</h4>))}*/}
        <ol>
          <ul style={{padding: 0}}>
            <button style={{backgroundColor: 'transparent', color: 'black', border: 'none'}} type="button" className="btn btn-dark mb-2" onClick={handleUser}>Tietoni</button>
          </ul>
          <ul style={{padding: 0}}>
          <button style={{backgroundColor: 'transparent', color: 'black', border: 'none'}}type="button" className="btn btn-dark mb-1" onClick={handleOrder}>Tilaukseni</button>
          </ul>
        </ol>
        <button style={{width:250, textAlign: "center", fontSize: '1.5em', marginTop: '15px'}} type="button" className="btn btn-dark mb-3" onClick={handleLogout}>Kirjaudu ulos</button>
      </aside>
      <div style={{width: 1000, textAlign:'center', marginTop: 30, marginLeft: 70}}>
      {data?.map(data => (
        <h1 key={data.astunnus} style={{margin:15}}>Hei {data.etunimi}!</h1>))}
            <Table columns={columns} data={data}/>
        </div>
        
        {/*<div>
            <button style={{width:300, textAlign: "center", fontSize: '1.5em', marginTop: '15px'}} type="button" className="btn btn-dark mb-3" onClick={handleLogout}>Kirjaudu ulos</button>
  </div>*/}
        {/*<div>
            <button style={{width:500, textAlign: "center", fontSize: '1.5em'}} type="button" className="btn btn-dark mb-3" onClick={handleOrders}>Tilaukset</button>
  </div>*/}      
        {/*<ol className="col-12">
            {data?.map(data => (
                <li key={data.astunnus}>
                    {data.etunimi}&nbsp;
                    {data.sukunimi}&nbsp;
                    {tilaus.tilauspvm}&nbsp;
                    {tilaus.summa}&nbsp;
                    {tilaus.palautus}&nbsp;
                </li>
            ))}
            </ol>*/}
    </div>
  )
}

export default Admin