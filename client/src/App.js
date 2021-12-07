import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Container } from "@mui/material/";

import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";

const App = () => {
  return (
    <BrowserRouter>
      <Container maxWidth="lg">
        <NavBar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/auth" exact element={<Auth />} />
        </Routes>
        {/* <Home /> */}
      </Container>
    </BrowserRouter>
  );
};

export default App;
