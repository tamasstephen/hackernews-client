import { Outlet } from "react-router-dom";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import { navItems } from "../../types/types";
import NavDrawer from "./NavDrawer";

export default function NavBar() {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }

  return (
    <>
      <div>
        <CssBaseline />
        <Box sx={{ display: "flex" }}>
          <AppBar component="nav">
            <Toolbar>
              <Typography
                variant="h1"
                component="div"
                sx={{ flexGrow: 1, fontSize: "1.25rem", fontWeight: "bold" }}
              >
                Hacker News
              </Typography>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: "none" } }}
              >
                <MenuIcon />
              </IconButton>
              <Box sx={{ display: { xs: "none", sm: "block" } }}>
                {navItems.map((item) => (
                  <Button key={item.id} sx={{ color: "#fff" }}>
                    <Typography>{item.text}</Typography>
                  </Button>
                ))}
              </Box>
            </Toolbar>
          </AppBar>
          <NavDrawer
            navItems={navItems}
            handleDrawerToggle={handleDrawerToggle}
            mobileOpen={mobileOpen}
          />
        </Box>
      </div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          mt: { xs: "4rem", sm: "6rem" },
          mb: { xs: "4rem", sm: "6rem" },
        }}
      >
        <Outlet />
      </Box>
    </>
  );
}
