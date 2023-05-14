import { Outlet } from "react-router-dom";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import MenuIcon from "@mui/icons-material/Menu";
import { Drawer, IconButton } from "@mui/material";
import DrawerItems from "./DrawerItems";

const navItems = [
  {
    text: "Top",
    path: "/",
    id: "nav-1",
  },
  {
    text: "New",
    path: "/new",
    id: "nav-2",
  },
  {
    text: "Best",
    path: "/best",
    id: "nav-3",
  },
  {
    text: "Jobs",
    path: "/jobs",
    id: "nav-4",
  },
];

export default function NavBar() {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }

  return (
    <div>
      <CssBaseline />
      <Box sx={{ display: "flex" }}>
        <AppBar component="nav">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
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
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": { boxSizing: "border-box", width: "80%" },
            }}
          >
            <DrawerItems
              toggleDrawer={handleDrawerToggle}
              navItems={navItems}
            />
          </Drawer>
        </Box>
      </Box>
      <Outlet />
    </div>
  );
}
