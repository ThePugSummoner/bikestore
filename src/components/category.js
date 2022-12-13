import React, { useEffect, useState } from "react"
import { useLocation, useParams } from "react-router-dom"
import ToTop from "./toTop"
import axios from "axios"
import uuid from 'react-uuid'
import { Link } from "react-router-dom"
import Card from "./card/card"

const URL = 'http://localhost/angularbikes/'


function Category(props) {
    const [products, setProducts] = useState([])
    const [loaded, setLoaded] = useState(false)
    const location = useLocation()
    const data = location.state.name
    /* console.log(props, " props"); Tarkastelua varten mitä antavat tuloksina.
     console.log(location, " useLocation Hook");*/
    const params = useParams()

    useEffect(() => {
        axios.get(URL + "products.php/" + params.id)
            .then((response) => {
                const json = response.data
                setProducts(json)
                setLoaded(true)
            }).catch(error => {
                console.log(error.response === undefined ? error : error.response.data.error)
                alert('Häiriö järjestelmässä, yritä kohta uudelleen!')
            })
    }, [params])
 
    console.log(products, "Urli homma")
    return (
        <>
            {loaded===false ? 
            <div className="min-vh-100">
                
            </div>  
                      
            :    
    
        <div style={{scrollBehavior:"none"}} className="container-fluid">
            <div className="row">
                <div style={{backgroundImage:`url(${URL + "kategoriakuvat/" + products.category[0].trkuva})`}} className="col category-div">
                    <div className="category-center-heading"><h1>{data}</h1></div>
                </div>
            </div>
            <div className="row pb-3">
                <div className="col text-center">
                    <h3 className="py-3 fs-2"> {products.category[0].trotsikko}</h3>
                    <p className="mx-4">{products.category[0].trkuvaus} </p>
                </div>
            </div>
            <div className="row pb-3">
                <div className="col category-subcategories">
                    <h3 className="text-center">{data} kategoriat</h3>
                    <ul>
                        {products.subcategories?.map(subcate => <Link className="link-items-category" key={uuid()} to={`/category/${products.products[0].trnro}/${subcate.alakategoria}`}><li>{subcate.alakategoria}</li></Link>)}
                    </ul>
                </div>
            </div>
            <div className="row product-container">

                {products.products?.map(product =>
                    <Card key={uuid()} product={product} width={200} height={150} />)}
            </div>
            <ToTop />
        </div>
                }

                </>

    )
}

export default Category