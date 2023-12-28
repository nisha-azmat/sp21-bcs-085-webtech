import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

// Import your components
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import Admin from './components/Admin';
import Product from './components/Product';



import { useCookies } from 'react-cookie';
import { url } from './url';
import axios from 'axios';
import Account from './components/Account';

function App() {
  const navigate = useNavigate();
  // eslint-disable-next-line
  const [cookies, setCookie, removeCookie] = useCookies(['x-auth-admin']);
  // eslint-disable-next-line
  const [user, setUser] = useState(null);

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
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/account" element={<Account />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/product" element={<Product />} />
        
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
