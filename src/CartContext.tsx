"use client"
import { createContext, useContext, useState } from "react";
import { CartItem, Product } from "../src/types";

interface CartContext {
    cartItems: CartItem[];
    addToCart: (product: Product) => void;
    removeFromCart: (productId: number) => void;
    updateCartItemQuantity: (productId: number, quantity: number) => void;
    cartCount: number;
    cartTotal: number;
    cartTotalInEuro:string
}

const CartContextImpl = createContext<CartContext>({
    cartItems: [],
    addToCart: () => {},
    removeFromCart: () => {},
    updateCartItemQuantity: () => {},
    cartTotal: 0,
    cartCount: 0,
    cartTotalInEuro: ""
});

export const useCart = () => {
    return useContext(CartContextImpl);
};

type Props = {
  children: React.ReactNode
}

export const CartProvider = ( {children}: Props ) => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    const addToCart = (product:Product) => {
      // Check if the product already exists in the cart
      const existingItemIndex = cartItems.findIndex(cartItem => cartItem.product.id === product.id);
      
      if (existingItemIndex !== -1) {
          // If the product exists, update its quantity
          const existingCartItem = cartItems[existingItemIndex];
          const updatedCartItem = {
            ...existingCartItem,
            quantity: existingCartItem.quantity + 1,
          };

          const updatedCartItems = [...cartItems];
          updatedCartItems[existingItemIndex] = updatedCartItem;
          setCartItems(updatedCartItems);
          
      } else {
          // Otherwise, add the new product to the cart
          setCartItems([...cartItems, { product, quantity: 1 }]);
      }
    }

    const removeFromCart = (productId: number) => {
      const updatedCartItems = cartItems.filter( (item) => item.product.id !== productId );
      setCartItems(updatedCartItems);
    }

    const updateCartItemQuantity = (productId: number, quantity: number) => {
      const existingCartItemIndex = cartItems.findIndex( (item) => item.product.id === productId );
      if (existingCartItemIndex !== -1) {
        const existingCartItem = cartItems[existingCartItemIndex];
        const updatedCartItem = {
          ...existingCartItem,
          quantity,
        };
        const updatedCartItems = [...cartItems];
        updatedCartItems[existingCartItemIndex] = updatedCartItem;
        setCartItems(updatedCartItems);
      }
    }
    
    const cartTotal = cartItems.reduce( (total, item) => total + item.product.price * item.quantity,  0 );
    const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);

    const EuroCurrency = new Intl.NumberFormat('nl-NL', {
      style: 'currency',
      currency: 'EUR',
    });

    const cartTotalInEuro = EuroCurrency.format(cartTotal)

    return (
        <CartContextImpl.Provider value={{
            cartItems, 
            addToCart, 
            removeFromCart, 
            updateCartItemQuantity, 
            cartTotal, 
            cartCount, 
            cartTotalInEuro
          }}>
            
          {children}
        </CartContextImpl.Provider>
    )
}
