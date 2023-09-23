import { Card, CardContent, Stack, Typography } from "@mui/material";
import { useCart } from "../CartContext";
import { CartItemView } from "./CartItemView";
import SplitButton from "./SplitButton";
import { useRouter } from "next/router";

export const CartView = () => {
    const { cartItems, cartTotalInEuro } = useCart();
    const cartIsEmpty = cartItems.length === 0
    const router = useRouter();

    const EmptyCart = (
        <Typography sx={{textAlign: "center"}} variant="subtitle1">Your cart is empty</Typography>
    )

    function handlePaymentClick(paymentOption:number) {
        switch(paymentOption){
            case 0:
                router.push("/payment/put-on-tap")
        }
    }

    return (
        <Card sx={{height:'100%', display: 'flex', flexDirection: 'column' }} variant="outlined">
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
                <SplitButton disabled={cartIsEmpty} onClick={handlePaymentClick} options={[`Zet op bon ${cartTotalInEuro}`, `Direct afrekenen`, `Derving`]} />
            </CardContent>
        </Card>
    )

}
