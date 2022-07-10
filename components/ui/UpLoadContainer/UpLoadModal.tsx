import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import { Form, Formik } from "formik";
import { MultipleFileUploadFile } from "../UpLoad/MultipleFileUploadFile";

const modalContainer = {
  position: "absolute" as "absolute",
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

const TypographyTitle = {
  fontSize: 22,
  textAlign: "center",
  color: "#64EEBC",
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

export const UpLoadModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const ariaLabel = { "aria-label": "description" };

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
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
          <Typography
            id='modal-modal-title'
            variant='h1'
            component='h1'
            sx={TypographyTitle}>
            Agregar película
          </Typography>

          <Box sx={{ flexGrow: 1 }}></Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              "& > :not(style)": { m: 1 },
            }}>
            <Formik initialValues={{}} onSubmit={() => {}}>
              {({ values, errors }) => (
                <Form>
                  <MultipleFileUploadFile />
                </Form>
              )}
            </Formik>

            <Input
              placeholder='Título'
              inputProps={ariaLabel}
              sx={inputTitle}
            />
          </Box>
          <Box sx={modalButtonsContainer}>
            <Button sx={modalButtons}>Subir película</Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};
