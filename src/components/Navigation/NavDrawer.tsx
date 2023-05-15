import { Box, Drawer } from "@mui/material";
import DrawerItems from "./DrawerItems";
import { navItems } from "../../types/navigation";

interface DrawerProps {
  navItems: typeof navItems;
  handleDrawerToggle: () => void;
  mobileOpen: boolean;
}

export default function NavDrawer({
  navItems,
  handleDrawerToggle,
  mobileOpen,
}: DrawerProps) {
  return (
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
        <DrawerItems toggleDrawer={handleDrawerToggle} navItems={navItems} />
      </Drawer>
    </Box>
  );
}
