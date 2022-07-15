import { useContext, FC } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Avatar from "@mui/material/Avatar";
import Image from "next/image";
import Notificacion from "../../../components/Icons/Notificacion";
import { UiContext } from "../../../context/Ui/index";
import { menuProps } from "../Menu/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";
import { UpLoadModal, UpLoadDrawer } from "../UpLoadContainer";

export const SideBar: FC<menuProps> = ({ anchor, open }) => {
  const { closeSideBar, Anchor, Open } = useContext(UiContext);
  const breakpoints = useMediaQuery("(max-width:600px)");

  return (
    <>
      <Drawer
        anchor={Anchor}
        open={Open}
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
          role='presentation'>
          <List sx={{ width: "100%" }}>
            <Box
              sx={{
                display: { xs: "none", md: "flex", sm: "flex" },
                alignItems: "center",
                alignContent: "center",
                pl: 6,
                pr: 20,
                mb: 5,
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
          <List sx={{ pt: 0 }}>
            <ListItem disablePadding>
              {breakpoints ? <UpLoadDrawer /> : <UpLoadModal />}
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
    </>
  );
};
