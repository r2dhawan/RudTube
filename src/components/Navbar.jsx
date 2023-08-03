
// import React from "react";
// import { Stack, Button } from "@mui/material";
// import { Link } from "react-router-dom";

// import { logo } from "../utils/constants";
// import { SearchBar } from "./";

// const Navbar = ({ darkMode, handleDarkModeToggle }) => (
//   <Stack
//     direction="row"
//     alignItems="center"
//     p={2}
//     sx={{
//       position: "sticky",
//       background: darkMode ? "#121212" : "#f0f0f0", // Adjusted color value here
//       top: 0,
//       justifyContent: "space-between",
//       transition: "background-color 0.3s",
//     }}
//   >
//     <Link to="/" style={{ display: "flex", alignItems: "center" }}>
//       <img src={logo} alt="logo" height={45} />
//     </Link>
//     <Stack direction="row" gap={2}>
//       <Button component={Link} to="/" color="primary" variant="contained">
//         Home
//       </Button>
//       <Button
//         component={Link}
//         to="/contact"
//         color="secondary"
//         variant="contained"
//       >
//         Contact Us
//       </Button>
//       <Button component={Link} to="/about" color="primary" variant="contained">
//         About
//       </Button>
//     </Stack>
//     <Button onClick={handleDarkModeToggle} color="primary" variant="contained">
//       {darkMode ? "Light Mode" : "Dark Mode"}
//     </Button>
//     <SearchBar />
//   </Stack>
// );

// export default Navbar;


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
      background: darkMode ? "#121212" : "#fff", // Adjust background color for dark and light modes
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
