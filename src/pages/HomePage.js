import React from 'react';
import '../style/css/style.css';
import '../style/css/bootstrap.css';
import FooterComponent from '../Components/FooterComponent';
import image from '../img/about-us.png';

import CarouselComponent from '../Components/CaruselComponent';

function HomePage() {
    return (
            <div className="HomePage">
                {/* Start Header Area */}
                <section class="home_banner_area">
                <div class="banner_inner">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-7">
                                <div class="banner_content">
                                    <h3 class="text-uppercase">Hell0</h3>
                                    <h1 class="text-uppercase">I am Ihor Vasyliev</h1>
                                    <h5 class="text-uppercase">Web Developer</h5>
                                    <div class="d-flex align-items-center">
                                        <a type="button" class="btn btn-primary" href="/contacts"><span>Hire Me</span></a>
                                        <a type="button" class="btn btn-primary" href="/cv"><span>Get CV</span></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-5">
                                <div class="home_right_img">
                                    <img class="" src={image} alt="" width="400" height="400"></img>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="slider">
                <div class="slider_inner">
                    <div class="container">
                    <h2>My projects:</h2>
                    <CarouselComponent />
                    </div>
                  </div>
            </section>

            <section class="services">
                <div class="services_inner">
                    <div class="container">
                    <h2> How can I help you?</h2>
                      <ul>
                          <li>working with React, Angular</li>
                          <li>working with api/json, parsing data</li>
                          <li>sending & recieving requests to database</li>
                          <li>develop and debug web applications</li>
                      </ul>
                    </div>
                </div>
              </section>
            
    
    <FooterComponent/>
        </div>
      );
}

export default HomePage;