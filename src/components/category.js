import React, { useEffect, useState } from "react"
import { useLocation, useParams } from "react-router-dom"
import ToTop from "./toTop"
import axios from "axios"
import uuid from 'react-uuid'
import { Link } from "react-router-dom"

const URL = 'http://localhost/angularbikes/'


function Category(props) {
    const [products, setProducts] = useState([])
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
            }).catch(error => {
                console.log(error.response === undefined ? error : error.response.data.error)
                alert('Häiriö järjestelmässä, yritä kohta uudelleen!')
            })
    }, [params])

    console.log(products, "Urli homma")
    return (

        <div className="container-fluid">
            <div className="row">
                <div className="col category-div">
                    <div className="category-center-heading"><h1>{data}</h1></div>
                </div>
            </div>
            {/*<div className="row pb-3">
                <div className="col text-center">
                    <h3 className="py-3 fs-2"> Maastopyöriä joka lähtöön etsittely hommaa. Tehtävä erillinen teksti vielä tuonne backendille</h3>
                    <p className="mx-4"> jotain tekstiä tähänki ja samalla tavalla laittaa backendille.Päällystettyjen katujen loppuessa maastopyöräilijöiden seikkailut ja hauskanpito alkavat.
                        Maastopyöräily on saanut alkunsa 70-luvulla pienen ryhmän aloitteesta ja on vuosien varrella kasvanut nykyiseen suosioonsa kattaen nykyisin suuren
                        kirjon erilaisia muotoja kuten maastossa tehtävät pyöräretket kuin myös hurjat downhill-alamäkiajot. Maastopyörä onkin hyvin monipuolinen pyörä ja soveltuu
                        mainiosti niin työmatkoille kuin viikonloppujen pyöräretkille hieman vaativimmissakin olosuhteissa. Etujousitettu maastopyörä on maastopyörien klassikko.
                        Se on täysjoustoon verrattuna kevyempi, edullisempi ja helppohuoltoisempi. Vaativiin maastoihin suuntaavan kannattaa panostaa kunnollisiin levyjarruihin,
                        joustohaarukkaan ja laadukkaisiin vaihteisiin. Kiekkojen ja rungon koko kannattaa valita oman pituuden ja ajotyylin mukaan.</p>
                </div>
    </div>*/}
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

                    <div key={uuid()} className="col-4 card-item">
                        <Link to={`/product/${product.tuotenro}`}>
                            <div className="card-image-container">
                                <img style={{height:120}} src={URL +"tuotekuvat/"+product.kuva} alt="bike"></img>
                            </div>
                            <div className="card-body">
                                <h5>{product.nimi}</h5>
                            </div>
                        </Link>
                        <div className="card-footer">
                            <span>{product.hinta}</span>
                        </div>
                    </div>)}

            </div>
            <ToTop />
        </div>




    )
}

export default Category