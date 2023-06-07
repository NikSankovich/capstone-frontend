import React from 'react'
import { Routes, Route, Navigate } from 'react-router'
import cookie from 'cookie'
// import Home from './components/Home'
import Login from './Components/Login'
import Register from './Components/Register'
import Home from './Components/Home'
import Dashboard from './Components/Dashboard'




const checkAuth = (props) => {
    const cookies = cookie.parse(document.cookie)
    return cookies["loggedin"] ? true : false

}


const ProtectedRoute = (props) => {
    const { component: Component } = props

    return checkAuth() === true ? <Component /> : <Navigate to="/login" />
}

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />    
        </Routes>
    );
};

export default Router;