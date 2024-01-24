import React, { useEffect } from 'react';
import $ from 'jquery'
import { Carousel } from 'react-bootstrap';
import banner from '../img/portfolio/p1.jpg';
import banner2 from '../img/portfolio/p2.jpg';
import banner3 from '../img/portfolio/p3.jpg';

const CarouselComponent = () => {
    // useEffect(() => {
    //     $('#myCarousel').carousel({
    //         interval: 2000,
    //         pause: 'hover',
    //     });
    // }, []);

    return (
        <Carousel>
            <Carousel.Item>
                <img className="d-block w-100" src={banner} alt="First slide" />
                <Carousel.Caption>
                    <h3>Los Angeles</h3>
                    <p>LA is always so much fun!</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img className="d-block w-100" src={banner2} alt="Second slide" />
                <Carousel.Caption>
                    <h3>Chicago</h3>
                    <p>Thank you, Chicago!</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img className="d-block w-100" src={banner3} alt="Third slide" />
                <Carousel.Caption>
                    <h3>New York</h3>
                    <p>We love the Big Apple!</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default CarouselComponent;
