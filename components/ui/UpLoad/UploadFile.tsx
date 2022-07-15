import React, { useCallback, useState, useRef, useEffect, FC } from "react";
import { useDropzone, FileRejection, FileError } from "react-dropzone";
import { UpLoadProgressBar } from "./UpLoadProgressBar";
import File from "../../Icons/File";
import { UploadError } from "./index";
import Grid from "@mui/material/Grid";
import Input from "@mui/material/Input";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import { UpLoadFileOk } from "./index";

export interface UploadableFile {
  id?: number;
  file: File;
  errors: FileError[];
  url?: string;
}

export interface movies {
  image?: string;
  title?: string;
  titleName?: string;
  modalsButtons?: {};
}

let currentId = 0;

function getNewId() {
  return ++currentId;
}

const modalButtons = {
  bgcolor: "#FFFFFF",
  width: 248,
  height: 56,
  fontSize: 18,
  borderRadius: 0,
  letterSpacing: 4,
  textAlign: "center",
  position: "absolute",
  bottom: 50,
  ":disabled": {
    bgcolor: "#b8b6b6",
  },
};

const TypographyTitle = {
  fontSize: 22,
  textAlign: "center",
  color: "#64EEBC",
};

const modalButtonsContainer = {
  display: "flex",
  justifyContent: "center",
};

export const UploadFile: FC<movies> = ({
  titleName,
  modalsButtons,
}): JSX.Element => {
  const [files, setFiles] = useState<UploadableFile[]>([]);
  const ariaLabel = { "aria-label": "description" };
  const [movie, setMovie] = useState<movies>({});
  const input = useRef(null);
  const [value, setValue] = useState("");
  const [view, setView] = useState(false);

  const onDrop = useCallback((accFiles: File[], rejFiles: FileRejection[]) => {
    const mappedAcc = accFiles.map((file) => ({
      file,
      errors: [],
      id: getNewId(),
    }));
    const mappedRej = rejFiles.map((r) => ({ ...r, id: getNewId() }));
    setFiles((curr) => [...curr, ...mappedAcc, ...mappedRej]);
  }, []);

  const onUpload = (file: File, url: string) => {
    setFiles((curr) =>
      curr.map((fw) => {
        if (fw.file === file) {
          return { ...fw, url };
        }
        return fw;
      })
    );
  };

  const onDelete = (file: File) => {
    setFiles((curr) => curr.filter((fw) => fw.file !== file));
    setMovie({});
    setValue("");
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
    accept: {
      "image/jpeg": [".jpg", ".jpeg"],
    },
    maxSize: 500 * 1024,
  });

  const handleClick = useCallback(
    (doc) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result: string = reader.result as string;
        setMovie({
          image: result.replace("data:", "").replace(/^.+,/, ""),
          title: value,
        });
        setView(true);
      };
      reader.readAsDataURL(doc[0]?.file);
    },

    [movie, value, setValue]
  );

  useEffect(() => {
    const oldArray = JSON.parse(localStorage.getItem("movieArray") || "[]");
    Object.keys(movie).length > 0 && oldArray.push(movie);
    localStorage.setItem("movieArray", JSON.stringify(oldArray));
  }, [movie, setMovie, setValue]);

  const ProgressBarContainer = !files.length ? (
    <Grid item>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          height: "5rem",
          alignItems: "center",
          m: "2rem",
          border: "2px white dashed",
        }}
        {...getRootProps()}>
        <input {...getInputProps()} />
        <File />
        <Typography
          sx={{
            fontSize: 16,
            letterSpacing: 2,
            color: "white",
            m: 5,
          }}>
          Agregá un archivo o arrastralo y soltalo aquí{" "}
        </Typography>
      </Box>
    </Grid>
  ) : (
    files.map((fileWrapper) => (
      <Grid item key={fileWrapper.id}>
        {fileWrapper.errors.length ? (
          <UploadError
            file={fileWrapper.file}
            errors={fileWrapper.errors}
            onDelete={onDelete}
          />
        ) : (
          <UpLoadProgressBar
            onDelete={onDelete}
            onUpload={onUpload}
            file={fileWrapper.file}
          />
        )}
      </Grid>
    ))
  );

  console.log("movies", movie);
  console.log(input);
  console.log("FILES", files);
  return (
    <>
      {!view ? (
        <Grid>
          <Typography
            id='modal-modal-title'
            variant='h1'
            component='h1'
            sx={TypographyTitle}>
            Agregar película
          </Typography>
          {ProgressBarContainer}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
              "& > :not(style)": { m: 1 },
            }}>
            <Input
              value={value}
              ref={input}
              placeholder='Título'
              inputProps={ariaLabel}
              sx={{
                width: 248,
                height: 56,
                fontSize: 18,
                borderRadius: 0,
                letterSpacing: 4,
                textAlign: "center",
                ":disabled": {
                  bgcolor: "#b8b6b6",
                },
                input: { textAlign: "center" },
              }}
              onChange={(e) => setValue(e.target.value)}
            />
          </Box>

          <Box sx={modalButtonsContainer}>
            <Button
              disabled={!value}
              onClick={() => handleClick(files)}
              sx={modalButtons}>
              Subir película
            </Button>
          </Box>
        </Grid>
      ) : (
        <UpLoadFileOk titleName={value} modalsButtons={modalButtons} />
      )}
    </>
  );
};
