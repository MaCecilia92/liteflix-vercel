import React from "react";
import LinearProgress, {
  LinearProgressProps,
} from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export const UpLoadLinearProgress = (
  props: LinearProgressProps & { value: number }
) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress
          variant='determinate'
          {...props}
          sx={{
            color: "white",
            "& .MuiLinearProgress-bar": {
              bgcolor: "#64EEBC",
            },
            "& .MuiLinearProgress-root": {
              bgcolor: "rgba(255, 255, 255, 0.5)",
            },
          }}
        />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography
          variant='body2'
          color='text.secondary'
          sx={{ color: "white" }}>
          Cargando {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
};
