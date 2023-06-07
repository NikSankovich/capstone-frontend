import axios from "axios"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Container } from "@mui/material";
import "../Style/login.css"
import { Link } from 'react-router-dom'


const Login = () => {
    const navigate = useNavigate();


    const [state, setState] = useState({
        username: "",
        password: ""
    });

    const handleTextChange = (e) => {
        // const { username, password, fullName, value } = e.target;
        const newLogin = { ...state }
        newLogin[e.target.name] = e.target.value;
        setState(newLogin);

        // setState((prevState) => {
        //   return {
        //     ...prevState,
        //     username: e.target.name,
        //     password: e.target.value,
        //     fullName: e.target.value,
        //   };
        // });
    };

    const handleLogin = (e) => {

        e.preventDefault();
        // set cookie here
        // set loggedIn = true and max-age = 60*1000 (one minute)
        axios.post("http://localhost:4002/login", {
            username: state.username,
            password: state.password,
        }).then((response) => { console.log(response) })

        // axios.post("http://localhost:4002/register", {
        //     username: 
        // })
         navigate("/dashboard");
    }
    console.log(state);
    return (
        <div className="Login" >
            Login
            <Container maxWidth="sm">
                <form className="login-form" onSubmit={handleLogin}>
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
                    <Button
                        type="submit"
                        className="login-button"
                        variant="contained"
                        color="primary"
                    >
                        Login
                    </Button>
                </form>
            </Container>
            <Link to="/" >Return to Homepage</Link>

        </div>
    )
}

export default Login;
