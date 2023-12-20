import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Landing from './Landing';
import Account from './Account';
import Products from './Products';
import Menu from './Menu';
import Homepage from './Homepage';
import Login from './Login';
import Register from './Register';

const App = () => {
  const [user, setLoginUser] = useState({});

  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/account" element={<Account />} />
      <Route path="/products" element={<Products />} />
      <Route path="/home" element={<Landing />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/Homepage" element={<Homepage />} />
      <Route
        path="/Login"
        element={
          user && user._id ? <Homepage setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser} />
        }
      />
      <Route path="/Register" element={<Register />} />
      <Route path="/login" element={<Login setLoginUser={setLoginUser} />} />
    </Routes>
  );
};

export default App;
