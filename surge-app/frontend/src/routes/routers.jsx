import React from "react";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';
import LoginPage from "../pages/login/login";

export default function Routers() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/login" element={<LoginPage />}> </Route>

        </Routes>
           
        </BrowserRouter>
    );
}