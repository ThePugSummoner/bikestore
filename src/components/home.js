import React from "react"
import Banner from "./banner"
import Card from "./card"
import ImageFrame from "./imagaFrame"
import LogoList from "./logolist"

function Home(){


    return(
       <main className="main">
         <Banner/>
         <LogoList/>
        <ImageFrame />
       </main>

        
    )
    
    }
    
    
    export default Home