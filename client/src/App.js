import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { Container } from "@mui/material/";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import PostDetails from "./components/PostDetails/PostDetails";

const App = () => {
  const theme = createTheme();

  const user = JSON.parse(localStorage.getItem("profile"));

  const handleAuthPageRender = () => {
    if (user) {
      return <Navigate to="/posts" />;
    } else {
      return <Auth />;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Container maxWidth="xl">
          <NavBar />
          <Routes>
            <Route path="/" exact element={<Navigate to="/posts" />} />
            <Route path="/posts" exact element={<Home />} />
            <Route path="/posts/search" exact element={<Home />} />
            <Route path="/posts/:id" exact element={<PostDetails />} />
            <Route path="/auth" exact element={handleAuthPageRender()} />
          </Routes>
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
