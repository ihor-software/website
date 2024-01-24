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

            <section class="services">
                <div class="services_inner">
                    <div class="container">
                    <h2> How can I help you?</h2>
                      <ul>
                          <li>Web Development</li>
                          <li>Mobile Development</li>
                          <li>Test Coverage</li>
                          <li>Project Support</li>
                          <li>Hosting Solutions</li>
                      </ul>
                    </div>
                </div>
              </section>
<br/>
            
            <section class="slider">
                <div class="slider_inner">
                    <div class="container">
                    <h2>My projects:</h2>
                    <CarouselComponent />
                    </div>
                  </div>
            </section>
<br/>
            <section class="aboutme">
                <div class="container">
                    <h2>About me:</h2>
                    <p>Hey, I'm Ihor, a seasoned web developer with expertise in crafting both websites and mobile applications. My professional journey has involved working with high-profile clients in diverse IT environments, where I've thrived under pressure and stringent deadlines, incorporating best coding practices gleaned from those experiences.

I have a robust background, having collaborated with a top-10 global IT company, contributing to the development of new features, enhancing authorization security, and conducting thorough testing. When engaged with clients, I approach projects with meticulous attention to detail, striving to deliver a product that surpasses expectations.

I believe in a friendly and professional collaboration, and I'm eager to discuss how I can contribute to the success of your project. Feel free to reach out, and let's embark on this journey together!</p>
                </div>
            </section>
<br/>
            
              <section class="value">
                <div class="container">
                    <h2>How I work:</h2>
              One of my key strengths lies in my commitment to high responsibility and maintaining a stable workflow. This dedication ensures a consistently smooth project development process and a reliable, predictable outcome. I prioritize transparent communication, fostering an open dialogue for negotiations before initiating any work. Additionally, I occasionally offer afterpay options, providing flexibility based on the satisfaction of the final result.
                </div>
             </section>
             <br/>
             <br/>
    <FooterComponent/>
        </div>
      );
}

export default HomePage;