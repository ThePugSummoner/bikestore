import React from "react"
import Slider from "./slider"
import {useGetAllProductsQuery} from "../features/productsAPI";
import {useDispatch} from "react-redux";
import {addToCart} from "../features/cartSlice";



function Banner(){
   const {data, error, isLoading} = useGetAllProductsQuery();
       const dispatch = useDispatch();
   
      const handleAddToCart = (product) => {
         dispatch(addToCart(product));
      }
   
   return(
      <div className="container-fluid front min-vh-100">
         <div className="row">
            <div className="col-12 p-0 slider-container min-vh-100">
               <Slider/>
               <div className="home-container">
                  {isLoading? ( /* Tuotteet */
                  <p>Ladataan...</p>
                  ) : error? (
                  <p>Virhe tapahtui..</p>
                  ) : ( <div className="products">
                        {data?.map((product) => (
                           <div key={product.id} className="product">
                              <h3>{product.name}</h3>
                              <img src={product.image} alt={product.name}/>
                              <div className="details">
                                 <span>{product.desc}</span>
                                 <span className ="price">€{product.price}</span>
                              </div>
                              <button onClick={() => handleAddToCart(product)}>
                                 Lisää ostoskoriin
                              </button>
                           </div>
                        ))}
                     </div>
                  )};
               </div>
            </div>
         </div>
      </div>
   )
}

export default Banner