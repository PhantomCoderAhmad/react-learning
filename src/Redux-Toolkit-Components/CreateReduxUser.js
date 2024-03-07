import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {useDispatch } from "react-redux";
import { addUser } from "../redux/usersSlice";
function CreateReduxUser(){
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    function submitHandler(e){
        e.preventDefault();
        dispatch(addUser({ name, email })).then(() => {
            console.log("user is added using redux successfully");
            setName("");
            setEmail("");
            navigate('/redux-users'); // Navigate to the home page or another page after successful submission
        });
    }
    return(
        <>
            <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "50vh" }}>
            <div className="w-50">
                <h1>Add New User using Redux</h1>
                <Form onSubmit={submitHandler}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label className="float-start">Name:</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" value={name} onChange={(e)=>setName(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="float-start">Email: </Form.Label>
                        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    </Form.Group>
                    
                    <Button className="float-end" variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </Container>
        </>
    )
}
export default CreateReduxUser;