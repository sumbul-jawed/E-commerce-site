"use client";

import { Dispatch, SetStateAction, useState } from "react";

type SearchAndFilterProps = {
  setSearchQuery: Dispatch<SetStateAction<string>>;
};

export default function SearchAndFilter({
  setSearchQuery,
}: SearchAndFilterProps) {
  const [localQuery, setLocalQuery] = useState<string>("");

  const handleApplyFilters = () => {
    setSearchQuery(localQuery.toLowerCase());
  };

  const handleResetFilters = () => {
    setLocalQuery("");
    setSearchQuery("");
  };

  return (
    <div className="flex flex-wrap justify-between p-4 bg-[#fdcee9] rounded-md">
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search products..."
        className="w-full sm:w-1/3 p-2 border rounded-md"
        value={localQuery}
        onChange={(e) => setLocalQuery(e.target.value)}
      />

      <div className="flex items-center space-x-2 mt-4 sm:mt-0">
        <button
          onClick={handleApplyFilters}
          className="bg-pink-300 text-black px-6 py-2 rounded-md border border-black hover:bg-pink-100"
        >
          Apply
        </button>
        <button
          onClick={handleResetFilters}
          className="bg-pink-400 text-black px-6 py-2 rounded-md border border-black hover:bg-gray-100"
        >
          All Products
        </button>
      </div>
    </div>
  );
}
