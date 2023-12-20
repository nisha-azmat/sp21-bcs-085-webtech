import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { Link, useNavigate } from 'react-router-dom';
import { url } from '../url';

const Navbarr = () => {
  const navigate = useNavigate();
  // eslint-disable-next-line
  const [cookies, setCookie, removeCookie] = useCookies(['x-auth-token']);
  // eslint-disable-next-line
  const [user, setUser] = useState();

  useEffect(() => {
    const token = cookies['x-auth-token'];
    if (token) {
      axios.get(`${url}/api/verify`, {
        headers: {
          'x-auth-token': token
        }
      }).then(res => {
        setUser(res.data.user);
      }).catch(err => {
        removeCookie('x-auth-token');
        navigate('/login');
      })
    } else {
      navigate('/login');
    }
    //eslint-disable-next-line
  }, [cookies['x-auth-token']]);
  
  const handleLogout = ()=>{
    alert("Logout Successfully!")
    removeCookie('x-auth-token');
    navigate('/login');
    setUser(null)
  }
  return (
    <nav className="navbar navbar-expand-lg" id="navbar">
        <div className="container-fluid">
          <Link className="navbar-brand" href="/to" id="logo">
            <img src="./images/logo.png" alt="Coffee Shop Logo" />
          </Link>
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
              <Link className="nav-link" to="/">
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
              {user ? 
                <>
                  <li className="nav-item">
                  <Link className="nav-link" to="/account">
                  Account
                  </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" onClick={handleLogout}>
                    Logout
                    </Link>
                    </li>
                  </>
                  :
                  <li className="nav-item">
                  <Link className="nav-link" to="/login">
                  Login
                  </Link>
                  </li>
              }
              
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
  );
};

export default Navbarr;
