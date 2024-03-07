import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import '../App.css'; // Assuming you have custom styles for centering
import { useNavigate } from 'react-router-dom';

function Login(){
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    console.log(email,password);
    function submitHandler(){
        localStorage.setItem('isLoggedIn',true);
        navigate('/');
    }
    const navigate = useNavigate();
    useEffect(()=>{
        let isLogin = localStorage.getItem('isLoggedIn');
        console.log(isLogin);
        if(isLogin){
            navigate('/');
        }
    })
    return(
        <Container className="d-flex justify-content-center align-items-center"     >
            <div className="w-50">
                <h1>Login</h1>
                <Form onSubmit={submitHandler}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="float-start">Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label  className="float-start">Password</Form.Label>
                        <Form.Control type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3 float-start" controlId="formBasicCheckbox">
                        <Form.Check  type="checkbox" label="Check me out" />
                    </Form.Group >
                    <Button className="float-end" variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </Container>
    );
}

export default Login;
