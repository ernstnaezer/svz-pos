import { Button, Card, CardContent, Grid, Stack, TextField, Typography } from "@mui/material";
import Head from "next/head";
import { useCart } from "../../CartContext";

export default function Home () {

    const { cartItems, cartTotalInEuro } = useCart();
  
    return (
        <>
          <Head>
            <title>Zet op bon</title>
          </Head>
          
          <Card sx={{height:'100%' }} variant="outlined">
            <CardContent sx={{ flexGrow: 1 }}>             
                <Stack spacing={2}>
                  <Typography align="center">Zet op bon {cartTotalInEuro}</Typography>
                  <TextField></TextField>
                  <Button variant="contained">Bestaande bon selecteren</Button>
                  </Stack>
            </CardContent>
          </Card>

        </>
      );
  }
  