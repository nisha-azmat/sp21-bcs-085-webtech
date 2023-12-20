// Account.js
import React, { useEffect, useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { url } from '../url';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import {useNavigate} from "react-router-dom"

const Account = () => {
    const [fullName, setFullName] = useState('John Doe');
    const [email, setEmail] = useState('john@example.com');
    const [password, setPassword] = useState();
    const [newPassword, setNewPassword] = useState('');
    const navigate = useNavigate();
  // eslint-disable-next-line
  const [cookies, setCookie, removeCookie] = useCookies(['x-auth-admin']);

    useEffect(() => {
        const token = cookies['x-auth-token'];
        if (token) {
          axios.get(`${url}/api/verify`, {
            headers: {
              'x-auth-token': token
            }
          }).then(res => {
            console.log(res)
            setEmail(res.data.user.email)
            setFullName(res.data.user.fullName)
          }).catch(err => {
            removeCookie('x-auth-token');
            navigate('/login');
          })
        } else {
          navigate('/login');
        }
        //eslint-disable-next-line
      }, [cookies['x-auth-token']]);

    const handleUpdateProfile = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.put(`${url}/api/update-profile`, { email, fullName }, {
                headers: {
                    'x-auth-token': cookies['x-auth-token']
                }
            })
            alert(res.data.message)
        } catch (error) {
            console.log(error)
        }
    };

    const handleChangePassword = async(e) => {
        e.preventDefault();
        try {
            const res = await axios.put(`${url}/api/update-password`, { password, newPassword }, {
                headers: {
                    'x-auth-token': cookies['x-auth-token']
                }
            })
            alert(res.data.message)
            console.log('Changing password with:', newPassword);
        } catch (error) {
            alert(error.response.data.message)
        }
    };

    return (
        <Container className="mt-5">
            <h2 className="mb-4">Account Information</h2>

            <Form onSubmit={handleUpdateProfile}>
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

                <Button variant="primary" type="submit">
                    Update Profile
                </Button>
            </Form>

            <hr className="my-4" />

            <h2 className="mb-4">Change Password</h2>

            <Form onSubmit={handleChangePassword}>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Current Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Enter current password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="formBasicNewPassword">
                    <Form.Label>New Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Enter new password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        required
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Change Password
                </Button>
            </Form>
        </Container>
    );
};

export default Account;
