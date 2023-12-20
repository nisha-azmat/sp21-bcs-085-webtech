// Login.js
import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {useCookies} from "react-cookie"
import { url } from '../url';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cookies, setCookie] = useCookies(['x-auth-token']);
    const navigate = useNavigate()

    const handleLogin = async(e) => {
        e.preventDefault();
        try {
            let data = {
                email,
                password
            }
            const res = await axios.post(`${url}/api/login`,data)
            alert("Login Successfully!")
            setCookie('x-auth-token', res?.data?.token, {
                path: '/',
                maxAge: 60 * 60 * 24,
                sameSite: true,
            });
            setEmail("")
            setPassword("")
        navigate("/")
        } catch (error) {
            alert(error.response.data.message)
        }
    };

    return (
        <Container className="mt-5">
            <h2 className="mb-4">Login to Your Coffee Shop Account</h2>
            <Form onSubmit={handleLogin}>
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

                <Link to="/register">
                    Don't have an account?
                </Link>

                <Button variant="primary" type="submit" className='d-block'>
                    Login
                </Button>
            </Form>
        </Container>
    );
};

export default Login;
