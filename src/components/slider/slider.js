import { useRef, useState, useEffect} from 'react';
import Card from '../card/card';
import "./slider.css"
import axios from "axios"
import uuid from 'react-uuid';

const URL = 'http://localhost/angularbikes/'

function Slider(props) {

    const ref = useRef();

    const [width, setWidth] = useState(0)
    const [scrollPosition, setScrollPosition] = useState(0)
    const [elementWidth, setElementWidth] = useState(0)
    const[products,setProducts]=useState([])
    const[isLoading,setIsLoading]=useState(true)


    useEffect(() => {
        axios.get(URL + "sliderProducts.php/?category="+ props.category)
            .then((response) => {
                const json = response.data
                setProducts(json)
                setIsLoading(false)
            }).catch(error => {
                console.log(error.response === undefined ? error : error.response.data.error)
                alert('Häiriö järjestelmässä, yritä kohta uudelleen!')
            })
    }, [])





//Haetaan scroll ja client width hetikun sivusto aukeaa

    useEffect(() => {
        if(isLoading===false){
        setScrollPosition(ref.current.scrollWidth);
        setElementWidth(ref.current.clientWidth)
    }
    }, [isLoading]);

   
// functio että saadaan jos elementti löytyy reffin kautta ja annetaan uusi width , jos muuttunut elementtin leveys. Samalla siirretään scrolli 0,0 ja laitetaan width 0
    const getListSize = () => {
        if(ref.current && ref.current.scrollWidth && ref.current.clientWidth){
            const newWidth = ref.current.clientWidth;
            setElementWidth(newWidth);
            ref.current.scrollTo(0, 0)
            setWidth(0)
          }
       
    }

// eventlistener laitettuna jos vaihtaa leveyttä.
    useEffect(() => {
        if(isLoading===false){
            window.addEventListener("resize", getListSize)
        }
       
        
    }, [isLoading])

// eventlistener kanssa elementin x scrollille ja laittaa myös kun ei tarvita niin sen pois.
    useEffect(() => {
        if(isLoading===false){
            const elementRef=ref.current
            elementRef.addEventListener('scroll', getScrollSize, { passive: true })
    
            return () => {
                elementRef.removeEventListener('scroll', getScrollSize)
            }
        }

    }, [isLoading])
// functio ,että saadaan uusi scrollin leveys
    const getScrollSize = () => {
        const newScrollSize = ref.current.scrollWidth;
        setScrollPosition(newScrollSize);
    };
// siirretään seuraavalle itemille sliderilla, ottaa huomioon elemententin leveyden.
    function next() {
        let add = 183.5
        let next = scrollPosition
        if(elementWidth < 250){
            add = 120
            next -= (add * 2)
        }
        else if (elementWidth < 450) {
            add = 140
            next -= (add * 3)
        } 
        else if(elementWidth < 500){
            add=165
            next -= (add * 3)
        }

        else if(elementWidth < 800){
            add=167.5
            next -= (add * 4)
        }
        else {
            next -= (add * 6)
        }
        if (width < next) {
            const newPos = width + add
            ref.current.scrollTo(newPos, 0)
            setWidth(prevWidth => prevWidth + add)
        }
    }

// menee taakse päin niin pitkälle ,että leveys on 0.    
    function prev() {
        let add = 183.5
        if(elementWidth < 250){
            add=120
        }
       else if (elementWidth < 450) {
            add = 140

        } 
        else if(elementWidth < 500){
            add=165
        }
        else if(elementWidth < 800){
            add=167.5
        }
        const prev = width - add
        if (prev >= 0) {
            ref.current.scrollTo(prev, 0)
            setWidth(prevWidth => prevWidth - add)
        }
    }
console.log(products)
 // for looppi card itemeille testaamista varten + array   
 if(isLoading){
    return (        
        <div >
            
        </div>  )
}
    return (    
            <div id="carouselExampleControls" className="carousel-slide py-3" data-bs-ride="carousel">
            <h3>{props.heading}</h3>
            <div className="carousel-inner" ref={ref}>
                {products?.map(product => <Card key={uuid()} product={product} width={120} height={120} />)}
            </div>
            <div className="button-container">
                <button onClick={prev} className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button onClick={next} className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Slider;