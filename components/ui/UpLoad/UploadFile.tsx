import React, {
  useCallback,
  useState,
  useRef,
  useEffect,
  FC,
  useContext,
} from "react";
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
import { UiContext } from "../../../context/Ui";

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
  handleClose?: () => void;
  closeDrawer?: () => void;
}

const modalButtons = {
  bgcolor: "#FFFFFF",
  width: 248,
  height: 56,
  fontSize: 18,
  borderRadius: 0,
  letterSpacing: 4,
  mb: 2,
  textAlign: "center",
  ":disabled": {
    bgcolor: "#b8b6b6",
  },
  ":hover": {
    color: "white",
    border: "1px solid white",
  },
};

const secondaryButton = {
  bgcolor: "transparent",
  width: 248,
  height: 56,
  fontSize: 18,
  borderRadius: 0,
  letterSpacing: 4,
  color: "white",
  mb: 2,
  textAlign: "center",
  border: "1px solid white",
  ":disabled": {
    bgcolor: "#b8b6b6",
  },
  ":hover": {
    bgcolor: "#FFFFFF",
    color: "black",
  },
};

const TypographyTitle = {
  fontSize: 22,
  textAlign: "center",
  color: "#64EEBC",
  mb: 5,
};

const modalButtonsContainer = {
  display: "flex",
  justifyContent: "center",
  "@media screen and (max-width:599px)": {
    flexDirection: "column",
    alignItems: "center",
  },
};

let currentId = 0;

function getNewId() {
  return ++currentId;
}

export const UploadFile: FC<movies> = ({
  titleName,
  modalsButtons,
  handleClose,
  closeDrawer,
}): JSX.Element => {
  const { toggleContainer, isMenuOpen } = useContext(UiContext);
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

  const buttonsContainer = isMenuOpen ? (
    <Button onClick={toggleContainer} sx={secondaryButton}>
      Salir
    </Button>
  ) : null;

  const textContainer = isMenuOpen ? (
    <Typography
      sx={{
        fontSize: 16,
        letterSpacing: 2,
        color: "white",
        m: 5,
      }}>
      Agregá un archivo
    </Typography>
  ) : (
    <Typography
      sx={{
        fontSize: 16,
        letterSpacing: 2,
        color: "white",
        m: 5,
      }}>
      Agregá un archivo o arrastralo y soltalo aquí
    </Typography>
  );

  const ProgressBarContainer = !files.length ? (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          height: "5rem",
          alignItems: "center",
          border: "1px white dashed",
        }}
        {...getRootProps()}>
        <input {...getInputProps()} />
        <File />
        {textContainer}
      </Box>
    </Box>
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

  return (
    <>
      {!view ? (
        <Box>
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
              disabled={!value || !files.length}
              onClick={() => handleClick(files)}
              sx={modalButtons}>
              Subir película
            </Button>
            {buttonsContainer}
          </Box>
        </Box>
      ) : (
        <UpLoadFileOk
          titleName={value}
          modalsButtons={modalButtons}
          handleClose={handleClose}
        />
      )}
    </>
  );
};
