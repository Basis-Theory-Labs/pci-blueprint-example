import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Container } from "@mui/material";

import "../styles/globals.css";
import theme from '../styles/theme';

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="md">
        <Component {...pageProps} />
      </Container>
    </ThemeProvider>
  )
}