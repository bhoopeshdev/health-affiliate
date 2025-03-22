import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { Heart } from 'lucide-react'
import WishlistPopup from './WishListPopup'
import { useWishlist } from '../context/WishlistContext'
import Image from "next/image";
import { SearchBar } from './SearchBar'

export function Navbar() {
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const { wishlist } = useWishlist();

  const router = useRouter();
  const isBlogPage = router.pathname === '/blog';

  const linkText = isBlogPage ? 'Home' : 'Blog';
  const linkHref = isBlogPage ? '/' : '/blog';


  return (
    <nav className="relative bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex gap-4 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-row items-center justify-center">
          <Image
            src="/favicon.png"
            alt="No-Image"
            width={25}
            height={25}
          />
          <p className="text-lg font-bold text-gray-600 dela-gothic-one-bold">
            BdHealthClub
          </p>
        </Link>

        {/* Search Bar for larger screens */}
        <div className="hidden sm:block w-full">
          <SearchBar />
        </div>


        <Link href={linkHref} className="text-sm font-extrabold text-red-800 p-2 rounded hover:bg-orange-400 hover:text-white transition-colors">
          {linkText}
        </Link>  

        {/* Wishlist Button */}
        <button
          onClick={() => setIsWishlistOpen(true)}
          className="relative p-2 text-gray-700 hover:text-indigo-600 flex flex-row gap-2"
        >
          <span className="hidden lg:inline cursor-pointer hover:text-indigo-600 font-bold">
            WishList
          </span>
          <Heart className="h-6 w-6" />
          {wishlist.length > 0 && (
            <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-indigo-600 rounded-full">
              {wishlist.length}
            </span>
          )}
        </button>
      </div>

      {/* Search Bar for smaller screens */}
      <div className="block sm:hidden px-4 pb-3">
        <SearchBar />
      </div>
    
      <WishlistPopup isOpen={isWishlistOpen} onClose={() => setIsWishlistOpen(false)} />
    </nav>
  );
}