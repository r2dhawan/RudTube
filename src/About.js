import React from "react";
import { Container, Typography } from "@mui/material";

const About = () => {
  return (
    <Container sx={{ marginTop: "60px", color: "#fff" }}>
      <Typography variant="h2" gutterBottom>
        About Us
      </Typography>
      <Typography>
        This is a YouTube clone application that is developed by Rudraksh Dhawan. It aims to provide a similar user
        experience to the original YouTube platform.
      </Typography>
    </Container>
  );
};

export default About;