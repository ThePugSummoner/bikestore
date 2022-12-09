import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import uuid from 'react-uuid'
import bike from "../images/Rectangle 28.png"
import { Link } from "react-router-dom"


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
                <div className="col py-5">
                    <h4>{params.subCategoryId}</h4>
                    <p>Lorem liipalaapapal jotain sinnepäin niin ja näin tänne voidaan kirjoittaa tekstiä . Tai sitten eivoida kirjoittaa yhtään mitään tekstiä.
                        Mietitään yhdessä. Liipa laapa.
                    </p>
                </div>
            </div>
            <div className="row">
            <h3>{params.subCategoryId}</h3>
                <div className="col product-container">
                    

                    {product.products?.map(product =>

                        <div key={uuid()} className="col-4 card-item">
                            <Link to={`/product/${product.tuotenro}`}>
                                <div className="card-image-container">
                                    <img src={bike} alt="bike"></img>
                                </div>
                                <div className="card-body">
                                    <h5>{product?.nimi}</h5>
                                </div>
                            </Link>
                            <div className="card-footer">
                                <span>{product?.hinta}</span>
                            </div>
                        </div>)}

                </div>
            </div>
        </div>
    )
}

export default SubCategory