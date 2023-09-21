import { AddCircle, RemoveCircle } from "@mui/icons-material";
import { Grid, Box, Typography, Stack, IconButton } from "@mui/material";
import { useCart } from "../CartContext";
import { CartItem } from "../types";

interface Props {
    item: CartItem;
}

export const CartItemView = ({ item }: Props) => {
  const { removeFromCart, updateCartItemQuantity } = useCart();

  const handleQuantityChange = (quantity: number) => {
      if (quantity >= 1) {
        updateCartItemQuantity(item.product.id, quantity);
      } else {
        removeFromCart(item.product.id)
      }
  }

  const shortName = (name:string, n=20) => (name.length > n) ? name.slice(0, n-1) + '…' : name;

  return (
    
    <Grid alignItems="center" container xs={12} >
      
      <Grid item xs={8}>
        <Box>
          <Typography variant="body1">{shortName(item.product.title)}</Typography>
        </Box>
      </Grid>

      <Grid item xs={4}>
          <Box>
            <Stack alignItems="center" direction="row" spacing={1}>
              <IconButton onClick={() => { handleQuantityChange(item.quantity - 1) }}>
                <RemoveCircle/>
              </IconButton>
              <Typography color="grey" variant="subtitle1">&nbsp;{item.quantity}&nbsp;</Typography>
              <IconButton onClick={() => {handleQuantityChange(item.quantity + 1) }}>
                <AddCircle/>
              </IconButton>
            </Stack>
          </Box>
      </Grid>
    </Grid>
  );
};
  