import React, { useEffect } from 'react';
import $ from 'jquery'
import { Carousel } from 'react-bootstrap';
import wearplan from '../img/portfolio/wearplan.png';
import ieat from '../img/portfolio/ieat.png';
import nda from '../img/portfolio/nda.png';
import linkcollector from '../img/portfolio/linkcollector.png';
import doctoo from '../img/portfolio/doctoo.png';
//take data from json

const CarouselComponent = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img className="d-block w-100" src={wearplan} alt="First slide" />
                <Carousel.Caption>
                    <h3>WearPlan</h3>
                    <p>Shopping website</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img className="d-block w-100" src={ieat} alt="Second slide" />
                <Carousel.Caption>
                    <h3>iEat</h3>
                    <p>Restaraunt application</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img className="d-block w-100" src={linkcollector} alt="Third slide" />
                <Carousel.Caption>
                    <h3>LinkCollector</h3>
                    <p>Taking notes application</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img className="d-block w-100" src={doctoo} alt="Fourth slide" />
                <Carousel.Caption>
                    <h3>Doctoo</h3>
                    <p>Healthcare system website</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default CarouselComponent;
