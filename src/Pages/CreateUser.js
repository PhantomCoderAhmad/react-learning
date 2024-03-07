import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function CreateUser(){
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    function submitHandler(e){
        e.preventDefault();
        axios.post("http://localhost:3011/users", { name, email })
        .then((response) => {
            console.log("user is added:", response.data);
            setName("");
            setEmail("");
            navigate('/users');
        })
        .catch((error) => {
            console.error("Error creating User:", error);
        });
        console.log(name,email);
    }
    return(
        <>
            <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "50vh" }}>
            <div className="w-50">
                <h1>Add New User</h1>
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
export default CreateUser;