import React from "react";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';
import LoginPage from "../pages/login/login";
import RegisterPage from "../pages/login/register";
import ShowPost from "../pages/showPost/showPosts";
import HomePage from "../pages/homePage/home";
import PostBody from "../components/postBody";
import SideBar from "../components/sidebar";
import ProfilePage from "../pages/profile/profile";
import { Navigate } from 'react-router-dom';
import { useAuthContext } from "../hook/useAuthContext";

export default function Routers() {
    const { user } = useAuthContext()

    return (
        <BrowserRouter>
        <Routes>
            <Route path="/login" element={!user ? <LoginPage /> : <Navigate to="/home" />}> </Route>
            <Route path="/register" element={!user ? <RegisterPage /> : <Navigate to="/home" />}> </Route>
            <Route path="/home" element={ user ? <HomePage /> : <Navigate to="/login" /> }> </Route>
            
            <Route path="/showPost" element={<ShowPost />}> </Route>
            <Route path="/test" element={<PostBody />}> </Route>
            <Route path="/side" element={<SideBar />}> </Route>
            <Route path="/profile" element={<ProfilePage />}> </Route>
        </Routes>
           
        </BrowserRouter>
    );
}