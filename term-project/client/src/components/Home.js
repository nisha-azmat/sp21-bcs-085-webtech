import React from 'react';

import './App.css';
import {Link} from "react-router-dom"
function Home() {
  return (
    <div className="all-content">
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
          <Link href="/">
            <div className="container">
              <img src="./images/img13.png" alt="Cold Coffee" className="image" />
              <div className="overlay">
                <div className="text">Cold Coffee</div>
              </div>
            </div>
          </Link>
        </div>
        <div className="column">
          <Link href="#">
            <div className="container">
              <img src="./images/img14.png" alt="Desserts" className="image" />
              <div className="overlay">
                <div className="text">Desserts</div>
              </div>
            </div>
          </Link>
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
    </div>
  );
}

export default Home;
