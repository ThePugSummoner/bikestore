import { useRef, useState, useEffect } from 'react';
import Card from './card';


function Slider() {

    const ref = useRef(null);

    const [width, setWidth] = useState(0);
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        setScrollPosition(ref.current.scrollWidth);
    }, []);

    function next() {
        const add = 175
        let next = scrollPosition
        if (window.innerWidth < 550) {
            next -= 320
        } else {
            next -= 1200
        }
        if (width < next) {
            const newPos = width + add
            ref.current.scrollTo(newPos, 0)
            setWidth(prevWidth => prevWidth + add)
        }
    }
    function prev() {
        const add = 175
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