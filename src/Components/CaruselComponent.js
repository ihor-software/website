import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import { Carousel } from 'react-bootstrap';
import wearplan from '../img/portfolio/wearplan.png';
import ieat from '../img/portfolio/ieat.png';
import nda from '../img/portfolio/nda.png';
import doctoo from '../img/portfolio/doctoo.png';
import rider from '../img/other/rider.gif';
import gas from '../img/other/accelerator.png';
import brake from '../img/other/brake.png';
import '../style/css/style.css'; // Ensure this path is correct

const slides = [wearplan, nda, doctoo];

const CarouselComponent = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    useEffect(() => {
        const progressWidth = (index / (slides.length - 1)) * 100;
        $('#progress-rider').css('left', `${progressWidth}%`);
    }, [index]);

    const handleNext = () => {
        const newIndex = (index + 1) % slides.length;
        setIndex(newIndex);
    };

    const handlePrev = () => {
        const newIndex = index === 0 ? slides.length - 1 : index - 1;
        setIndex(newIndex);
    };

    return (
        <div className="carousel-container">
            <button onClick={handlePrev} className="carousel-control-prev">
                <img src={brake} style={{ height: '80px' }} alt="Brake" />
            </button>
            <Carousel activeIndex={index} onSelect={handleSelect} controls={false} indicators={false} interval={null}>
                {slides.map((slide, idx) => (
                    <Carousel.Item key={idx} style={{ height: '500px', width: 'auto' }}>
                        <img className="d-block w-100" src={slide} alt={`Slide ${idx + 1}`} />
                    </Carousel.Item>
                ))}
            </Carousel>
            <button onClick={handleNext} className="carousel-control-next">
                <img src={gas} style={{ height: '80px' }} alt="Gas" />
            </button>
            <div className="progress-bar-container">
                <div className="progress-bar-background">
                    <img id="progress-rider" src={rider} alt='progress tracker' className="rider" />
                </div>
            </div>
        </div>
    );
};

export default CarouselComponent;




