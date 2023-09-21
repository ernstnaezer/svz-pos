import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Container, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { AppProps } from 'next/app';
import { CartProvider } from '../CartContext';

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

const App = ({ Component, pageProps }: AppProps) => {

    return (
        <>
         <ThemeProvider theme={darkTheme}>
            <CartProvider>
                <CssBaseline />
                <Container sx={{marginTop: "100px" }}>
                    <Component {...pageProps} />
                </Container>
            </CartProvider>
        </ThemeProvider>
        </>
    )
}

export default App;
