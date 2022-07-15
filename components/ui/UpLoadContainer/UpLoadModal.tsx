import { FC, useState, useContext } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import { UploadFile } from "../UpLoad/UploadFile";
import { ContextProps } from "../../../context/Ui/index";
import AddIcon from "@mui/icons-material/Add";
import { propsMovieLocal } from "../../../context/MovieLocal";
import { MovieFromLocalstorageContext } from "../../../context/MovieLocal/index";

const modalContainer = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 730,
  height: 430,
  bgcolor: "#242424",
  boxShadow: 24,
  p: 4,
};

const modalButtons = {
  bgcolor: "#FFFFFF",
  width: 248,
  height: 56,
  fontSize: 18,
  borderRadius: 0,
  letterSpacing: 4,
};

const modalButtonsContainer = {
  display: "flex",
  justifyContent: "center",
};

const closeContainer = {
  display: "flex",
  justifyContent: "flex-end",
  flexGrow: 1,
};

const inputTitle = {
  textAlign: "center",
  fontSize: 16,
  letterSpacing: 4,
  width: 248,
  borderColor: "white !important",
};

export const UpLoadModal: FC<ContextProps> = (): JSX.Element => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    getMovieLocalstorage();
  };
  const ariaLabel = { "aria-label": "description" };

  const { getMovieLocalstorage } = useContext(
    MovieFromLocalstorageContext
  ) as propsMovieLocal;

  return (
    <>
      <Button
        startIcon={
          <AddIcon
            sx={{
              color: "white",
              width: 20,
              height: 20,
            }}
          />
        }
        onClick={handleOpen}
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
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'>
        <Box sx={modalContainer}>
          <Box sx={closeContainer}>
            <IconButton onClick={handleClose}>
              <CloseIcon sx={{ color: "white" }} />
            </IconButton>
          </Box>
          <Box sx={{ flexGrow: 1 }}></Box>
          <UploadFile handleClose={handleClose} />
        </Box>
      </Modal>
    </>
  );
};
