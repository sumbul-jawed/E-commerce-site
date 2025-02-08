"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type CartItem = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  quantity: number;
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setCart((prevCart) => {
      // Check if the item already exists in the cart
      const itemIndex = prevCart.findIndex((cartItem) => cartItem.id === item.id);
      if (itemIndex > -1) {
        const updatedCart = [...prevCart];
        updatedCart[itemIndex].quantity += item.quantity; // Increase quantity if item exists
        return updatedCart;
      }
      return [...prevCart, item]; // Otherwise, add the new item
    });
  };

  const removeFromCart = (id: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
