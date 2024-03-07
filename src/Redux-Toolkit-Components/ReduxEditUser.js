import { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useParams, useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearEditUserId, getUserDetail,setEditUserId, updateUser } from "../redux/usersSlice";
function ReduxEditUser(){
    const params = useParams();
    const navigate = useNavigate();
    const id = params.id;
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const dispatch = useDispatch();
    const {userDetail} = useSelector((state)=> state.users);
    useEffect(() => {
        dispatch(setEditUserId(id));
        dispatch(getUserDetail(id));
    }, [dispatch]);
    useEffect(() => {
        setName(userDetail.name || "");
        setEmail(userDetail.email || "");
    }, [userDetail]);

    function submitHandler(e){
        e.preventDefault();
        dispatch(updateUser({ name, email })).then(() => {
            console.log("user is Updated using redux successfully");
            dispatch(clearEditUserId());
            setName("");
            setEmail("");
            navigate('/redux-users'); // Navigate to the home page or another page after successful submission
        });
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
export default ReduxEditUser;