import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import uuid from 'react-uuid'
import bike from "../images/Rectangle 28.png"
import { Link } from "react-router-dom"
import Card from "./card/card"


const URL = 'http://localhost/angularbikes/'


function SubCategory() {
    const [product, setProduct] = useState([])
    const params = useParams()


    useEffect(() => {
        axios.get(URL + "subCategoryProducts.php/" + params.id + "/" + params.subCategoryId)
            .then((response) => {
                const json = response.data
                setProduct(json)
            }).catch(error => {
                console.log(error.response === undefined ? error : error.response.data.error)
                alert('Häiriö järjestelmässä, yritä kohta uudelleen!')
            })
    }, [params])
    console.log(product)
    console.log(URL + "subCategoryProducts.php/" + params.id + "/" + params.subCategoryId)


    return (
        <div className="container-fluid">
            <div className="row">
            <ul style={{paddingLeft:20}} className="page-navigation">
                    <Link style={{textDecoration: "none",color:"black"}} to={`/`}><li>Etusivu</li></Link>
                        <Link style={{textDecoration: "none",color:"black"}} to={`/category/${params.id}`}><li>{params.id}</li></Link>
                        <li style={{color:"black"}}>{params.subCategoryId}</li>
                    </ul>
                <div className="col py-5">
           
                    <h4>{params.subCategoryId}</h4>
                    <p>Lorem liipalaapapal jotain sinnepäin niin ja näin tänne voidaan kirjoittaa tekstiä . Tai sitten eivoida kirjoittaa yhtään mitään tekstiä.
                        Mietitään yhdessä. Liipa laapa.
                    </p>
                </div>
            </div>
            <div className="row pb-4">
            <h3>{params.subCategoryId}</h3>
                <div className="col product-container">
                    

                    {product.products?.map(product =>

                    <Card key={uuid()} product={product} width={200} height={150}/>)}
                    
                </div>
            </div>
        </div>
    )
}

export default SubCategory