import { useRef, useState, useEffect} from 'react';
import Card from '../card/card';
import "./slider.css"


function Slider() {

    const ref = useRef();

    const [width, setWidth] = useState(0)
    const [scrollPosition, setScrollPosition] = useState(0)
    const [elementWidth, setElementWidth] = useState(0)
//Haetaan scroll ja client width hetikun sivusto aukeaa
    useEffect(() => {
        setScrollPosition(ref.current.scrollWidth);
        setElementWidth(ref.current.clientWidth)
    }, []);

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
        window.addEventListener("resize", getListSize)
        
    }, [])

// eventlistener kanssa elementin x scrollille ja laittaa myös kun ei tarvita niin sen pois.
    useEffect(() => {
        const elementRef=ref.current
        elementRef.addEventListener('scroll', getScrollSize, { passive: true })

        return () => {
            elementRef.removeEventListener('scroll', getScrollSize)
        }
    }, [])
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

 // for looppi card itemeille testaamista varten + array   
    const cardElement = []
    for (let i = 0; i < 10; i++) {
        cardElement.push(<div key={i} className="carousel-item"><Card key={i} /></div>)
    }
    return (
        <div id="carouselExampleControls" className="carousel-slide" data-bs-ride="carousel">
            <h3>Aletuotteet</h3>
            <div className="carousel-inner" ref={ref}>
                {cardElement}
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