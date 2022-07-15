import { useContext, FC } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Image from "next/image";
import LogoLiteflix from "../../Icons/LiteflixLogo";
import MenuSVG from "../../Icons/Menu";
import { UiContext } from "../../../context/Ui/index";
import { menuProps } from "./Menu";
import Button from "@mui/material/Button";
import { SideBar } from "../SideBar";
import CloseIcon from "@mui/icons-material/Close";

const MenumobileOpen = "#242424";
const MenumobileClose = "transparent";

export const MenuMobile: FC<menuProps> = ({}) => {
  const { openSideBarMobile, Anchor, Open, closeSideBar, isMenuOpen } =
    useContext(UiContext);

  const MenuButtons = Open ? (
    isMenuOpen ? (
      <Button
        startIcon={<MenuSVG sx={{ color: "white", width: 30, height: 30 }} />}
        onClick={openSideBarMobile}
      />
    ) : (
      <Button
        startIcon={<CloseIcon sx={{ color: "white", width: 30, height: 30 }} />}
        onClick={closeSideBar}
      />
    )
  ) : (
    <Button
      startIcon={<MenuSVG sx={{ color: "white", width: 30, height: 30 }} />}
      onClick={openSideBarMobile}
    />
  );

  return (
    <AppBar
      position='fixed'
      sx={{
        bgcolor: Open ? MenumobileOpen : MenumobileClose,
        zIndex: 1,
        pt: 2,
      }}>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Box>
            {MenuButtons}
            <SideBar anchor={Anchor} open={Open} />
          </Box>
          <Box sx={{ m: "auto" }}>
            <LogoLiteflix />
          </Box>
          <Box sx={{ ml: 3 }}>
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
