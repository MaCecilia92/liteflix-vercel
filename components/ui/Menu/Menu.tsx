import { useContext, FC } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Image from "next/image";
import Notificacion from "../../../components/Icons/Notificacion";
import LogoLiteflix from "../../../components/Icons/LiteflixLogo";
import MenuSVG from "../../../components/Icons/Menu";
import Button from "@mui/material/Button";
import { UiContext } from "../../../context/Ui/index";
import { SideBar } from "../SideBar";
import AddIcon from "@mui/icons-material/Add";
import { UpLoadModal } from "../UpLoadContainer";

export interface menuProps {
  anchor: "top" | "right";
  open: boolean;
}

export const MenuDesktop: FC<menuProps> = ({}) => {
  const { openSideBarDesktop, Anchor, Open } = useContext(UiContext);
  return (
    <AppBar position='fixed' sx={{ mt: 2, bgcolor: "transparent" }}>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Box sx={{ display: { xs: "none", md: "flex", sm: "flex" }, mr: 5 }}>
            <LogoLiteflix />
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex", sm: "flex" } }}>
            <UpLoadModal />
          </Box>
          <Box sx={{ flexGrow: 1 }}></Box>
          <Box sx={{ mr: 5 }}>
            <Button startIcon={<MenuSVG />} onClick={openSideBarDesktop} />
            <SideBar anchor={Anchor} open={Open} />
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
