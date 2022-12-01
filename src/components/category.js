import React,{useEffect,useState} from "react"
import { useLocation,useParams } from "react-router-dom"
import ToTop from "./toTop"
import axios from "axios"

const URL = 'http://localhost/angularbikes/'


function Category(props){
    const [products,setProducts]=useState([])
    const location=useLocation()
    const data=location.state.name
   /* console.log(props, " props"); Tarkastelua varten mitä antavat tuloksina.
    console.log(location, " useLocation Hook");*/
    const params=useParams()

    useEffect(()=>{
axios.get(URL + "products.php/" + params.id)
.then((response)=>{
    const json=response.data
    setProducts(json)
}).catch(error=>{
    console.log(error.response=== undefined ? error : error.response.data.error)
    alert('Häiriö järjestelmässä, yritä kohta uudelleen!')
})
    },[params])

console.log(products,"Urli homma")
return(


    <div className="container-fluid">
        <div className="row">
            <div className="col min-vh-100">
            <h1>{data}</h1>
            <ToTop/>
            </div>
        </div>
</div>




)
}

export default Category