import React from "react"
import { useState, useEffect } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import Card from "./card/card"
import uuid from "react-uuid"

const URL = 'http://localhost/angularbikes/'

function SearchPage() {
    const param = useParams()
    const [product, setProduct] = useState([])

    useEffect(() => {
        axios.get(URL + 'searchProduct.php/' + param.searchTag)
            .then((response) => {
                const json = response.data
                setProduct(json)
            }).catch(error => {
                alert(error.response === undefined ? error : error.response.data.error)
            })
    }, [param])

    
    return (
        <div className="container py-4">
            {product.length === 0 ?
                <div className="row">
                    <div style={{height:350}} className="col text-center">                       
                        <h2 className="mt-5 pt-3">"{param.searchTag}"</h2>
                        <h3>Hakusanasi ei valitettavasti tuottanut yhtään tulosta.</h3>
                        <p>Koita uudestaan toisella hakusanalla.</p>                          
                    </div>
                </div>
                :
                <div className="row product-container">
                    <h3 className="text-center">Tulokset haulle "{param.searchTag}"</h3>
                    <span>Tuloksia {product.length} kpl</span>
                    {product.map(product =>
                        <Card key={uuid()} hide={false} product={product} maxWidth={200} height={150} cardHeigh={315} />)}
                </div>
            }
        </div>
    )
}

export default SearchPage