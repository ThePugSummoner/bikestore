import React from "react"
import Slider from "../slider/slider"
import "./banner.css"



function Banner(){
   return(
      <div className="container-fluid front min-vh-100">
         <div className="row">
            <div className="col-12 p-0 slider-container min-vh-100">
               <h1 style={{color:"white"}} className="my-auto mx-auto banner-h1">Hiilinielu kuriin, kiidä pyörällä kohti parempaa huomista!</h1>
               <Slider  category="Tarjous"/>
            </div>
         </div>
      </div>
   )
}

export default Banner