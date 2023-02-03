import React from "react";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';
import LoginPage from "../pages/login/login";
import RegisterPage from "../pages/login/register";
import ShowPost from "../pages/showPost/showPosts";
import HomePage from "../pages/homePage/home";

export default function Routers() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/login" element={<LoginPage />}> </Route>
            <Route path="/register" element={<RegisterPage />}> </Route>
            <Route path="/showPost" element={<ShowPost />}> </Route>
            <Route path="/home" element={<HomePage />}> </Route>
        </Routes>
           
        </BrowserRouter>
    );
}