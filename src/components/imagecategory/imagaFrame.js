import React, { useState } from "react"
import mountainbike from "../../images/maastopyora.png"
import electricbike from "../../images/sahkopyora.png"
import racingbike from "../../images/maantiepyora.png"
import kidsbike from "../../images/lastenpyora.png"
import tarvikeet from "../../images/tarvikkeet.png"
import huolto from "../../images/tarvikkeet.jpg"
import ImageContainer from "./imagecontainer"
import uuid from 'react-uuid'
import "./imageframe.css"


function ImageFrame() {
const [testi,setTesti]=useState([
    {
        category:"Maastopyörä",
        img:mountainbike
    },
    {
        category:"Sähköpyörät",
        img:electricbike
    },
    {
        category:"Maantiepyörät",
        img:racingbike
    },
    {
        category:"Lastenpyörät",
        img:kidsbike
    },
    {
        category:"Huolto",
        img:huolto
    },
    {
        category:"Tarvikkeet",
        img:tarvikeet
    },
])


    return (

        <div className="container mx-auto ">
            <div className="row  image-row mb-4">
               {testi.map(test => <ImageContainer key={uuid()} item={test} />)}
            </div>
        </div>







    )




}

export default ImageFrame