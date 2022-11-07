import React from "react"
import bike from "../images/mountainbike.jpg"
import tarvike from "../images/tarvikkeet.jpg"
import mallisto from "../images/mallisto.jpg"


function ImageFrame() {
    return (

        <div className="image-container">
            <div className="top-image">
                <div className="image-top-text">
                    <h3>Maastopyörät</h3>
                    <button>Lue lisää</button>
                </div>
            </div>


            <div className="bottom-image-container">
                <div className="bottom-image">
                    <img className="bottom-picture" src={tarvike} alt="tarvike"></img>
                    <div className="image-bottom-text">
                        <h3>Tarvikkeet</h3>
                        <button>Lue lisää</button>
                    </div>
                </div>
                <div className="bottom-image">
                <img className="bottom-picture" src={mallisto} alt="mallisto"></img>
                    <div className="image-bottom-text">
                        <h3>Mallisto</h3>
                        <button>Lue lisää</button>
                    </div>

                </div>
            </div>
        </div>







    )




}

export default ImageFrame