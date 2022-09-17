import React from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

const Register = () => {
    const navigate = useNavigate();
    const handleRegister = e => {
        e.preventDefault();
        console.log(e.target.email.value);
    }
    const navigateToLogin = (e) => {
        navigate("/login");
    };
    return (
        <div className="register">
            <form onSubmit={handleRegister}>
                <h2 className="text-primary">Please register.</h2>
                <label>Name: </label>
                <input className="mx-2" type="text" placeholder="Your Name" name="name" />
                <br /><br />
                <label>Email: </label>
                <input className="mx-2" name="email" placeholder="Your Email" type="text" />
                <br /><br />
                <label>Password: </label>
                <input className="mx-2" name="password" placeholder="Your Password"  type="password" />
                <br />
                <input className="mt-4 w-100 bg-primary rounded text-light border-0" type="submit" value="Register" />
            </form>
            <p className="text-center mt-3">Already have an account ?<br />
            <span style={{cursor: "pointer"}} className="text-primary" onClick={navigateToLogin}>Please login.</span></p>
        </div>
    );
};

export default Register;
