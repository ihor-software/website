import React from 'react';
import '../style.css'; 

function FooterComponent() {
    return (
<footer className="footer_area">
<div className="container">
  <div className="row justify-content-center">
    <div className="col-lg-12">
      <div className="footer_top flex-column">
        <div className="footer_logo">
          <a href="#">
            <h3>@vasillyev17</h3>
          </a>
          <h4>Follow Me</h4>
        </div>
        <div className="footer_social">
          {/* Your social media icons */}
          {/* Add appropriate links */}
          <a href="#"><i className="fa fa-facebook"></i></a>
          {/* Add other social media icons */}
          {/* ... */}
        </div>
      </div>
    </div>
  </div>
</div>
</footer>
    );
}

export default FooterComponent;