import { useRef, useState, useEffect} from 'react';
import Card from './card';


function Slider() {

    const ref = useRef();

    const [width, setWidth] = useState(0)
    const [scrollPosition, setScrollPosition] = useState(0)
    const [testi, setTesti] = useState(0)

    useEffect(() => {
        setScrollPosition(ref.current.scrollWidth);
        setTesti(ref.current.clientWidth)
    }, []);


    const getListSize = () => {
        if(ref.current && ref.current.scrollWidth && ref.current.clientWidth){
            const newWidth = ref.current.clientWidth;
            setTesti(newWidth);
            ref.current.scrollTo(0, 0)
            setWidth(0)
          }
       
    }


    useEffect(() => {
        window.addEventListener("resize", getListSize)
        
    }, [])


    useEffect(() => {
        const joku=ref.current
        joku.addEventListener('scroll', getScrollSize, { passive: true })

        return () => {
            joku.removeEventListener('scroll', getScrollSize)
        }
    }, [])

    const getScrollSize = () => {
        const newScrollSize = ref.current.scrollWidth;
        setScrollPosition(newScrollSize);
    };

    function next() {
        let add = 183.5
        let next = scrollPosition
        if(testi < 250){
            add = 120
            next -= (add * 2)
        }
        else if (testi < 450) {
            add = 140
            next -= (add * 3)
        } 
        else if(testi < 500){
            add=165
            next -= (add * 3)
        }

        else if(testi < 800){
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
    function prev() {
        let add = 183.5
        if(testi < 250){
            add=120
        }
       else if (testi < 450) {
            add = 140

        } 
        else if(testi < 500){
            add=165
        }
        else if(testi < 800){
            add=167.5
        }
        const prev = width - add
        if (prev >= 0) {
            ref.current.scrollTo(prev, 0)
            setWidth(prevWidth => prevWidth - add)
        }
    }
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