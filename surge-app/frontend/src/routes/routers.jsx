import React from "react";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';
import LoginPage from "../pages/login/login";
import RegisterPage from "../pages/login/register";
import HomePage from "../pages/homePage/home";
import { Navigate } from 'react-router-dom';
import { useAuthContext } from "../hook/useAuthContext";

export default function Routers() {
    const { user } = useAuthContext()

    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={!user ? <LoginPage /> : <Navigate to="/home" />}> </Route>
            <Route path="/login" element={!user ? <LoginPage /> : <Navigate to="/home" />}> </Route>
            <Route path="/register" element={!user ? <RegisterPage /> : <Navigate to="/home" />}> </Route>
            <Route path="/home" element={ user ? <HomePage /> : <Navigate to="/login" /> }> </Route>
        </Routes>
           
        </BrowserRouter>
    );
}