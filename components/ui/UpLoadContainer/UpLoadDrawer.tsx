import { useContext, FC } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { UploadFile } from "../UpLoad/index";
import { UiContext } from "../../../context/Ui/index";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";

export const UpLoadDrawer: FC = ({}) => {
  const { toggleContainer, isMenuOpen } = useContext(UiContext);

  return (
    <>
      <Button
        onClick={toggleContainer}
        startIcon={
          <AddIcon
            sx={{
              color: "white",
              width: 20,
              height: 20,
            }}
          />
        }
        sx={{
          width: "20rem",
          display: "flex",
          justifyContent: "flex-start",
          mt: 3,
          mb: 3,
        }}>
        <Typography sx={{ color: "white", fontSize: 22, letterSpacing: 3 }}>
          Agregar película
        </Typography>
      </Button>
      <Drawer anchor='top' open={isMenuOpen}>
        <Box
          sx={{
            width: "100%",
            height: "100vh",
            bgcolor: "#242424",
            pt: "5rem",
            pl: "3rem",
            pr: "3rem",
          }}
          role='presentation'>
          <UploadFile />
        </Box>
      </Drawer>
    </>
  );
};
