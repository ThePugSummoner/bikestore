import React from "react"
import mountainbike from "../images/maastopyora.png"
import electricbike from "../images/sahkopyora.png"
import racingbike from "../images/maantiepyora.png"
import kidsbike from "../images/lastenpyora.png"
import tarvikeet from "../images/tarvikkeet.png"
import huolto from "../images/tarvikkeet.jpg"
import ImageContainer from "./imagecontainer"


function ImageFrame() {



    return (

        <div className="container mx-auto ">
            <div className="row  image-row mb-4">
                <ImageContainer img={mountainbike} category="Maastopyörä"/>
                <ImageContainer img={electricbike} category="Sähköpyörät"/>
                <ImageContainer img={racingbike} category="Maantiepyörät"/>
                <ImageContainer img={kidsbike} category="Lastenpyörät"/>
                <ImageContainer img={huolto} category="Huolto"/>
                <ImageContainer img={tarvikeet} category="Tarvikkeet"/>
            </div>
        </div>







    )




}

export default ImageFrame