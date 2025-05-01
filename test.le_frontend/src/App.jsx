import React, {Component} from 'react';
import InputPractice from "./components/InputPractice.jsx";
import ToDoList from "./components/ToDoList.jsx";
import Navbar from "./components/GameElements/Navbar.jsx";
import HomePage from "./Pages/HomePage.jsx";
import {Route,createBrowserRouter, createRoutesFromElements, RouterProvider} from "react-router-dom";
import MainLayout from "./Layouts/MainLayout.jsx";
import AboutPage from "./Pages/AboutPage.jsx";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<MainLayout />}>
            <Route index element = {<HomePage/>} />
            <Route path='/about' element={<AboutPage/>} />
        </Route>
    )
);
function App(){
     return (
                <RouterProvider router = {router} />

        );
}

export default App;