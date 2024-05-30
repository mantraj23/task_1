import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "../components_css/navbar.css";
import icon from "./spoicon.ico";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className="topbar">
        <Toolbar className="toolb">
          <div className="logo">
            <img src={icon} className="iconspo" />
          </div>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Students' Placement Office
          </Typography>

          <Button className="contactb" color="inherit">Contact Us</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
