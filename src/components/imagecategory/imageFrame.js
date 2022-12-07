import React, { useState,useEffect } from "react"
import mountainbike from "../../images/maastopyora.png"
import electricbike from "../../images/sahkopyora.png"
import racingbike from "../../images/maantiepyora.png"
import kidsbike from "../../images/lastenpyora.png"
import tarvikeet from "../../images/tarvikkeet.png"
import huolto from "../../images/tarvikkeet.jpg"
import ImageContainer from "./imagecontainer"
import uuid from 'react-uuid'
import "./imageframe.css"
import axios from "axios"

const URL = 'http://localhost/angularbikes/'

function ImageFrame() {
const [categories, setCategories] = useState([])
const [testi, setTesti]=useState([
    {
        id:1,
        img:mountainbike
    },
    {
        id:2,
        img:electricbike
    },
    {
       id:3,
        img:racingbike
    },
    {
        id:4,
        img:kidsbike
    },
    {
        id:5,
        img:huolto
    },
    {
        id:6,
        img:tarvikeet
    },
])



useEffect(() => {
  axios.get(URL + 'getCategories.php')
    .then((response) => {
        //console.log(response.data);
      const json = response.data;
      setCategories(json);
    }).catch (error => {
      alert(error.response === undefined ? error : error.response.data.error);
    })
}, [])



    return (

        <div className="container mx-auto ">
            <div className="row  image-row mb-4">
               {categories.map(category => (
               <ImageContainer key={uuid()} bikeCategory={category} item={testi}/>
               ))}
            </div>
        </div>







    )




}

export default ImageFrame