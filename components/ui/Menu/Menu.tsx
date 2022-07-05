import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Image from "next/image";
import Notificacion from "../../../components/Icons/Notificacion";
import LogoLiteflix from "../../../components/Icons/LiteflixLogo";
import MenuSVG from "../../../components/Icons/Menu";

export const MenuDesktop = () => {
  return (
    <AppBar position='static' sx={{ mt: 2 }}>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Box sx={{ display: { xs: "none", md: "flex", sm: "flex" }, mr: 5 }}>
            <LogoLiteflix />
          </Box>
          <Box sx={{ flexGrow: 1 }}></Box>
          <Box sx={{ mr: 5 }}>
            <MenuSVG />
          </Box>
          <Box sx={{ mr: 5 }}>
            <Notificacion />
          </Box>
          <Box>
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
