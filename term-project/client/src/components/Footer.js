// Footer.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer id="footer" className=''>
        <div className="social-links text-center">
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-facebook-f"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-youtube"></i>
          <i className="fa-brands fa-pinterest-p"></i>
        </div>
        <div className="credit text-center">
          Designed By <a href="#">coffee </a>
        </div>
        <div className="copyright text-center">
          &copy; Copyright <strong><span>Coffee Shop</span></strong>. All Rights Reserved
        </div>
      </footer>
  );
};

export default Footer;
