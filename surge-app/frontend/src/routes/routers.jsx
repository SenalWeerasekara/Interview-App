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

export default function Routers() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/login" element={<LoginPage />}> </Route>
            <Route path="/register" element={<RegisterPage />}> </Route>
            <Route path="/showPost" element={<ShowPost />}> </Route>
            <Route path="/home" element={<HomePage />}> </Route>
            <Route path="/test" element={<PostBody />}> </Route>
            <Route path="/side" element={<SideBar />}> </Route>
            <Route path="/profile" element={<ProfilePage />}> </Route>
        </Routes>
           
        </BrowserRouter>
    );
}