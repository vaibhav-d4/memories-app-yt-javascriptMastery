import React from "react";

import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
} from "@mui/material";

import useStyles from "./styles";

const Auth = () => {
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}></Paper>
    </Container>
  );
};

export default Auth;
