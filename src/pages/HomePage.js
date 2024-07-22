import React from 'react';
import '../style/css/style.css';
import '../style/css/bootstrap.css';
import FooterComponent from '../Components/FooterComponent';
import avatar from '../img/about-us.png';
import rider from '../img/other/rider.gif';
import workout from '../img/other/workout.gif';
import work from '../img/other/work.gif';
import doctoo from '../img/portfolio/doctoo.png';
import wearplan from '../img/portfolio/wearplan.png';
import scantechnic from '../img/portfolio/scantechnic.png';
import ServicesComponent from '../Components/ServicesComponent';
import TechnologiesComponent from '../Components/TechnologiesComponent';
import PolaroidComponent from '../Components/PolaroidComponent';

function HomePage() {
    const technologies = [
        'C# / .Net Core /ASP.NET',
        'SQL, SQL Query, PostgreSQL, MSSQL, MySQL',
        'Firebase, Git, C++',
        'React, Angular, TypeScript, JavaScript',
        'PHP, HTML, CSS, SCSS, Bootstrap, NodeJS, Express, NestJS',
        'REST, Swagger, Redux, Tailwind, Storybook',
        'Chromatic, RabbitMQ, JWT, Sequelize, Redis',
        'Docker, Objective-C, Swift, SQLite, CoreData',
        'Android, Unit Testing, UI Testing, Jest, Selenium',
        'Test Automation, Logger, Big O, MVC, MVVM, VIPER',
        'Python, Flask, ScikitLearn, Arduino, IoT',
        'Big Data, Observer, Reactive Programming, Jenkins'
    ];

    const projects = [
        { url: wearplan, title: 'Wearplan', date: '2024-07-01' },
        { url: doctoo, title: 'Doctoo', date: '2024-07-02' },
        { url: scantechnic, title: 'Scantechnic', date: '2024-07-03' },
    ];

    return (
        <div className="HomePage">
            <section className="home_info_area">
                <div className="banner_inner">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7">
                                <div className="banner_content">
                                    <h3 className="text-uppercase">Hello</h3>
                                    <h1 className="text-uppercase">I am Ihor Vasyliev</h1>
                                    <h5 className="text-uppercase">software engineer</h5>
                                    <div className="d-flex align-items-center">
                                        <a type="button" className="btn btn-primary" href="mailto:ihor-software@gmail.com"><span>Email Me</span></a>
                                        <a type="button" className="btn btn-primary" href="/cv"><span>Get CV</span></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="home_right_img">
                                    <img src={avatar} alt="" width="400" height="400" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="home_info_area">
                <div className="banner_inner">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="home_right_img">
                                    <img src={rider} alt="" width="400" height="300" />
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="services_box">
                                    <h3 className="text-uppercase">My Services</h3>
                                    <h5 className="text-uppercase">
                                        <ServicesComponent />
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="home_info_area">
                <div className="banner_inner">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="tech_stack">
                                    <h3 className="text-uppercase">My Skills</h3>
                                    <h5 className="text-uppercase">
                                        <TechnologiesComponent technologies={technologies} />
                                    </h5>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="home_right_img">
                                    <img src={workout} alt="" width="400" height="400" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="home_info_area">
                <div className="banner_inner">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="home_right_img">
                                    <img src={work} alt="" width="500" height="500" />
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="services_box">
                                    <h3 className="text-uppercase" style={{ textAlign: 'center', padding: '20px' }}>Past Projects</h3>
                                    <PolaroidComponent photos={projects} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <br />
            <br />
            <FooterComponent />
        </div>
    );
}

export default HomePage;