import React from "react";
import { Stack, Button } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import { SearchBar } from "./";

const Navbar = ({ darkMode, handleDarkModeToggle }) => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      position: "sticky",
      background: darkMode ? "#121212" : "#fff", 
      top: 0,
      justifyContent: "space-between",
    }}
  >
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={45} />
    </Link>
    <Stack direction="row" gap={2}>
      <Button component={Link} to="/" color="primary" variant="contained">
        Home
      </Button>
      <Button
        component={Link}
        to="/contact"
        color="secondary"
        variant="contained"
      >
        Contact Us
      </Button>
      <Button component={Link} to="/about" color="primary" variant="contained">
        About
      </Button>
      <Button variant="outlined" color="primary" onClick={handleDarkModeToggle}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </Button>
    </Stack>
    <SearchBar />
  </Stack>
);

export default Navbar;
