import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

interface DrawerProps {
  toggleDrawer: () => void;
  navItems: { text: string; path: string; id: string }[];
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
