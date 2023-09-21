import { Button, Card, CardContent, Container, Grid, IconButton, Paper, Stack, Typography } from "@mui/material";
import { useCart } from "../CartContext";
import { CartItemView } from "./CartItemView";

let EuroCurrency = new Intl.NumberFormat('nl-NL', {
    style: 'currency',
    currency: 'EUR',
});

export const CartView = () => {
    const { cartItems, cartTotal } = useCart();

    const cartIsEmpty = cartItems.length === 0

    const EmptyCart = (
        <Typography sx={{textAlign: "center"}} variant="subtitle1">Your cart is empty</Typography>
    )

    return (
        <Card sx={{height:500, display: 'flex', flexDirection: 'column' }} variant="outlined">
            <CardContent sx={{ flexGrow: 1 }}>
                {cartIsEmpty ? (EmptyCart) : (
                        <Stack>
                            {cartItems.map((item) => (
                                <CartItemView key={item.product.image} item={item} />
                            ))}
                        </Stack>
                )}
            </CardContent>
            
        <CardContent sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button variant="outlined" disabled={cartIsEmpty} fullWidth={true} >
                {EuroCurrency.format(cartTotal)}
            </Button>
        </CardContent>

        </Card>
    )

}
