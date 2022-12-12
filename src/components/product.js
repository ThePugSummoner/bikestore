import React, { useState,useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import ToTop from "./toTop"

const URL = 'http://localhost/angularbikes/'

function Product(){
    const[product,setProduct]=useState([])
    const params = useParams()
    

    useEffect(() => {
        axios.get(URL + "product.php/" + params.productId)
            .then((response) => {
                const json = response.data
                setProduct(json)
            }).catch(error => {
                console.log(error.response === undefined ? error : error.response.data.error)
                alert('Häiriö järjestelmässä, yritä kohta uudelleen!')
            })
    }, [params])

    console.log(product)
    console.log(URL + "product.php/"+ params.productId)
    return(
        <div className="container">
            <div className="row py-5">
                <div className="col-12 col-lg-7">
                {product.length>0 && <img src={require(`../tuotekuvat/${product[0]?.kuva}`)} alt="logokuva"></img>}
                </div>
                <div className="col  product-info">
                <h3>{product[0]?.nimi}</h3>
                <ul>
                        <li>Ominaisuudet</li>
                        <li>Väri</li>
                        <li>rungon koko: {product[0]?.koko}</li>
                        <li>Yksityiskohtia</li>
                    </ul>
                <span>{product[0]?.hinta}€</span>
                <button>Lisää koriin</button>
                <div className="product-info-varasto py-2">
                <div className="varasto-container">
                <span>Varastossa </span>
                <span>{product[0]?.saldo} kpl</span>
                </div>
                <div className="varasto-container">
                    <span>Toimitus 6-8 arkipäivää</span>
                </div>
                </div>
                </div>
            </div>
            <div className="row py-5">
                <div className="col">

                <h3 className="text-center">Kuvaus:</h3>
                <p>{product[0]?.kuvaus}</p>
                </div>

            </div>
            <ToTop/>
        </div>
    )
}

export default Product