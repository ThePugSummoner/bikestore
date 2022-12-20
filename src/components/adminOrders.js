import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMemo, useEffect, useState } from "react";
import Table from "./table";
import MyOrders from "./myorders";
import axios from "axios";
import './dbmanagement.css'


const ulstyle = {
  padding: 0
}

const btnstyle = {
  backgroundColor: 'transparent', 
  color: 'black', 
  border: 'none'
}

const thstyle = {
  //border: '2px solid',
  backgroundColor: 'black',
  color: 'white',
  padding: '10px'
}

const tdstyle = {
  //border: '2px solid',
  textAlign: 'center',
  padding: '10px'
}

const URL = 'http://localhost/angularbikes/'

function AdminOrders() {

    
    const [orders, setOrders] = useState([])
    const [editReturn, setEditReturn] = useState('')
    const [editStatus, setEditStatus] = useState('')
    const [editOrder, setEditOrder] = useState(null)
    const navigate = useNavigate()


    const columns = useMemo (() => [
        {
            Header: "Asiakastunnus",
            accessor: "astunnus"
        },
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

    useEffect(() => {
        axios.post(URL + 'adminorders.php', {
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then((response) => {
          setOrders(response.data)
        }).catch(error => {
          console.log(error.response ? error.response.data.error : error)
          alert('Häiriö järjestelmässä, yritä kohta uudelleen')
        })
      }, [])
    
    

      const handleLogout = () => {
        localStorage.clear();
        navigate('/userinfo')
        window.location.reload(false)
      }


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

      function setEditedOrder(order) {
        setEditOrder(order)
        setEditStatus(order?.tila)
        //setEditReturn(order?.palautus)
      }
    
        function update(e) {
        e.preventDefault()
        const json = JSON.stringify({order: editOrder.tilausnro, status: editStatus})
        axios.post(URL + 'updateorder.php', json, {
          headers: {
            'Content-Type' : 'application/json'
          }
        })
        .then((response) => {
          orders[(orders.findIndex(order => order.tilausnro === editOrder.tilausnro))].status = editStatus
          setOrders([...orders])
          setEditedOrder(null)
          window.location.reload(false)
        }).catch (error => {
          alert(error.response ? error.response.data.error : error)
        })
      }
    
  return (
    <div style={{display: 'flex'}} className="main">
      <aside style={{width: 300, textAlign: 'left', margin: 30}}>
        <h1 style={{margin:15}}>Asetukset</h1>
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
      {/*<div style={{width: 1000, textAlign:'center', marginTop: 30, marginLeft: 70}}>
        <h1 style={{margin: 15}}>Tilaukset</h1>
            <Table columns={columns} data={orders}/>
    </div>*/}
        
        {/*<div>
            <button style={{width:300, textAlign: "center", fontSize: '1.5em', marginTop: '15px'}} type="button" className="btn btn-dark mb-3" onClick={handleLogout}>Kirjaudu ulos</button>
  </div>*/}
        {/*<div>
            <button style={{width:500, textAlign: "center", fontSize: '1.5em'}} type="button" className="btn btn-dark mb-3" onClick={handleOrders}>Tilaukset</button>
  </div>*/}
  <div style={{width: 1000, textAlign:'center', marginTop: 30, marginLeft: 70, paddingLeft: 5}}>  
  <h1 style={{margin: 15}}>Tilaukset</h1>  
        {/*<ol className="col-12">
            {orders?.map(order => (
                <li key={order.tilausnro}>
                   
                    {order.astunnus}&nbsp;
                    {order.tilausnro}&nbsp;
                    {order.tilauspvm}&nbsp;
                    {order.summa}&nbsp;
                    {order.palautus}&nbsp;
                  
                    {editOrder?.tilausnro !== order.tilausnro && order.tila}
                    {editOrder?.tilausnro === order.tilausnro &&
                    <form onSubmit={update}>
                    <input style={{margin:5}} value={editStatus} onChange={e => setEditStatus(e.target.value)}/>
                    <button style={{margin:5}}>Save</button>
                    <button style={{margin:5}} type="button" onClick={() => setEditedOrder(null)}>Cancel</button>
                    </form>
                    }
                    {editOrder === null &&
                    <a style={{margin:5}} href="#" className='edit' onClick={() => setEditOrder(order)}>Edit</a>
                    }
                </li>
            ))}
                  </ol>*/}
            <table style={{margin: 'auto'}}>
            <tbody>
        <tr>
          <th style={thstyle}>Asiakasnro</th>
          <th style={thstyle}>Tilausnro</th>
          <th style={thstyle}>Tilauspvm</th>
          <th style={thstyle}>Summa</th>
          <th style={thstyle}>Palautus ja vaihto</th>
          <th style={thstyle}>Tila</th>
        </tr>
        {orders.map((order) => {
          return (
            <tr key={order.tilausnro}>
              <td style={tdstyle}>{order.astunnus}</td>
              <td style={tdstyle}>{order.tilausnro}</td>
              <td style={tdstyle}>{order.tilauspvm}</td>
              <td style={tdstyle}>{order.summa}</td>
              <td style={tdstyle}>{order.palautus}</td>
              <td style={tdstyle}>{editOrder?.tilausnro !== order.tilausnro && order.tila}
                    {editOrder?.tilausnro === order.tilausnro &&
                    <form onSubmit={update}>
                    <input style={{margin:5, width: 100, borderRadius: 5}} value={editStatus} onChange={e => setEditStatus(e.target.value)}/>
                    <button style={{margin:5, fontSize: '0.9em', backgroundColor: 'black', color: 'white', borderRadius: 5}}>Save</button>
                    <button style={{margin:5, fontSize: '0.9em', backgroundColor: 'black', color: 'white', borderRadius: 5}} type="button" onClick={() => setEditedOrder(null)}>Cancel</button>
                    </form>
                    }
                    {editOrder === null &&
                    <a style={{margin:5, textDecoration: 'none'}} href="#" className='edit' onClick={() => setEditOrder(order)}>Edit</a>
                    }</td>
            </tr>
          )
        })}
        </tbody>
      </table>
          </div> 
        
    </div>
  )
}

export default AdminOrders