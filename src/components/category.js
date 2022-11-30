import React from "react"
import { useLocation,useParams } from "react-router-dom";
import ToTop from "./toTop";


function Category(props){
    const location=useLocation()
    const data=location.state.name
   /* console.log(props, " props"); Tarkastelua varten mitä antavat tuloksina.
    console.log(location, " useLocation Hook");*/
    const params=useParams()
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