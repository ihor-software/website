//linkedin
//email
//telegram mesanger
import React, { useState } from 'react';


function ContactMePage() {
    return (
        <div class = 'contact_form' style={{marginTop: 10  + 'em', display: 'flex', justifyContent: 'center'}}>
             <section class="contact_area section_gap">
        <div class="container" style={{margin: '0 auto'}}>
            <div class="row">
                <div class="col-lg-3">
                    <div class="contact_info" style={{width: '20em'}}>
                        <div class="info_item">
                            <i class="lnr lnr-home"></i>
                            <h6>< a href = "https://www.linkedin.com/in/ihor-vasyliev-ios/">LinkedIn</a></h6>
                        </div>
                        <div class="info_item">
                        <i class="lnr lnr-home"></i>
                            <h6><a href="https://www.upwork.com/freelancers/~01a81edf4c6ccf44a2">Upwork</a></h6>
                        </div>
                        <div class="info_item">
                        <i class="lnr lnr-home"></i>
                       <h6><a href="https://freelancehunt.com/freelancer/vasilyev_.html">Freelancehunt</a></h6>
                        </div>
                        <div class="info_item">
                        <i class="lnr lnr-home"></i>
                        <h6><a href="https://djinni.co/q/f7b529a123/">Djinni</a></h6>
                        </div>
                        <div class="info_item">
                        <i class="lnr lnr-home"></i>
                         <h6><a href="https://github.com/vasillyev17">Github</a></h6>
                        </div>
                        <div class="info_item">
                        <i class="lnr lnr-home"></i>
                         <h6>Email</h6>
                            <p>vasilyev.igor18@gmail.com</p>
                        </div>
                        <div class="info_item">
                        <i class="lnr lnr-home"></i>
                         <h6>Telegram</h6>
                            <p>@vasillyev17</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-9" style={{width: '30em'}}>
                    <form class="row contact_form" action="contact_process.php" method="post" id="contactForm" novalidate="novalidate">
                        <div class="col-md-6">
                            <div class="form-group">
                                <input type="text" class="form-control" id="name" name="name" placeholder="Enter your name" />
                            </div>
                            <div class="form-group">
                                <input type="email" class="form-control" id="email" name="email" placeholder="Enter email address" />
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" id="subject" name="subject" placeholder="Enter Subject" />
                            </div>
                            <div class="form-group" >
                                <textarea class="form-control" name="message" id="message" rows="7" placeholder="Enter Message"></textarea>
                            </div>
                            <div class="col-md-12 text-right">
                            <button type="submit" value="submit" class="primary_btn">
                                <span>Send Message</span>
                            </button>
                        </div>
                        </div>
                       
                    </form>
                </div>
            </div>
            <div id="mapBox" class="mapBox" 
                data-lat="40.701083" 
                data-lon="-74.1522848" 
                data-zoom="13" 
                data-info="PO Box CT16122 Collins Street West, Victoria 8007, Australia."
                data-mlat="40.701083"
                data-mlon="-74.1522848">
            </div>
        </div>
    </section>
        </div>
        );
        }

        export default ContactMePage;