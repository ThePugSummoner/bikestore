import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import uuid from 'react-uuid'
import bike from "../images/Rectangle 28.png"
import { Link } from "react-router-dom"
import Card from "./card/card"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ToTop from "./toTop"


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


    return (
        <div className="container-fluid">
            <div className="row">
                <ul style={{ paddingLeft: 20 }} className="page-navigation">
                    <li><Link style={{ textDecoration: "none", color: "black" }} to={`/`}>Etusivu</Link></li>
                    <li style={{ color: "black" }}><FontAwesomeIcon style={{paddingRight:10}} icon="fa-solid fa-angle-right" /> <Link style={{ textDecoration: "none", color: "black" }} to={`/category/${params.id}`}>{params.id}</Link></li>
                    <li style={{ color: "black" }}><FontAwesomeIcon style={{paddingRight:10}} icon="fa-solid fa-angle-right" /> {params.subCategoryId}</li>
                </ul>
                <div className="col py-2 mb-4 subcate-info">

                    <h4 className="text-center">{params.subCategoryId}</h4>
                    <div className="row py-2 my-2 mx-auto">
                        <div className="col-4">
                        <img src={bike} alt="kategoria kuva"></img>
                        </div>
                        <div className="col">
                        <p>Lorem liipalaapapal jotain sinnepäin niin ja näin tänne voidaan kirjoittaa tekstiä . Tai sitten eivoida kirjoittaa yhtään mitään tekstiä.
                        Mietitään yhdessä. Liipa laapa.
                    </p>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="row pb-4 ms-0 ms-sm-5">
                <div className="col product-container">


                    {product.products?.map(product =>

                        <Card key={uuid()} product={product} width={200} height={150} />)}

                </div>
            </div>
            <ToTop/>
        </div>
    )
}

export default SubCategory