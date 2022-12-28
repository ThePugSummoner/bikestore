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

const URL = 'http://localhost/angularbikes/'

function Dbmanagement() {

    
    //const [data, setData] = useState([])
    const [newItem, setNewItem] = useState([])
    const [itemNum, setItemNum] = useState('')
    const [itemName, setItemName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [catnum, setCatnum] = useState('')
    const [subcat, setSubcat] = useState('')
    const [image, setImage] = useState('')
    const [balance, setBalance] = useState('')
    const [size, setSize] = useState('')
    const [catname, setCatname] = useState('')
    const [catNum, setCatNum] = useState('')
    const [newCat, setNewCat] = useState('')
    const navigate = useNavigate()


      const saveItem = (e) => {
        e.preventDefault()
        const json = JSON.stringify({itemName: itemName, description: description, price: price, catnum: catnum, subcat: subcat, image: image, balance: balance, size: size})
        axios.post(URL + 'adminadditem.php', json, {
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(response => {
            if (response.data === 'Antamasi tiedot ovat virhellisiä') {
                alert ("Antamasi tiedot ovat virhellisiä")
                setItemName('')
                setDescription('')
                setPrice('')
                setCatnum('')
                setSubcat('')
                setImage('')
                setBalance('')
                setSize('')
            } else {
                setNewItem(tuote => [...tuote, response.data])
                alert ("Uusi tuote lisätty tauluun")
                setItemName('')
                setDescription('')
                setPrice('')
                setCatnum('')
                setSubcat('')
                setImage('')
                setBalance('')
                setSize('')
                }
            }).catch(error => {
              console.log(error.response ? error.response.data.error : error)
              alert('Häiriö järjestelmässä, yritä kohta uudelleen!')
                setItemName('')
                setDescription('')
                setPrice('')
                setCatnum('')
                setSubcat('')
                setImage('')
                setBalance('')
                setSize('')
            })
      }

      const saveCategory = (e) => {
        e.preventDefault()
        const json = JSON.stringify({catname: catname})
        axios.post(URL + 'adminaddcat.php', json, {
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(response => {
            if (response.data === 'Antamasi tiedot ovat virhellisiä') {
                alert ("Antamasi tiedot ovat virhellisiä")
                setCatname('')
            } else {
                setNewCat(tuoteryhma => [...tuoteryhma, response.data])
                setCatname('')
                alert ("Uusi tuoteryhma lisätty")
            }
        }).catch(error => {
          console.log(error.response ? error.response.data.error : error)
          alert('Häiriö järjestelmässä, yritä kohta uudelleen!')
          setCatname('')
        })
      }

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

      const delItem = (e) => {
        e.preventDefault()
        const json = JSON.stringify({itemNum: itemNum})
        axios.post(URL + 'admindelitem.php', json, {
          headers: {
            'Content-Type': 'application/json'
          }
        })
          .then((response) => {
            if (response.data === 'Antamasi tiedot ovat virhellisiä') {
                alert ("Antamasi tiedot ovat virhellisiä")
                setItemNum('')
            } else {
                setItemNum('')
                alert('Tuote nro.' + itemNum + ' poistetttu!');
            }
      }).catch(error => {
          console.log(error.response ? error.response.data.error : error)
          alert('Häiriö järjestelmässä, yritä kohta uudelleen!')
        })
      }

      const delCategory = (e) => {
        e.preventDefault()
        const json = JSON.stringify({catNum: catNum})
        axios.post(URL + 'admindelcat.php', json, {
          headers: {
            'Content-Type': 'application/json'
          }
        })
          .then((response) => {
            if (response.data === 'Antamasi tiedot ovat virhellisiä') {
                alert ("Antamasi tiedot ovat virhellisiä")
                setCatNum('')
            } else {
                setCatNum('')
                console.log(response.data)
                alert('Kategoria nro.' + catNum + ' poistetttu!');
            }
      }).catch(error => {
          console.log(error.response ? error.response.data.error : error)
          alert('Häiriö järjestelmässä, yritä kohta uudelleen!')
        })
      }

      /*const handleUser = (e) => {
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
      <div style={{width: 600, textAlign:'center', marginTop: 30, marginLeft: 70}}>
        <h1 style={{margin: 15}}>Tuote</h1>
        <form style={{marginTop:10, marginBottom: 15}} className="row g-3" onSubmit={saveItem}>
            <div className="col-12">
                <label style={{marginLeft:10}} htmlFor="inputIname" className="form-label">Tuotenimi*</label>
                <input type="text" className="form-control" id="inputIname" placeholder="Tuotenimi"  value={itemName} onChange={e => setItemName(e.target.value)}/>
            </div>
            <div className="col-md-12">
                <label style={{marginLeft:10}} htmlFor="inputDescription" className="form-label">Kuvaus*</label>
                <input type="text" className="form-control" id="inputDescription" placeholder="Kuvaus"  value={description} onChange={e => setDescription(e.target.value)}/>
            </div>
            <div className="col-md-12">
            <label style={{marginLeft:10}} htmlFor="inputPrice" className="form-label">Hinta*</label>
                <input type="text" className="form-control" id="inputPrice" placeholder="Hinta"  value={price} onChange={e => setPrice(e.target.value)}/>
            </div>
            <div className="col-md-12">
                <label style={{marginLeft:10}} htmlFor="inputCat" className="form-label">Kategorianro*</label>
                <input type="text" className="form-control" id="inputCat" placeholder="Kategorianro"  value={catnum} onChange={e => setCatnum(e.target.value)}/>
            </div>
            <div className="col-md-12">
                <label style={{marginLeft:10}} htmlFor="inputSubCat" className="form-label">Alakategorianro*</label>
                <input type="text" className="form-control" id="inputSubcat" placeholder="Alakategorianro"  value={subcat} onChange={e => setSubcat(e.target.value)} />
            </div>
            <div className="col-md-12">
                <label style={{marginLeft:10}} htmlFor="inputSubCat" className="form-label">Saldo*</label>
                <input type="text" className="form-control" id="inputBalance" placeholder="Kappalemäärä"  value={balance} onChange={e => setBalance(e.target.value)} />
            </div>
            <div className="col-md-12">
                <label style={{marginLeft:10}} htmlFor="inputiMAGE" className="form-label">Kuva*</label>
                <input type="text" className="form-control" id="inputImage" placeholder="URL"  value={image} onChange={e => setImage(e.target.value)} />
            </div>
            <div className="col-md-12">
                <label style={{marginLeft:10}} htmlFor="inputSubCat" className="form-label">Koko*</label>
                <input type="text" className="form-control" id="inputSize" placeholder="Koko"  value={size} onChange={e => setSize(e.target.value)} />
            </div>
            <div className="col-12">
                <button style={{width:500, fontSize:'1.5em', backgroundColor: '#333', marginTop:10}} type="submit" className="btn btn-dark mb-3">Lisää tuote</button>
            </div>
            </form>
            <form style={{marginTop:10, marginBottom: 15}} className="row g-3" onSubmit={delItem}>
            <div className="col-12">
                <label style={{marginLeft:10}} htmlFor="inputNum" className="form-label">Tuotenro*</label>
                <input type="text" className="form-control" id="inputNum" placeholder="Tuotenro"  value={itemNum} onChange={e => setItemNum(e.target.value)}/>
            </div>
            <div className="col-12">
                <button style={{width:500, fontSize:'1.5em', backgroundColor: '#333', marginTop:10}} type="submit" className="btn btn-dark mb-3">Poista tuote</button>
            </div>
            </form>
            
        </div>

        <div style={{width: 600, textAlign:'center', marginTop: 30, marginLeft: 70}}>
        <h1 style={{margin: 15}}>Kategoria</h1>
        <form style={{marginTop:10, marginBottom: 15}} className="row g-3" onSubmit={saveCategory}>
            <div className="col-12">
                <label style={{marginLeft:10}} htmlFor="inputCatname" className="form-label">Nimi*</label>
                <input type="text" className="form-control" id="inputCatname" placeholder="Nimi" value={catname} onChange={e => setCatname(e.target.value)}/>
            </div>
            <div className="col-12">
                <button style={{width:500, fontSize:'1.5em', backgroundColor: '#333', marginTop:10}} type="submit" className="btn btn-dark mb-3">Lisää kategoria</button>
            </div>
        </form>
        <form style={{marginTop:10, marginBottom: 15}} className="row g-3" onSubmit={delCategory}>
            <div className="col-12">
                <label style={{marginLeft:10}} htmlFor="inputCatNum" className="form-label">Kategorianro*</label>
                <input type="text" className="form-control" id="inputCatNum" placeholder="Kategorianro" value={catNum} onChange={e => setCatNum(e.target.value)}/>
            </div>
            <div className="col-12">
                <button style={{width:500, fontSize:'1.5em', backgroundColor: '#333', marginTop:10}} type="submit" className="btn btn-dark mb-3">Poista kategoria</button>
            </div>
        </form>
        </div>
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

export default Dbmanagement