import React from 'react';
import image from '../img/contact.jpg';
import FooterComponent from '../Components/FooterComponent';

function ContactMePage() {
  return (
    <div className="container">
      <div className="row" style={{ justifyContent: 'center', marginTop: '40px' }}>
        <div className="contact_img">
          <img className="" src={image} alt="Contact" />
        </div>

        <div style={{ width: '100%', maxWidth: '30em', padding: '0 20px' }}>
          <form className="row contact_form" action="contact_process.php" method="post" id="contactForm" noValidate="novalidate">
            <div className="col-md-8">
              <div className="form-group">
                <input type="text" className="form-control" id="name" name="name" placeholder="Enter your name" />
              </div>
              <div className="form-group">
                <input type="email" className="form-control" id="email" name="email" placeholder="Enter email address" />
              </div>
              <div className="form-group">
                <input type="text" className="form-control" id="subject" name="subject" placeholder="Enter Subject" />
              </div>
              <div className="form-group">
                <textarea className="form-control" name="message" id="message" rows="7" placeholder="Enter Message"></textarea>
              </div>
              <div style={{ textAlign: 'right' }}>
                <button className="btn btn-success" type="submit" value="submit">
                  <span>Send Message</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div id="mapBox" className="mapBox"
        data-lat="40.701083"
        data-lon="-74.1522848"
        data-zoom="13"
        data-info="PO Box CT16122 Collins Street West, Victoria 8007, Australia."
        data-mlat="40.701083"
        data-mlon="-74.1522848">
      </div>
      <div style={{ flex: 1 }}></div>
      <FooterComponent />
    </div>
  );
}

export default ContactMePage;
