import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Image from "next/image";
import LogoLiteflix from "../../Icons/LiteflixLogo";
import MenuSVG from "../../Icons/Menu";

export const MenuMobile = () => {
  return (
    <AppBar position='fixed' sx={{ mt: 2 }}>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Box sx={{ mr: 2 }}>
            <MenuSVG />
          </Box>
          <Box sx={{ m: "auto" }}>
            <LogoLiteflix />
          </Box>
          <Box sx={{ ml: 2 }}>
            <Avatar>
              <Image
                alt='User profile'
                height={42}
                width={42}
                src='/images/Perfil.svg'
              />
            </Avatar>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
