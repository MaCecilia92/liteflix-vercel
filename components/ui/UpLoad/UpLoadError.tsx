import React from "react";
import { FileError } from "react-dropzone";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { NumbersOutlined } from "@mui/icons-material";

export interface UploadErrorProps {
  file: File;
  onDelete: (file: File) => void;
  errors: FileError[];
}

const ErrorLinearProgress = {
  bgcolor: "#FF0000",
  height: 10,
};

export const UploadError = ({ file, onDelete, errors }: UploadErrorProps) => {
  return (
    <>
      {errors.map((error) => (
        <Box key={error.code}>
          <Typography
            color='error'
            sx={{ fontSize: "18px", letterSpacing: 4, mb: 1 }}>
            {error.code === "file-too-large" ? (
              <Typography>¡Error! No se pudo cargar la película</Typography>
            ) : null}
          </Typography>
        </Box>
      ))}
      <LinearProgress
        variant='determinate'
        value={10}
        sx={ErrorLinearProgress}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignContent: "flex-end",
        }}>
        <Button
          onClick={() => onDelete(file)}
          sx={{ fontSize: "18px", letterSpacing: 4, color: "white" }}>
          {errors.length ? "Reintentar" : null}
        </Button>
      </Box>
    </>
  );
};
