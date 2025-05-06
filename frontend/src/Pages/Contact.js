import React from "react";
import "./Contact.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import EmailIcon from "@material-ui/icons/Email";
import TelegramIcon from "@material-ui/icons/Telegram";

function Contact() {
  return (
    <section className="contact-container">
      <div className="contact-content">
        <header className="contact-header">
          <h1>Contact Us</h1>
          <p>
            We’d love to hear from you! Whether you have a question about properties, need help, or want to partner with us — feel free to reach out.
          </p>
        </header>

        <div className="contact-grid">
          <div className="contact-block">
            <h2>Phone</h2>
            <a href="tel:+233591191153" aria-label="Call us at +233 591 191 153">
              +233 591 191 153
            </a>
          </div>

          <div className="contact-block">
            <h2>Email</h2>
            <a href="mailto:abiziproperties@gmail.com" aria-label="Email us">
              abiziproperties@gmail.com
            </a>
          </div>

          <div className="contact-block">
            <h2>Address</h2>
            <address>
              Afienya, Block 25<br />
              Tema, Ghana
            </address>
          </div>

          <div className="contact-block">
            <h2>Follow Us</h2>
            <div className="social-links" aria-label="Social media links">
              <a href="https://facebook.com/abizi" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FacebookIcon className="icon" />
              </a>
              <a href="mailto:abiziproperties@gmail.com" aria-label="Email">
                <EmailIcon className="icon" />
              </a>
              <a href="https://telegram.org/abizi" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
                <TelegramIcon className="icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
