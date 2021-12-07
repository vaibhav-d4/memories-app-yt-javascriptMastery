import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Container } from "@mui/material/";
import { ThemeProvider, createMuiTheme } from "@mui/material/styles";

import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";

const App = () => {
  const theme = createMuiTheme();
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Container maxWidth="lg">
          <NavBar />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/auth" exact element={<Auth />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
