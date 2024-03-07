import { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useParams, useNavigate} from "react-router-dom";
import axios from "axios";
function EditUser(){
    const params = useParams();
    const navigate = useNavigate();
    const id = params.id;
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    useEffect(()=> {
        axios.get(`http://localhost:3011/users/${id}`)
        .then((response)=>{
            setName(response.data.name);
            setEmail(response.data.email);
        });
    },[id])
    function submitHandler(e){
        e.preventDefault();
        axios.put(`http://localhost:3011/users/${id}`, { name, email })
        .then((response) => {
            console.log("user is updated successfully:", response.data);
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
                <h1>Update  User</h1>
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
                        Update
                    </Button>
                </Form>
            </div>
        </Container>
        </>
    )
}
export default EditUser;