import { useState, Fragment, useContext, FC } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import Avatar from "@mui/material/Avatar";
import Image from "next/image";
import Notificacion from "../../../components/Icons/Notificacion";
import { UiContext } from "../../../context/Ui/index";
import { menuProps } from "../Menu/Menu";

export const SideBar: FC<menuProps> = ({ anchor, open }) => {
  const { openSideBarDesktop, closeSideBar, Anchor, Open } =
    useContext(UiContext);
  console.log(openSideBarDesktop);
  console.log(closeSideBar);
  console.log("Anchor", Anchor, Open);

  return (
    <div>
      <Fragment>
        <Drawer
          anchor={Anchor}
          open={Open}
          onClose={closeSideBar}
          sx={{
            "@media screen and (max-width:599px)": {
              width: "100vh",
              top: 800,
            },
          }}>
          <Box
            sx={{
              width: 800,
              height: "100vh",
              bgcolor: "#242424",
            }}
            role='presentation'
            onClick={closeSideBar}
            onKeyDown={closeSideBar}>
            <List sx={{ width: "100%" }}>
              <Box
                sx={{
                  display: { xs: "none", md: "flex", sm: "flex" },
                  alignItems: "center",
                  alignContent: "center",
                  pl: 6,
                  pr: 20,
                  mb: 10,
                  mt: 5,
                }}>
                <Box sx={{ flexGrow: 1 }}>
                  <IconButton onClick={closeSideBar}>
                    <CloseIcon sx={{ color: "white" }} />
                  </IconButton>
                </Box>
                <Box>
                  <Notificacion />
                </Box>
                <Avatar sx={{ ml: 8 }}>
                  <Image
                    alt='User profile'
                    height={42}
                    width={42}
                    src='/images/Perfil.svg'
                  />
                </Avatar>
                <Box></Box>
              </Box>
              {[
                "Inicio",
                "Series",
                "Películas",
                "Agregadas recientemente",
                "Populares",
                "Mis peliculas",
                "Mi lista",
              ].map((text) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <ListItemText
                      primary={text}
                      primaryTypographyProps={{
                        sx: {
                          fontSize: 20,
                          color: "white",
                          fontWeight: 200,
                          letterSpacing: 3,
                          "@media screen and (max-width:599px)": {
                            pl: 1,
                          },
                        },
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <List>
              <ListItem disablePadding>
                <ListItemButton
                  sx={{
                    pl: 7,
                    "@media screen and (max-width:599px)": {
                      pl: 2,
                    },
                  }}>
                  <ListItemIcon sx={{ minWidth: 26 }}>
                    <AddIcon sx={{ color: "white" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary='Agregar peliculas'
                    primaryTypographyProps={{
                      sx: {
                        fontSize: 22,
                        fontWeight: 700,
                        color: "white",
                        letterSpacing: 3,
                        mt: 3,
                        mb: 3,
                      },
                    }}
                  />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText
                    primary='Cerrar sesión'
                    primaryTypographyProps={{
                      sx: {
                        fontSize: 22,
                        color: "white",
                        fontWeight: 200,
                        letterSpacing: 3,
                        pl: 1,
                        "@media screen and (max-width:599px)": {
                          pl: 1,
                        },
                      },
                    }}
                  />
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </Drawer>
      </Fragment>
    </div>
  );
};
