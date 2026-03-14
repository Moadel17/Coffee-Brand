import React from "react";
import "./Footer.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo & Description */}
        <div className="footer-brand">
          <h2>Bellesmo</h2>
          <p>The Place That You Are Need.</p>
        </div>

        {/* Links */}
        <div className="footer-links">
          <div className="link-group">
            <h3>روابط</h3>
            <a href="#">الرئيسية</a>
            <a href="#">خدماتنا</a>
            <a href="#">من نحن</a>
            <a href="#">تواصل معنا</a>
          </div>

          <div className="link-group">
            <h3>تابعنا</h3>
            <div className="social-icons">
              <a href="#">
                <FaFacebookF />
              </a>
              <a href="#">
                <FaTwitter />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
              <a href="#">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Bellesmo. جميع الحقوق محفوظة.</p>
      </div>
    </footer>
  );
};

export default Footer;
