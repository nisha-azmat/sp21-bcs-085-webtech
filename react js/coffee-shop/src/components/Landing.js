/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';


import './App.css';
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <div className="all-content">
      <nav className="navbar navbar-expand-lg" id="navbar">
        <div className="container-fluid">
          <a className="navbar-brand" href="#" id="logo">
            <img src="./images/logo.png" alt="Coffee Shop Logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span>
              <i className="fa-solid fa-bars" style={{ color: 'white', fontSize: '23px' }}></i>
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
              <Link className="nav-link" to="/Landing.js">
              Home
            </Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/Menu">
              Menu
            </Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/Products">
              Product
            </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Account">
                  Account
                </Link>
              </li>
            </ul>
            <div className="searchBox">
              <input className="searchInput" type="text" name="" placeholder="search" />
              <button className="searchButton" href="#">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <section id="home">
        <div className="content">
          <h3>Start Your Day With a <br /> Fresh Coffee</h3>
          <button id="btn">Shop Now</button>
        </div>
      </section>

      <div className="heading3">Categories</div>
      <div className="row">
        <div className="column">
          <a href="#">
            <div className="container">
              <img src="./images/img12.png" alt="Hot Coffee" className="image" />
              <div className="overlay">
                <div className="text">Hot Coffee</div>
              </div>
            </div>
          </a>
        </div>
        <div className="column">
          <a href="#">
            <div className="container">
              <img src="./images/img13.png" alt="Cold Coffee" className="image" />
              <div className="overlay">
                <div className="text">Cold Coffee</div>
              </div>
            </div>
          </a>
        </div>
        <div className="column">
          <a href="#">
            <div className="container">
              <img src="./images/img14.png" alt="Desserts" className="image" />
              <div className="overlay">
                <div className="text">Desserts</div>
              </div>
            </div>
          </a>
        </div>
      </div>

      <section className="menu" id="menu">
        <div className="container">
          <div className="heading3">Menu</div>
        </div>
        <div className="container" id="container2">
          <div className="row">
            <div className="col-md-3 py-3 py-md-0">
              <div className="card">
                <img src="./images/img17.png" alt="Latte" />
                <div className="card-body">
                  <h3>Latte</h3>
                  <p>$99 <span><i className="fa-solid fa-cart-shopping"></i></span></p>
                </div>
              </div>
            </div>
            <div className="col-md-3 py-3 py-md-0">
              <div className="card">
                <img src="./images/img16.png" alt="Americano" />
                <div className="card-body">
                  <h3>Americano</h3>
                  <p>$90 <span><i className="fa-solid fa-cart-shopping"></i></span></p>
                </div>
              </div>
            </div>
            <div className="col-md-3 py-3 py-md-0">
              <div className="card">
                <img src="./images/img19.png" alt="Mocha" />
                <div className="card-body">
                  <h3>Mocha</h3>
                  <p>$100 <span><i className="fa-solid fa-cart-shopping"></i></span></p>
                </div>
              </div>
            </div>
            <div className="col-md-3 py-3 py-md-0">
              <div className="card">
                <img src="./images/img18.png" alt="White Mocha" />
                <div className="card-body">
                  <h3>White Mocha</h3>
                  <p>$120 <span><i className="fa-solid fa-cart-shopping"></i></span></p>
                </div>
              </div>
            </div>
          </div>
          <div className="row" style={{ marginTop: '50px' }}>
            <div className="col-md-3 py-3 py-md-0">
              <div className="card">
                <img src="./images/img20.png" alt="Muffin" />
                <div className="card-body">
                  <h3>Muffin</h3>
                  <p>$200 <span><i className="fa-solid fa-cart-shopping"></i></span></p>
                </div>
              </div>
            </div>
            <div className="col-md-3 py-3 py-md-0">
              <div className="card">
                <img src="./images/img23.png" alt="Croissant" />
                <div className="card-body">
                  <h3>Croissant</h3>
                  <p>$30 <span><i className="fa-solid fa-cart-shopping"></i></span></p>
                </div>
              </div>
            </div>
            <div className="col-md-3 py-3 py-md-0">
              <div className="card">
                <img src="./images/img22.png" alt="Cheese Cake" />
                <div className="card-body">
                  <h3>Cheese Cake</h3>
                  <p>$100 <span><i className="fa-solid fa-cart-shopping"></i></span></p>
                </div>
              </div>
            </div>
            <div className="col-md-3 py-3 py-md-0">
              <div className="card">
                <img src="./images/img21.png" alt="Cookies" />
                <div className="card-body">
                  <h3>Cookies</h3>
                  <p>$120 <span><i className="fa-solid fa-cart-shopping"></i></span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer id="footer">
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
    </div>
  );
}

export default Landing;
/* eslint-enable jsx-a11y/anchor-is-valid */
