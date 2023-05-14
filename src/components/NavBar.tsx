import { Outlet } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/joy/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";

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
  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <AppBar component="nav">
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              Hacker News
            </Typography>

            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map((item) => (
                <Button key={item.id} sx={{ color: "#fff" }}>
                  <Typography>{item.text}</Typography>
                </Button>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <Outlet />
    </div>
  );
}
