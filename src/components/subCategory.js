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
    const [isLoading,setIsloading]=useState(true)
    const params = useParams()


    useEffect(() => {
        axios.get(URL + "subCategoryProducts.php/" + params.id + "/" + params.subCategoryId)
            .then((response) => {
                const json = response.data
                setProduct(json)
                setIsloading(false)
            }).catch(error => {
                console.log(error.response === undefined ? error : error.response.data.error)
                alert('Häiriö järjestelmässä, yritä kohta uudelleen!')
            })
    }, [params])

console.log(product,"Subcategorylle tulevat ")

if(isLoading===true){
    return(
    <div>

    </div>
    )
}
    return (
        <div className="container-fluid">
            <div className="row">
                <ul style={{ paddingLeft: 20 }} className="page-navigation">
                    <li><Link style={{ textDecoration: "none", color: "black" }} to={`/`}>Etusivu</Link></li>
                    <li style={{ color: "black" }}><FontAwesomeIcon style={{paddingRight:10}} icon="fa-solid fa-angle-right" /> <Link style={{ textDecoration: "none", color: "black" }} to={`/category/${params.id}`}>{params.id}</Link></li>
                    <li style={{ color: "black" }}><FontAwesomeIcon style={{paddingRight:10}} icon="fa-solid fa-angle-right" /> {params.subCategoryId}</li>
                </ul>
                <div className="col py-2 mb-4 subcate-info">
                    <h4 className="text-center">{product.subcategories[0].alakategoriaotsikko}</h4>
                    <div style={{display:"flex",flexDirection:"row",flexWrap:"wrap", justifyContent:"left"}} className="row py-2 my-2 ">
                        <div className="col-md-3 ms-0 ps-0 ms-md-5 ps-md-4">
                        <img className="img-fluid" src={URL + "alakategoriakuvat/" + product.subcategories[0].alakategoriakuva} alt="kategoria kuva"></img>
                        </div>
                        <div className="col-md-5">
                        <p>{product.subcategories[0].alakategoriakuvaus}
                    </p>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="row pb-4 ms-0 ms-sm-5">
                <div className="col product-container">


                    {product.products?.map(product =>

                        <Card key={uuid()} hide={false} product={product} maxWidth={200} height={150} cardHeigh={315} />)}

                </div>
            </div>
            <ToTop/>
        </div>
    )
}

export default SubCategory