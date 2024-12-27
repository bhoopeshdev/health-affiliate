"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

// Define interfaces for wishlist items and context
interface WishlistItem {
  id: string;
  name: string;
  price: number;
  images: string[];
}

interface WishlistContextType {
  wishlist: WishlistItem[];
  addToWishlist: (product: WishlistItem) => void;
  removeFromWishlist: (productId: string) => void;
}

// Create context with a default value of `null`
const WishlistContext = createContext<WishlistContextType | null>(null);

interface WishlistProviderProps {
  children: ReactNode;
}

export const WishlistProvider: React.FC<WishlistProviderProps> = ({ children }) => {
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);

  // Load wishlist from localStorage on initial render
  useEffect(() => {
    const storedWishlist = localStorage.getItem("wishlist");
    if (storedWishlist) {
      try {
        const parsedWishlist = JSON.parse(storedWishlist);
        setWishlist(Array.isArray(parsedWishlist) ? parsedWishlist : []);
      } catch (error) {
        console.error("Error parsing wishlist from localStorage:", error);
        setWishlist([]); // Fallback to empty array
      }
    } else {
      setWishlist([]); // Fallback to empty array if nothing in localStorage
    }
  }, []);

  // Add a product to the wishlist
  const addToWishlist = (product: WishlistItem) => {
    if (!product || typeof product !== "object" || !product.id || !Array.isArray(product.images)) {
      console.error("Invalid product object:", product);
      return;
    }
    setWishlist((prevWishlist) => {
      const newWishlist = [...prevWishlist, product];
      localStorage.setItem("wishlist", JSON.stringify(newWishlist));
      return newWishlist;
    });
  };

  // Remove a product from the wishlist by its ID
  const removeFromWishlist = (productId: string) => {
    if (!productId) {
      console.error("Invalid productId:", productId);
      return;
    }
    setWishlist((prevWishlist) => {
      const newWishlist = prevWishlist.filter((item) => item && item.id !== productId);
      localStorage.setItem("wishlist", JSON.stringify(newWishlist));
      return newWishlist;
    });
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

// Hook to use the wishlist context
export const useWishlist = (): WishlistContextType => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
};