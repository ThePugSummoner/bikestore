import React from "react"
import cannondale from "../images/cannondale.png"
import cube from "../images/cube.png"
import haibike from "../images/haibike.png"
import orbea from "../images/orbea.png"
import schwalbe from "../images/schwalbe.png"
import shimano from "../images/shimano.png"


function LogoList(){
    return(
        <div className="container">
        <div className="row">
           <div className="col">
              <h3 className="text-center pt-4 pb-2">Huippumerkit</h3>
           <ul className="logo-ul">
              <li><img className="logo"  src={cannondale} alt="cannondale logo"></img></li>
              <li><img className="logo"  src={cube} alt="cube logo"></img></li>
              <li><img className="logo"  src={haibike} alt="haibike logo"></img></li>
              <li><img className="logo"  src={orbea} alt="orbea logo"></img></li>
              <li><img className="logo"  src={schwalbe} alt="schwalbe logo"></img></li>
              <li><img className="logo"  src={shimano} alt="shimano logo"></img></li>
           </ul>
           </div>

        </div>

     </div>
    )
}
export default LogoList