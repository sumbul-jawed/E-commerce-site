"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { sanityFetch } from "@/sanity/lib/fetch";
import SearchAndFilter from "@/components/SearchAndFilter";

 type Product = {
   _id: string;
   title: string;
   price: number;
   imageUrl: string;
};

async function fetchProducts(query: string) {
  const sanityQuery = `*[_type == "product" && title match "${query}*"]{
    _id,
    title,
    price,
    "imageUrl": productImage.asset->url
  }`;
  const products: Product[] = await sanityFetch({ query: sanityQuery });
  return products;
}

export default function ShopPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, Infinity]);

  useEffect(() => {
    const getProducts = async () => {
      if (searchQuery.trim() !== "") {
        const productsData = await fetchProducts(searchQuery);
        setProducts(productsData);
      } else {
        setProducts([]); // Clear products when search is empty
      }
    };
    getProducts();
  }, [searchQuery]);

  return (
    <div className="flex flex-col items-center">
      {/* Filter Section */}
      <div className="w-full sm:w-[1440px] p-4 mt-20">
        <SearchAndFilter
          setSearchQuery={setSearchQuery}
          setPriceRange={setPriceRange}
        />
      </div>

      {/* Products Section */}
      <div className="max-w-7xl mx-auto p-6">
        <h2 className="text-3xl font-bold text-center my-8 underline mt-5">
          Search Results
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.length ? (
            products.map((product) => (
              <div
                key={product._id}
                className="border p-4 rounded-lg shadow-md bg-white flex flex-col justify-between"
              >
                <div className="h-64 w-full bg-gray-100 rounded-md overflow-hidden flex items-center justify-center">
                  <img
                    src={product.imageUrl}
                    alt={product.title}
                    className="object-contain w-full h-full"
                  />
                </div>
                <h3 className="text-lg font-bold mt-4 text-gray-900 text-center">
                  {product.title}
                </h3>
                <p className="text-gray-700 text-center mt-2 font-medium">
                  ${product.price.toFixed(2)}
                </p>
                <div className="flex justify-center mt-4">
                  <Link href={`/productdetails/${product._id}`}>
                    <button className="px-4 py-2 bg-yellow-500 text-black rounded-md hover:bg-yellow-200 transition duration-300 w-full">
                      View Product
                    </button>
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600">
              No products found. Please search to see results.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
