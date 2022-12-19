import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import ToTop from "./toTop"
import {useSelector, useDispatch} from "react-redux";
import {addToCart, getTotals} from "../features/cartSlice";
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slider from "./slider/slider";

const URL = 'http://localhost/angularbikes/'

function Product() {
    const [product, setProduct] = useState([])
    const params = useParams()

    const cart = useSelector((state) => state.cart);
    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
        //window.location.reload(false)   
    }
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get(URL + "product.php/" + params.productId)
            .then((response) => {
                const json = response.data
                setProduct(json)
            }).catch(error => {
                console.log(error.response === undefined ? error : error.response.data.error)
                alert('Häiriö järjestelmässä, yritä kohta uudelleen!')
            })
            dispatch(getTotals());
    }, [params, cart, dispatch])

    console.log(product)
    console.log(URL + "product.php/" + params.productId)
    return (
        <div className="container-fluid">
            <div  className="row">
            <ul className="page-navigation py-2">
                    <li style={{color:"black"}}><Link style={{textDecoration: "none",color:"black"}} to={`/`}>Etusivu</Link></li>
                        <li style={{color:"black"}}><FontAwesomeIcon style={{paddingRight:10}} icon="fa-solid fa-angle-right" /> <Link style={{textDecoration: "none",color:"black"}} to={`/category/${product[0]?.trnimi}`}>{product[0]?.trnimi}</Link></li>
                        <li style={{color:"black"}}><FontAwesomeIcon style={{paddingRight:10}} icon="fa-solid fa-angle-right" /> <Link style={{textDecoration: "none",color:"black"}} to={`/category/${product[0]?.trnimi}/${product[0]?.alakategoria}`}>{product[0]?.alakategoria}</Link></li>
                        <li style={{color:"black"}}><FontAwesomeIcon style={{paddingRight:10}} icon="fa-solid fa-angle-right" /> {product[0]?.nimi}</li>
                    </ul>
                <div className="col-12 col-lg-7">
                    {product.length > 0 && <img className="img-fluid" src={URL + "tuotekuvat/" + product[0].kuva} alt="logokuva"></img>}
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
                    <button onClick={()=> handleAddToCart(product[0])}>Lisää koriin</button>
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
            <div className="row">
                <div style={{height:500}} className="col-12 p-0 slider-container">
                    {product.length > 0 && <Slider heading={product[0]?.trnimi} category={product[0]?.trnimi}/>}
                </div>
            </div>
            <ToTop />
        </div>
    )
}

export default Product