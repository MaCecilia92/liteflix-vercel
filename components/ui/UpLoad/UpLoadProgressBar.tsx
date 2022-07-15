import { useEffect, useState } from "react";
import { UpLoadLinearProgress } from "./UpLoadLinearProgress";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export interface UpLoadProgressBarProps {
  file: File;
  onDelete: (file: File) => void;
  onUpload: (file: File, url: string) => void;
}

export const UpLoadProgressBar = ({
  file,
  onDelete,
  onUpload,
}: UpLoadProgressBarProps) => {
  const [progress, setProgress] = useState(8);

  useEffect(() => {
    async function upload() {
      const url = await uploadFile(file, setProgress);
      onUpload(file, url);
      console.log("url", url);
    }
    upload();
  }, []);

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <UpLoadLinearProgress value={progress} />
        <Button onClick={() => onDelete(file)}>Cancelar</Button>
      </Box>
    </>
  );
};

function uploadFile(file: File, onProgress: (percentage: number) => void) {
  const url = "https://api.cloudinary.com/v1_1/demo/image/upload";
  const key = "docs_upload_example_us_preset";

  return new Promise<string>((res, rej) => {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", url);

    xhr.onload = () => {
      const resp = JSON.parse(xhr.responseText);
      res(resp.secure_url);
    };
    xhr.onerror = (evt) => rej(evt);
    xhr.upload.onprogress = (event) => {
      if (event.lengthComputable) {
        console.log(event.lengthComputable);
        const percentage = (event.loaded / event.total) * 100;
        onProgress(Math.round(percentage));
      }
    };

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", key);

    xhr.send(formData);
  });
}
