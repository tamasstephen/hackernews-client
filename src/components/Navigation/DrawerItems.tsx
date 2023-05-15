import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { navItems } from "../../types/navigation";

interface DrawerProps {
  toggleDrawer: () => void;
  navItems: typeof navItems;
}

export default function DrawerItems({ toggleDrawer, navItems }: DrawerProps) {
  return (
    <Box
      onClick={toggleDrawer}
      sx={{
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        display: { xs: "flex", sm: "none" },
      }}
    >
      <List>
        {navItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
