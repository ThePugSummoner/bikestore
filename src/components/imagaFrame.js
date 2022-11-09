import React from "react"
import mountainbike from "../images/maastopyora.png"
import electricbike from "../images/sahkopyora.png"
import racingbike from "../images/maantiepyora.png"
import kidsbike from "../images/lastenpyora.png"
import tarvikeet from "../images/tarvikkeet.png"
import huolto from "../images/tarvikkeet.jpg"


function ImageFrame() {
    return (

        <div className="container-fluid">          
            <div className="row gx-5 image-row">
                <div className="col-md-3 p-0 image-container">
                    <img className="img-fluid" src={mountainbike} alt="tarvike"></img>
                    <div className="black-canvas text-center pt-lg-5 pt-md-2">
                        <h3 className="mt-4">Maastopyörät</h3>
                        
                    </div>
                </div>
                <div className="col-md-3  p-0 image-container">
                <img className="img-fluid" src={electricbike} alt="mallisto"></img>
                    <div className="black-canvas text-center pt-lg-5 pt-md-2">
                        <h3 className="mt-4">Sähköpyörät</h3>
                        
                    </div>

                </div>
                <div className="col-md-3  p-0 image-container">
                <img className="img-fluid" src={racingbike} alt="mallisto"></img>
                    <div className="black-canvas text-center pt-lg-5 pt-md-2">
                        <h3 className="mt-4">Maantiepyörät</h3>
                        
                    </div>
                    </div>
                </div>
                <div className="row gx-5 image-row pb-4">
                <div className="col-md-3  p-0 image-container">
                <img className="img-fluid" src={kidsbike} alt="mallisto"></img>
                    <div className="black-canvas text-center pt-lg-5 pt-sm-2">
                        <h3 className="mt-4">Lastenpyörät</h3>
                        
                    </div>

                </div>
                <div className="col-md-3  p-0 image-container">
                <img className="img-fluid" src={huolto} alt="mallisto"></img>
                    <div className="black-canvas text-center pt-lg-5 pt-md-2">
                        <h3 className="mt-4">Huolto</h3>
                        
                    </div>

                </div>
                <div className="col-md-3  p-0 image-container">
                <img className="img-fluid" src={tarvikeet} alt="mallisto"></img>
                    <div className="black-canvas text-center pt-lg-5 pt-md-2">
                        <h3 className="mt-4">Tarvikkeet</h3>
                        
                    </div>

                </div>
            </div>
        </div>







    )




}

export default ImageFrame