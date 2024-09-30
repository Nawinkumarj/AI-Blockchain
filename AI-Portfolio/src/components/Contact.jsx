import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-info">
        <h4>Talk to us</h4>
        <ul>
          <li>
            <i className="fas fa-map-marker-alt"></i> Chennai
          </li>
          <li>
            <i className="fas fa-envelope"></i> mail Address
          </li>
          <li>
            <i className="fas fa-phone"></i> 1234-567-890
          </li>
        </ul>
        <div className="social-icons">
          <i className="fab fa-facebook"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-pinterest"></i>
          <i className="fab fa-linkedin"></i>
        </div>
      </div>

      <div className="contact-form">
        <h1>Let's Work Together.</h1>
        <form>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="First Name" />
          </div>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Last Name" />
          </div>
          <div className="form-group">
            <input type="email" className="form-control" placeholder="Email Address" />
          </div>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Mobile Number" />
          </div>
          <div className="form-group">
            <textarea className="form-control" rows="4" placeholder="Write your message here..."></textarea>
          </div>
          <button type="submit" className="btn btn-send">Let's Connect</button>
        </form>
      </div>
    </div>
  );
}

export default Contact
