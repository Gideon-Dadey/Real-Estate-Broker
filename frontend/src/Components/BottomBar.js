import React from "react";
import "./BottomBar.css";
import {
  Facebook as FacebookIcon,
  Email as EmailIcon,
  Telegram as TelegramIcon,
  Phone as PhoneIcon,
  Person as PersonIcon,
  LocationOn as LocationOnIcon,
} from "@material-ui/icons";

function BottomBar() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-container">
        <section className="footer-section" aria-labelledby="about-heading">
          <h3 id="about-heading">About Us</h3>
          <div className="info">
            <PersonIcon className="footer-icon" />
            <span>Abizi Properties</span>
          </div>
          <div className="info">
            <LocationOnIcon className="footer-icon" />
            <address>Afienya, Tema, Ghana</address>
          </div>
        </section>

        <section className="footer-section" aria-labelledby="contact-heading">
          <h3 id="contact-heading">Contact Us</h3>
          <div className="info">
            <PhoneIcon className="footer-icon" />
            <a href="tel:+233591191153">+233 591 191 153</a>
          </div>
          <div className="info">
            <EmailIcon className="footer-icon" />
            <a href="mailto:abiziproperties@gmail.com">
              abiziproperties@gmail.com
            </a>
          </div>
        </section>

        {/* Social Media Section */}
        <section className="footer-section" aria-labelledby="follow-heading">
          <h3 id="follow-heading">Follow Us</h3>
          <div className="social-icons" role="navigation" aria-label="Social media links">
            <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FacebookIcon className="icon" />
            </a>
            <a href="mailto:abiziproperties@gmail.com" aria-label="Email">
              <EmailIcon className="icon" />
            </a>
            <a href="https://telegram.org/" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
              <TelegramIcon className="icon" />
            </a>
          </div>
        </section>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; {currentYear} Abizi Properties. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default BottomBar;
