import React from "react"
import Banner from "./banner/banner"
import ImageFrame from "./imagecategory/imageFrame"
import LogoList from "./logolist/logolist"

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