import React from "react";
import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { CgClose } from "react-icons/cg";

const navData = [
  {
    name: "Products",
    href: "#/",
  },
  {
    name: "Features",
    href: "#/",
  },
  {
    name: "About",
    href: "#/",
  },
  {
    name: "Contact",
    href: "#/",
  },
];

const NavMobile = ({ setNavMobile }) => {
  // Close the mobile navigation
  const handleClick = () => {
    setNavMobile(false);
  };

  return (
    <Box
      sx={{
        display: { lg: "none" },
        backgroundColor: "slategray",
        height: "100vh",
        width: 320,
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Close Button */}
      <IconButton
        onClick={handleClick}
        sx={{ position: "absolute", top: 16, left: 16 }}
        aria-label="Close Navigation"
      >
        <CgClose size={30} />
      </IconButton>

      {/* Menu List */}
      <List sx={{ textAlign: "center" }}>
        {navData.map((item, index) => (
          <ListItem
            key={index}
            button
            component="a"
            href={item.href}
            sx={{ justifyContent: "center", py: 2 }}
          >
            <ListItemText
              primary={
                <Typography variant="h6" sx={{ fontSize: 18 }}>
                  {item.name}
                </Typography>
              }
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default NavMobile;
