import React from "react"
import Slider from "../slider/slider"
import {useGetAllProductsQuery} from "../../features/productsAPI";
import {useDispatch} from "react-redux";
import {addToCart} from "../../features/cartSlice";
import "./banner.css"



function Banner(){
   
   return(
      <div className="container-fluid front min-vh-100">
         <div className="row">
            <div className="col-12 p-0 slider-container min-vh-100">
               <Slider  category="Tarjous"/>
            </div>
         </div>
      </div>
   )
}

export default Banner