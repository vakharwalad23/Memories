import React from "react";
import { Container } from '@material-ui/core';
import { BrowserRouter, Routes, Route, Navigate  } from 'react-router-dom';

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import PostDetails from "./components/PostDetails/PostDetails"

const App = () => {
    const user = JSON.parse(localStorage.getItem('profile'));
    return (
        <BrowserRouter>
            <Container maxWidth="xl">
                <Navbar />
                <Routes>
                    <Route exact path="/" element={<Navigate replace  to="/posts" />}></Route>
                    <Route path="/posts" exact element={<Home />} />
                    <Route path="/posts/search" exact element={<Home />} />
                    <Route path="/posts/:id" element={<PostDetails />} />
                    <Route exact path="/auth" element={(!user ? <Auth /> : <Navigate replace to="/posts" />)}></Route>
                </Routes>
            </Container>
        </BrowserRouter>
    )
}

export default App;