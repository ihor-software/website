import React from 'react';
import '../style.css';
import djinni from '../img/social/djinni.png';
import freelancehunt from '../img/social/freelancehunt.png';
import github from '../img/social/github.png';
import linkedin from '../img/social/linkedin.png';
import mail from '../img/social/mail.png';
import telegram from '../img/social/telegram.png';
import upwork from '../img/social/upwork.png';

function FooterComponent() {
  return (
    <footer className="footer_area">


      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginBottom: '40px' }}>
        <hr style={{ width: '100%', margin: '20px 0' }} />

        <div className="socialSection" style={{ display: 'flex', flexWrap: 'wrap' }}>
          <a href="https://djinni.co/q/f7b529a123/"><img className="social-icon" src={djinni} alt="djinni" width={40} height={40} style={{ marginRight: '10px' }} /></a>
          <a href="https://freelancehunt.com/freelancer/vasilyev_.html"><img className="social-icon" src={freelancehunt} alt="freelancehunt" width={40} height={40} style={{ marginRight: '10px' }} /></a>
          <a href="https://www.upwork.com/freelancers/~01a81edf4c6ccf44a2"><img className="social-icon" src={upwork} alt="upwork" width={40} height={40} style={{ marginRight: '10px' }} /></a>
          < a href="https://www.linkedin.com/in/ihor-vasyliev-ios/"><img className="social-icon" src={linkedin} alt="linkedin" width={40} height={40} style={{ marginRight: '10px' }} /></a>
          <a href="https://github.com/ihor-software/portfolio"><img className="social-icon" src={github} alt="github" width={40} height={40} style={{ marginRight: '10px' }} /></a>
          <a href="https://t.me/vasillyev17"><img className="social-icon" src={telegram} alt="telegram" width={40} height={40} style={{ marginRight: '10px' }} /></a>
          <a href="mailto:ihor.software@gmail.com"><img className="social-icon" src={mail} alt="mail" width={40} height={40} /></a>
        </div>

        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px', padding: '0' }}>

          <div className='copyrightText'>
            <span>© 2024 Ihor Vasyliev software development & services</span>
          </div>

          <div className='footer-links' style={{ display: 'flex', marginLeft: 'auto' }}>
            <a className='footer-link' style={{ marginRight: '5px' }}>Privacy</a>
            <span className='footer-link-separator'>|</span>
            <a className='footer-link' style={{ marginLeft: '5px' }}>Contact</a>
          </div>

        </div>

      </div>

    </footer>


  );
}

export default FooterComponent;