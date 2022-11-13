import React from "react";
import { Link } from "react-router-dom";
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

    {/*useEffect(() => {
        axios.get(URL)
        .then((response) => {
          setTilaus(response.data)
        }).catch(error => {
          console.log(error.response ? error.response.data.error : error)
          alert('Häiriö järjestelmässä, yritä kohta uudelleen')
        })
      }, [])*/}

      useEffect(() => {
        (async () => {
          const result = await axios(URL);
          setData(result.data);
        })();
      }, []);
    
    
  return (
    <div  style={styles} className="main">
        <h1 style={{margin:15}}>Tilaukseni</h1>
        <div style={{textAlign:'center', margin: 'auto'}}>
            <Table columns={columns} data={data}/>
        </div>
        
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