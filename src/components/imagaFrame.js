import React from "react"
import bike from "../images/mountainbike.jpg"
import tarvike from "../images/tarvikkeet.jpg"
import mallisto from "../images/mallisto.jpg"


function ImageFrame() {
    return (

        <div className="container">          
            <div className="row gx-5 image-row">
                <div className="col-md-3 p-0 image-container">
                    <img className="img-fluid" src={tarvike} alt="tarvike"></img>
                    <div className="black-canvas text-center pt-5">
                        <h3>Maastopyörät</h3>
                        <button>Lue lisää</button>
                    </div>
                </div>
                <div className="col-md-3  p-0 image-container">
                <img className="img-fluid" src={mallisto} alt="mallisto"></img>
                    <div className="black-canvas text-center pt-5">
                        <h3>Sähköpyörät</h3>
                        <button>Lue lisää</button>
                    </div>

                </div>
                <div className="col-md-3  p-0 image-container">
                <img className="img-fluid" src={mallisto} alt="mallisto"></img>
                    <div className="black-canvas text-center pt-5">
                        <h3>Hypridipyörät</h3>
                        <button>Lue lisää</button>
                    </div>
                    </div>
                </div>
                <div className="row gx-5 image-row">
                <div className="col-md-3  p-0 image-container">
                <img className="img-fluid" src={mallisto} alt="mallisto"></img>
                    <div className="black-canvas text-center pt-5">
                        <h3>Maantiepyörät</h3>
                        <button>Lue lisää</button>
                    </div>

                </div>
                <div className="col-md-3  p-0 image-container">
                <img className="img-fluid" src={mallisto} alt="mallisto"></img>
                    <div className="black-canvas text-center pt-5">
                        <h3>Lastenpyörät</h3>
                        <button>Lue lisää</button>
                    </div>

                </div>
                <div className="col-md-3  p-0 image-container">
                <img className="img-fluid" src={mallisto} alt="mallisto"></img>
                    <div className="black-canvas text-center pt-5">
                        <h3>Tarvikkeet</h3>
                        <button>Lue lisää</button>
                    </div>

                </div>
            </div>
        </div>







    )




}

export default ImageFrame