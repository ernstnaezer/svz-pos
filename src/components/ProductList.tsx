import { ImageList, Skeleton } from "@mui/material";
import { Product } from "../types";
import ProductCard from "./ProductCard";

type Props = {
  isLoading:boolean,
  products: Product[];
};

export const ProductList = ({ isLoading, products }: Props) => {
 
  return (
    <ImageList sx={{ height: 500, marginTop:0 }} cols={3} rowHeight={164} >
      
      { isLoading && 
        <Skeleton variant="rectangular" width={800} height={'100%'} />
      }

      { !isLoading && products.map((product) => (
        <ProductCard key={product.image} product={product} />
      ))}
    </ImageList>
  );
};
