"use client";

import { Dispatch, SetStateAction, useState } from "react";

// Props for SearchAndFilter
type SearchAndFilterProps = {
  setSearchQuery: Dispatch<SetStateAction<string>>;
  setPriceRange: Dispatch<SetStateAction<[number, number]>>;
};

export default function SearchAndFilter({
  setSearchQuery,
  setPriceRange,
}: SearchAndFilterProps) {
  const [price, setPrice] = useState<number | "">("");
  const [localQuery, setLocalQuery] = useState<string>("");

  const handleApplyFilters = () => {
    const numericPrice = Number(price);
    setPriceRange(numericPrice ? [0, numericPrice] : [0, Infinity]);
    setSearchQuery(localQuery.toLowerCase());
  };

  const handleResetFilters = () => {
    setPrice("");
    setLocalQuery("");
    setPriceRange([0, Infinity]);
    setSearchQuery("");
  };

  return (
    <div className="flex flex-wrap justify-between p-4 bg-[#fdcee9] rounded-md space-y-4 sm:space-y-0">
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search products..."
        className="w-full sm:w-1/3 p-2 border rounded-md"
        value={localQuery}
        onChange={(e) => setLocalQuery(e.target.value)}
      />

      {/* Price Filter */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2 w-full sm:w-auto space-y-2 sm:space-y-0">
        <input
          type="number"
          placeholder="Enter Price"
          className="p-2 border rounded-md flex-1 sm:flex-none"
          value={price}
          onChange={(e) => setPrice(e.target.value !== "" ? Number(e.target.value) : "")}
        />
        <button
          onClick={handleApplyFilters}
          className="bg-pink-300 text-black px-6 py-2 rounded-md border border-black hover:bg-pink-100 w-full sm:w-auto"
        >
          Apply
        </button>
        <button
          onClick={handleResetFilters}
          className="bg-pink-400 text-black px-6 py-2 rounded-md border border-black hover:bg-gray-100 w-full sm:w-auto"
        >
          All Products
        </button>
      </div>
    </div>
  );
}
