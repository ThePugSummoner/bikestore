import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMemo, useEffect, useState } from "react";
import Table from "./table";
import MyOrders from "./myorders";
import axios from "axios";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import './dbmanagement.css'

const ulstyle = {
  padding: 0
}

const btnstyle = {
  backgroundColor: 'transparent', 
  color: 'black', 
  border: 'none'
}
const URL = 'http://localhost/angularbikes/'

function AdminItems() {

    
    const [data, setData] = useState([])
    const [newItem, setNewItem] = useState([])
    const navigate = useNavigate()


    const columns = useMemo (() => [
        {
            Header: "Tuotenro",
            accessor: "tuotenro"
        },
        {
            Header: "Tuotenimi",
            accessor: "nimi"
        },
        {
            Header: "Kuvaus",
            accessor: "kuvaus"
        },
        {
            Header: "Hinta",
            accessor: "hinta"
        },
        {
            Header: "Kategorianro",
            accessor: "trnro"
        },
        {
            Header: "Alakategoria",
            accessor: "alakategoria"
        },
        {
            Header: "Kuva",
            accessor: "kuva"
        },
        {
          Header: "Saldo",
          accessor: "saldo"
        },
        {
          Header: "Koko",
          accessor: "koko"
        }

    ],
    []);


    useEffect(() => {
        //const getEmail = JSON.parse(localStorage.getItem("sposti"));
        //const json = JSON.stringify({email: getEmail})
        axios.post(URL + 'adminitems.php', {
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

      /*const save = (e) => {
        e.preventDefault()
        const json = JSON.stringify({description:newTask})
        axios.post(URL + 'additem.php', json, {
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(response => {
          setTasks(tasks => [...tasks,response.data])
          setNewTask('')
        }).catch(error => {
          console.log(error.response ? error.response.data.error : error)
          alert('Häiriö järjestelmässä, yritä kohta uudelleen!')
        })
      }*/

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
        window.location.reload(false)
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

      const handleCategories = (e) => {
        navigate("/adminCategories")
      }

      const handleItems = (e) => {
        navigate("/adminItems")
      }

      const handleOrders = (e) => {
        navigate("/adminOrders")
      }
      
      const handleManagement = (e) => {
        navigate("/dbmanagement")
      }
    
  return (
    <div style={{display: 'flex'}} className="main">
      <aside style={{width: 300, textAlign: 'left', margin: 30}}>
        <h1 style={{margin:15}}>Asetukset</h1>
        {/*{data?.map(data => (
        <h4 key={data.astunnus}style={{margin:15}}>Asiakasnumero: {data.astunnus}</h4>))}*/}
        <ol>
          <ul style={ulstyle}>
            <button style={btnstyle} type="button" className="btn1 btn-dark mb-1" onClick={handleCategories}>Tuotekategoriat</button>
          </ul>
          <ul style={ulstyle}>
          <button style={btnstyle}type="button" className="btn2 btn-dark mb-1" onClick={handleItems}>Tuotteet</button>
          </ul>
          <ul style={ulstyle}>
          <button style={btnstyle}type="button" className="btn3 btn-dark mb-1" onClick={handleOrders}>Tilaukset</button>
          </ul>
          <ul style={ulstyle}>
          {/*<DropdownButton as={ButtonGroup} title="Hallinta">
            <Dropdown.Item eventKey="1" onClick={handleManagement} >Tuotteet</Dropdown.Item>
            <Dropdown.Item eventKey="2">Tuotekategoriat</Dropdown.Item>
            <Dropdown.Item eventKey="3">Tilaukset</Dropdown.Item>
      </DropdownButton>*/}
          <button style={btnstyle}type="button" className="btn4 btn-dark mb-1" onClick={handleManagement}>Hallinta</button>
          </ul>
        </ol>
        <button style={{width:250, textAlign: "center", fontSize: '1.5em', marginTop: '15px'}} type="button" className="btn btn-dark mb-3" onClick={handleLogout}>Kirjaudu ulos</button>
      </aside>
      <div style={{width: 1000, textAlign:'center', marginTop: 30, marginLeft: 70}}>
      {/*{data?.map(data => (
        <h1 key={data.astunnus} style={{margin:15}}>Hei {data.etunimi}!</h1>))}*/}
        <h1 style={{margin: 15}}>Tuotteet</h1>
          <Table columns={columns} data={data}/>  
        </div>
        {/*<div>
        <form className="row g-3">
            <div className="col-12">
                <label style={{marginLeft:10}} htmlFor="inputFname" className="form-label">Etunimi*</label>
                <input type="text" className="form-control" id="inputFname" placeholder="Etunimi"/>
            </div>
            <div className="col-md-12">
                <label style={{marginLeft:10}} htmlFor="inputLname" className="form-label">Sukunimi*</label>
                <input type="text" className="form-control" id="inputLname" placeholder="Sukunimi"/>
            </div>
            <div className="col-md-12">
            <label style={{marginLeft:10}} htmlFor="inputEmail4" className="form-label">Sähköposti*</label>
                <input type="email" className="form-control" id="inputEmail4" placeholder="Sähköposti" />
            </div>
            <div className="col-md-12">
                <label style={{marginLeft:10}} htmlFor="inputPhone" className="form-label">Puhelinnumero*</label>
                <input type="phone" className="form-control" id="inputPhone" placeholder="Puhelinnumero"/>
            </div>
            <div className="col-md-12">
                <label style={{marginLeft:10}} htmlFor="inputPAsword4" className="form-label">Salasana*</label>
                <input type="password" className="form-control" id="inputPassword4" placeholder="Salasana" />
            </div>
            <div className="col-12">
                <button style={{width:500, fontSize:'1.5em', backgroundColor: '#333', marginTop:10}} type="submit" className="btn btn-dark mb-3">Rekisteröidy</button>
            </div>
            </form>
    </div>*/}
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

export default AdminItems