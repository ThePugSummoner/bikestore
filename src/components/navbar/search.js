import React from "react"
import { useState, useEffect } from "react"
import searchLogo from "../../images/spanner 2.png"
import axios from "axios"
import { Link } from "react-router-dom"
import uuid from 'react-uuid'
import "./navbar.css"

const URL = 'http://localhost/angularbikes/'

function Search() {
    const [searchText, setSearchText] = useState("")
    const [product, setProduct] = useState([])

    useEffect(() => {
        axios.get(URL + 'searchProduct.php/' + searchText)
            .then((response) => {
                const json = response.data
                setProduct(json)
            }).catch(error => {
                alert(error.response === undefined ? error : error.response.data.error)
            })
    }, [searchText])

function handleSearch(){
    setSearchText("")
}
function handleSearchPage(event){

    searchText==="" ? event.preventDefault() : setSearchText("")
    
    
}

    console.log(searchText, "Tuotehakenunimi")
    console.log(product, "Tuotteet")
    console.log(URL + 'searchProduct.php/' + { searchText })
    return (
        <div className="search-container">
            <input className="top-nav-search" type="text" placeholder="Search..." value={searchText} onChange={e => setSearchText(e.target.value)}></input>
            <Link onClick={handleSearchPage} to={"search/"+searchText}><button className="search-button" ><img src={searchLogo} alt="search logo"></img></button></Link>
            <div style={{display:product.length>0 && "block"}} className="product-list">
                {product.length > 0 && product?.map(product =>
                <Link style={{textDecoration:"none",color:"black"}} key={uuid()} to={`/product/${product.tuotenro}`} onClick={handleSearch}>
                    <div className="search-product">
                        <div>
                            <img style={{ height: 80 }} src={URL +"tuotekuvat/"+product.kuva} alt="Product"></img>
                        </div>
                        <div>
                            <h3 style={{fontSize:20}}>{product.nimi}</h3>
                            <p style={{color:"black"}}>{product.hinta}</p>
                        </div>
                    </div>
                    </Link>
                )}


            </div>
        </div>
    )
}

export default Search