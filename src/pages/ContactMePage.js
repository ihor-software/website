//linkedin
//email
//telegram mesanger
import React, { useState } from 'react';
import image from '../img/contact.jpg';
import FooterComponent from '../Components/FooterComponent';


function ContactMePage() {
    return (
<div className="container">        

<div className="row" style={{justifyContent: 'center', marginTop: '40px'}}>
            <div className="home_right_img">
              <img className="" src={image} alt="Contact" />
          </div>

            <div class="col-lg-9" style={{ width: '100%', maxWidth: '30em', padding: '0 20px' }}>
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
      <div style={{ flex: 1 }}></div> {/* Empty div to take up remaining vertical space */}
      <FooterComponent />
    </div>
  );
}

export default ContactMePage;   




       
          