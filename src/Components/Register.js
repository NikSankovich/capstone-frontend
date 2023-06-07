import axios from "axios"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Container } from "@mui/material";
import "../Style/register.css"
import { Link } from 'react-router-dom'


const Register = () => {
    const navigate = useNavigate();


    const [state, setState] = useState({
        username: "",
        password: "",
        fullName: ""
    });

    const handleTextChange = (e) => {
        // const { username, password, fullName, value } = e.target;
        const newRegistration = { ...state }
        newRegistration[e.target.name] = e.target.value;
        setState(newRegistration);

        // setState((prevState) => {
        //   return {
        //     ...prevState,
        //     username: e.target.name,
        //     password: e.target.value,
        //     fullName: e.target.value,
        //   };
        // });
    };

    const handleRegistration = (e) => {

        e.preventDefault();
        // set cookie here
        // set loggedIn = true and max-age = 60*1000 (one minute)
        axios.post("http://localhost:4002/register", {
            username: state.username,
            password: state.password,
            fullName: state.fullName
        })

        // axios.post("http://localhost:4002/register", {
        //     username: 
        // })
        navigate("/dashboard");
    }
    return (
        <div className="Register" >
            Register
            <Container maxWidth="sm">
                <form className="register-form" onSubmit={handleRegistration}>
                    <TextField
                        required
                        onChange={handleTextChange}
                        value={state.username}
                        name="username"
                        label="Username"
                        type="text"
                    />
                    <TextField
                        required
                        onChange={handleTextChange}
                        value={state.password}
                        name="password"
                        label="Password"
                        type="password"
                    />
                    <TextField
                        required
                        onChange={handleTextChange}
                        value={state.fullName}
                        name="fullName"
                        label="Full Name"
                        type="text"
                    />
                    <Button
                        type="submit"
                        className="register-button"
                        variant="contained"
                        color="primary"
                    >
                        Register
                    </Button>
                </form>
            </Container>
            <Link to="/" >Return to Homepage</Link>

        </div>
    )
}

export default Register;
