import React from "react";
import {
  Stack,
  Box,
  Container,
  AppBar,
  Toolbar,
  Link,
  Button,
  Tabs,
  Tab,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
const Header = () => {
  return (
    <>
      <AppBar
        position="sticky"
        sx={{ backgroundColor: "white", color: "black" }}
      >
        <Toolbar>
          <Stack>
            <MenuIcon />
          </Stack>
          <Stack direction={"row"} marginLeft={"auto"} spacing={4}>
            <Link> Home </Link>
            <Link> About </Link>
            <Link> Contact </Link>
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
