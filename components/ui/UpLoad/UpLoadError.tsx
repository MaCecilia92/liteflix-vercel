import React from "react";
import { FileError } from "react-dropzone";
import LinearProgress, {
  LinearProgressProps,
} from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
//import { FileHeader } from "./FileHeader";

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
      {/* <FileHeader file={file} onDelete={onDelete} /> */}
      <LinearProgress
        variant='determinate'
        value={10}
        sx={ErrorLinearProgress}
      />
      <Button onClick={() => onDelete(file)}>
        {errors.length ? "Reintentar" : "Cancelar"}
      </Button>
      {errors.map((error) => (
        <div key={error.code}>
          <Typography color='error'>
            {error.code === "file-too-large" ? (
              <Typography>¡Error! No se pudo cargar la película</Typography>
            ) : null}
          </Typography>
        </div>
      ))}
    </>
  );
};
