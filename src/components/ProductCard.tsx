/* eslint-disable @next/next/no-img-element */
import React from "react";
import { ImageListItem, ImageListItemBar, Typography } from "@mui/material";
import { Product } from "../types";
import { useCart } from "../CartContext";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  const { addToCart } = useCart();

  const handleAddToCartClick = (product: Product) => {
    addToCart(product);
  };

  return (
    <ImageListItem 
        sx={{ cursor: "pointer"}}
        onClick={() => handleAddToCartClick(product)}
    >
        <img
            src={product.image}
            alt={product.title}
            loading="lazy"
            style={{height:'100%', objectFit:"cover", objectPosition: 'center top', }}
            height={164}
        />
        <ImageListItemBar
            title={product.title}
            position="bottom"
        />
    </ImageListItem>
    )
};

export default ProductCard;
