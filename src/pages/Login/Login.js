import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const emailRef = useRef("");
    const passRef = useRef("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passRef.current.value;
        console.log(email, password);
    }

    const navigateRegister = e => {
        navigate('/register');
    }

    return (
        <div className="container w-50 mx-auto border rounded p-3 mt-3">
            <h2>Please Login</h2>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control  ref={emailRef} type="email" placeholder="Enter email" required/>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passRef} type="password" placeholder="Password" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button onClick={handleSubmit} variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <p className="mt-2">New to Car's Doctor? <br /> <span style={{cursor: "pointer"}} className="text-danger" onClick={navigateRegister}>Please Register</span></p>
        </div>
    );
};

export default Login;
