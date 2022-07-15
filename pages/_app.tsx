import "../styles/globals.css";
import type { AppProps } from "next/app";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

import { lightTheme } from "../themes";
import { UiProvider } from "../context/Ui/index";
import { MovieProvider } from "../context/Data/index";
import { MovieLocalProvider } from "../context/MovieLocal/index";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MovieProvider>
      <UiProvider>
        <ThemeProvider theme={lightTheme}>
          <MovieLocalProvider>
            <CssBaseline />
            <Component {...pageProps} />
          </MovieLocalProvider>
        </ThemeProvider>
      </UiProvider>
    </MovieProvider>
  );
}

export default MyApp;
