import React, { useEffect, useState } from "react"
import { useLocation, useParams } from "react-router-dom"
import ToTop from "../toTop"
import axios from "axios"
import uuid from 'react-uuid'
import { Link } from "react-router-dom"
import Card from "../card/card"
import "./category.css"
import {useDispatch, useSelector } from "react-redux";
import {getTotals} from "../../features/cartSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


const URL = 'http://localhost/angularbikes/'


function Category() {
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const location = useLocation()
    /* console.log(props, " props"); Tarkastelua varten mitä antavat tuloksina.
     console.log(location, " useLocation Hook");*/
    const params = useParams()
    
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get(URL + "products.php/" + params.id)
            .then((response) => {
                const json = response.data
                setProducts(json)
                setIsLoading(false)
            }).catch(error => {
                console.log(error.response === undefined ? error : error.response.data.error)
                alert('Häiriö järjestelmässä, yritä kohta uudelleen!')
            })
            dispatch(getTotals());
    }, [params, cart, dispatch])
 


    if(isLoading){
        return (        
            <div className="min-vh-100">
                
            </div>  )
    }
              
    return(
        <div className="container-fluid mb-4">
            <div className="row">
                <div style={{backgroundImage:`url(${URL + "kategoriakuvat/" + products.category[0].trkuva})`}} className="col category-div">
                <ul className="page-navigation">
                    <Link style={{textDecoration: "none",color:"yellow"}} to={"/"}><li>Etusivu</li> </Link>              
                    <li><FontAwesomeIcon style={{paddingRight:10}} icon="fa-solid fa-angle-right" /> {products.category[0].trnimi}</li>  
                </ul>
                    <div className="category-center-heading"><h1>{products.category[0].trnimi}</h1></div>
                </div>
            </div>
            <div className="row pb-3">
                <div className="col category-info">
                    <h3 className="py-3 fs-2"> {products.category[0].trotsikko}</h3>
                    <p className="mx-4">{products.category[0].trkuvaus} </p>
                </div>
            </div>
            <div className="row pb-3">
                <div className="col category-subcategories">
                    <h3 className="text-center">{products.category[0].trnimi} kategoriat</h3>
                    <ul>
                        {products.subcategories?.map(subcate => <Link className="link-items-category" key={uuid()} to={`/category/${products.products[0].trnimi}/${subcate.alakategoria}`}><li>{subcate.alakategoria}</li></Link>)}
                    </ul>
                </div>
            </div>
            <div className="row product-container">

                {products.products?.map(product =>
                    <Card key={uuid()} product={product} width={200} height={150} />)}
            </div>
            <ToTop />
        </div>
                
    )
}

export default Category