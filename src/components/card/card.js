import React from "react"
import bike from "../../images/Rectangle 28.png"
import"./card.css"



function Card() {



    return (

        <div className="card-item">
            <div className="card-image-container">
                <img src={bike} alt="bike"></img>
            </div>
            <div className="card-body">
                <h5>Pyörä</h5>
            </div>
            <div className="card-footer">
                <span>549,99</span>
            </div>
        </div>
    )
}
export default Card