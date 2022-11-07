import React from "react"
import bike from "../images/Rectangle 28.png"



function Card() {
    return (

        <div className="card-item">
            <div className="card-image-container">
                <img src={bike} alt="bike"></img>
            </div>
            <div className="card-body">
                <h5>Pyörä</h5>
                <p>Rove on sporttinen hybridipyörä, joka toimii niin työmatkalla kuin kuntolenkilläkin, ympärivuotisesti ja monenlaisilla ajoalustoilla. Rove 4 -mallissa on luotettava Shimano-vaihteisto, Tektro-levyjarrut ja Suntour-joustohaarukka. Pyörä on helppo varustella oman tarpeen mukaan lokasuojilla, tavaratelineellä.
                </p>
            </div>
            <div className="card-footer">
                <span>549,99</span>
                <button>Lisää ostoskoriin</button>
            </div>
        </div>
    )
}
export default Card