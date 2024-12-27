import Link from 'next/link'
import React, { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Search } from 'lucide-react'
import WishlistPopup from './WishListPopup';
import { useWishlist } from '../context/WishlistContext';
import { Heart } from 'lucide-react';
import { useRouter } from "next/navigation";
import { items } from '../data/items';
import { Product } from '../data/types';

export function Navbar() {

  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const { wishlist } = useWishlist();
  const [searchText, setSearchText] = useState("");
  const [suggestions, setSuggestions] = useState<Product[]>([]);
  const router = useRouter();

  const handleSearch = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      router.push(`/list?search=${searchText}`);
      setSearchText(""); // Clear the input
      setSuggestions([]); // Clear suggestions
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchText(value);

    if (value && value.length > 2) {
      // Filter suggestions based on input
      setSuggestions(
        items.filter((item) =>
          item.tags.some((tag) => tag.toLowerCase().includes(value.toLowerCase()))
        )
      );
    } else {
      setSuggestions([]);
    }
  };

  return (
    <nav className="relative bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-orange-600">
          BDHealthClub
        </Link>
        <div className="flex-1 max-w-md mx-auto flex items-center justify-center">
          <div className="relative w-full">
            <Input
              type="text"
              placeholder="Search products..."
              className="w-full pl-10"
              value={searchText}
              onChange={handleInputChange}
              onKeyDown={handleSearch}
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            {suggestions.length > 0 && (
              <ul className="absolute top-full mt-2 w-full z-10 bg-white border border-gray-300 shadow-lg rounded-md">
                {suggestions.map((suggestion, index) => (
                  <li
                    key={index}
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                    onClick={() => {
                      setSearchText(suggestion.name);
                      setSuggestions([]);
                      router.push(`/product/${suggestion.id}`);
                    }}
                  >
                    {suggestion.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className="flex items-center space-x-8">
          
          <button
            onClick={() => setIsWishlistOpen(true)}
            className="relative p-2 text-gray-700 hover:text-indigo-600 flex flex-row gap-2"
          >
            <p className='cursor-pointer hover:text-indigo-600 font-bold'>WishList</p>
            <Heart className="h-6 w-6" />
            {wishlist.length > 0 && (
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-indigo-600 rounded-full">
                {wishlist.length}
              </span>
            )}
          </button>
        </div>
      </div>
      <WishlistPopup isOpen={isWishlistOpen} onClose={() => setIsWishlistOpen(false)} />
    </nav>
  );
}
