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

    console.log(product, "SearchPagen Produt")
    return (
        <div className="container-fluid py-4">
            {product.length === 0 ?
                <div className="row">
                    <div className="col">
                        <h3>Hakusi ei valitettavasti tuottanut yhtään tulosta.</h3>
                        <p>Koita uudestaan toisella hakusanalla.</p>
                    </div>
                </div>
                :
                <div className="row product-container">
                    <h3>Hakusi tuloksia ,{product.length} tuotetta</h3>
                    {product.map(product =>
                        <Card key={uuid()} product={product} width={200} height={150}/>)}
                </div>
            }
        </div>
    )
}

export default SearchPage