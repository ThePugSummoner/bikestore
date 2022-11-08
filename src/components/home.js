import React from "react"
import Card from "./card"
import ImageFrame from "./imagaFrame"

function Home(){

const array=[]

for(let i=0; i<10;i++){
   array.push(<li><Card/></li>)
}


    return(
       <main className="main">
         
        <ImageFrame />
        <div className="lista-test">
         <h1>Uutuudet</h1>   
        <ul>
         {array}
        </ul>
        </div> 
        <div className="lista-test">
         <h1>Maastopyörät</h1>   
        <ul>
         {array}
        </ul>
        </div> 
        <div className="lista-test">
         <h1>Hypdidipyörät</h1>   
        <ul>
         {array}
        </ul>
        </div> 
       </main>

        
    )
    
    }
    
    
    export default Home