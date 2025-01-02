import { useRouter } from "next/navigation"
import React, { useState, useEffect, useRef } from 'react'
import { Product } from '../data/types'
import { items } from '../data/items'
import { Input } from "@/components/ui/input"

export function SearchBar() {

    const [searchText, setSearchText] = useState("");
    const [suggestions, setSuggestions] = useState<Product[]>([]);
    const router = useRouter();
    const suggestionsRef = useRef<HTMLDivElement>(null); // Create a ref for the dropdown

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
            ) as Product[]
          );
        } else {
          setSuggestions([]);
        }
      };
    
      const handleClickOutside = (event: MouseEvent) => {
        if (
          suggestionsRef.current &&
          !suggestionsRef.current.contains(event.target as Node)
        ) {
          setSuggestions([]); // Clear suggestions if clicked outside
        }
      };
    
      useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, []);

    return(
        <div className="flex-1 w-full">
          <div className="relative flex justify-center w-full">
            {/* Input with Search Icon */}
            <div className="relative w-full max-w-[600px] min-w-[200px]">
              <span className="absolute inset-y-0 left-3 flex items-center text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM21 21l-4.35-4.35"
                  />
                </svg>
              </span>
              <Input
                type="text"
                placeholder="Search products..."
                className="w-full pl-10"
                value={searchText}
                onChange={handleInputChange}
                onKeyDown={handleSearch}
              />
            </div>

            {suggestions.length > 0 && (
              <div
                ref={suggestionsRef} // Attach the ref to the suggestions container
                className="absolute top-full mt-2 w-full z-10 bg-white border border-gray-300 shadow-lg rounded-md"
              >
                <ul>
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
              </div>
            )}
          </div>
        </div>
    )
}