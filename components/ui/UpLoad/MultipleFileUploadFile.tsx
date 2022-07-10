import React, { useCallback, useState } from "react";
import { useDropzone, FileRejection, FileError } from "react-dropzone";
import { UpLoadProgressBar } from "./UpLoadProgressBar";
import File from "../../Icons/File";
import { UploadError } from "./index";
import Grid from "@mui/material/Grid";

export interface UploadableFile {
  id: number;
  file: File;
  errors: FileError[];
  url?: string;
}

let currentId = 0;

function getNewId() {
  // we could use a fancier solution instead of a sequential ID :)
  return ++currentId;
}

export const MultipleFileUploadFile = () => {
  const [files, setFiles] = useState<UploadableFile[]>([]);

  const onDrop = useCallback((accFiles: File[], rejFiles: FileRejection[]) => {
    const mappedAcc = accFiles.map((file) => ({
      file,
      errors: [],
      id: getNewId(),
    }));
    const mappedRej = rejFiles.map((r) => ({ ...r, id: getNewId() }));
    setFiles((curr) => [...curr, ...mappedAcc, ...mappedRej]);
  }, []);

  function onUpload(file: File, url: string) {
    setFiles((curr) =>
      curr.map((fw) => {
        if (fw.file === file) {
          return { ...fw, url };
        }
        return fw;
      })
    );
  }

  function onDelete(file: File) {
    setFiles((curr) => curr.filter((fw) => fw.file !== file));
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
    accept: {
      "image/jpeg": [".jpg", ".jpeg"],
    },
    maxSize: 500 * 1024,
  });
  console.log(files);
  return (
    <>
      {!files.length ? (
        <Grid item>
          <div {...getRootProps()}>
            <input {...getInputProps()} />

            <p>Drop the files here ...</p>
          </div>
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
      )}
    </>
  );
};
