import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div>
      <div className="open">
        <h1>Chat With Us</h1>
        <h2>Get In Touch</h2>
      </div>

      <div className="contact-section">
        {/* Contact Form */}
        <div className="input">
          <label htmlFor="fname">Full Name</label> <br />
          <input type="text" placeholder="Full Name" id="fname" /> <br />
          <br />
          <label htmlFor="email">Email</label> <br />
          <input type="email" placeholder="Email Address" id="email" /> <br />
          <br />
          <label htmlFor="phone">Phone Number</label> <br />
          <input type="text" placeholder="Phone #" id="phone" /> <br />
          <br />
          <label htmlFor="message">Message</label>
          <br />
          <textarea id="message" placeholder="Say hello to us"></textarea>
          <br />
          <div className="btn">
            <button>Send Message</button>
          </div>
        </div>

        {/* Contact Info + Map */}
        <div className="contact-info">
          <h2>Contact Info</h2>
          <div className="contact-item">
            <h3>Address</h3>
            <p>123 Serynna Villa Road, Lagos, Nigeria</p>
          </div>

          <div className="contact-item">
            <h3>Phone</h3>
            <p>+234 812 345 6789</p>
          </div>

          <div className="contact-item">
            <h3>Email Us</h3>
            <p>info@serynnvilla.com</p>
          </div>

      
        </div>
      </div>
          {/* Google Map */}
          <div className="map-container">
            <iframe
              title="Serynna Villa Location"
              src="https://www.google.com/maps?q=123+Serynna+Villa+Road,+Lagos,+Nigeria&output=embed"
              width="100%"
              height="250"
              style={{ border: 0, borderRadius: "8px", marginTop: "15px" }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
    </div>
  );
}

export default Contact;
