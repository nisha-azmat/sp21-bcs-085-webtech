// Register.js
import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import axios from "axios"
import { url } from '../url';
import { Link } from 'react-router-dom';

const Register = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async(e) => {
    e.preventDefault();
    try {
        let data = {
            fullName,
            email,
            password
        }
        const res = await axios.post(`${url}/api/register`,data)
        alert(res.data.message)
        setEmail("")
        setFullName("")
        setPassword("")
    } catch (error) {
        alert(error.response.data.message)
    }
    console.log('Registering with:', fullName, email, password);
  };

  return (
    <Container className="mt-5">
      <h2 className="mb-4">Create Your Coffee Shop Account</h2>
      <Form onSubmit={handleRegister}>
        <Form.Group controlId="formBasicFullName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>
        <Link to="/login">
        Already have an account?
    </Link>
        <Button variant="primary" className='d-block' type="submit">
          Register
        </Button>
      </Form>
    </Container>
  );
};

export default Register;
