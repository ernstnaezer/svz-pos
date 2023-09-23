import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Box, Container, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { AppProps } from 'next/app';
import { CartProvider } from '../CartContext';
import { FooterBar } from '../components/FooterBar';

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

                <Container sx={{marginTop:'100px'}}>
                    <Box sx={{
                        height:600, 
                        width:'100%',
                        display:'flex', 
                        flexDirection: 'column',
                        alignItems:'center', 
                        justifyContent:'center'}}>
                        <Component {...pageProps} />
                    </Box>
                    <FooterBar/>
                </Container>
            </CartProvider>
        </ThemeProvider>
        </>
    )
}

export default App;
