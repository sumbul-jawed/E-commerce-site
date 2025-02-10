"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { sanityFetch } from "@/sanity/lib/fetch";
import Image from "next/image";
import SearchAndFilter from "@/components/SearchAndFilter";


type Product = {
  _id: string;
  title: string;
  price: number;
  imageUrl: string;
};

async function fetchProducts() {
  const query = `*[_type == "product"]{
    _id,
    title,
    price,
    "imageUrl": productImage.asset->url
  }`;
  const products: Product[] = await sanityFetch({ query });
  return products;
}

export default function ShopPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, Infinity]);

  useEffect(() => {
    const getProducts = async () => {
      const productsData = await fetchProducts();
      setProducts(productsData);
    };
    getProducts();
  }, []);

  useEffect(() => {
    const filtered = products.filter((product) => {
      const matchesSearch = product.title.toLowerCase().includes(searchQuery);
      const matchesPrice =
        product.price >= priceRange[0] && product.price <= priceRange[1];
      return matchesSearch && matchesPrice;
    });
    setFilteredProducts(filtered);
  }, [products, searchQuery, priceRange]);

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col justify-center items-center text-center text-white h-full bg-gradient-to-t">
        <h2 className="text-4xl mb-2 font-bold text-black">Shop</h2>
        <h3 className="text-xl font-normal text-black">Home &gt; Shop</h3>
      </div>

      {/* Filter Section */}
      <div className="w-full sm:w-[1440px] p-4">
        <SearchAndFilter
          setSearchQuery={setSearchQuery}
          setPriceRange={setPriceRange}
        />
      </div>

      {/* Products Section */}
      <div className="max-w-7xl mx-auto p-6">
        <h2 className="text-3xl font-bold text-center my-8 underline mt-5">
          Search Your Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.length ? (
            filteredProducts.map((product) => (
              <div key={product._id} className="border p-4 rounded-lg shadow-md bg-white">
                <div className="h-64 w-full bg-gray-100 rounded-md overflow-hidden flex items-center justify-center">
                  <Image
                    src={product.imageUrl}
                    alt={product.title}
                    className="object-contain"
                    height={256}
                    width={256}
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
                    <button className="px-4 py-2 bg-yellow-500 text-black rounded-md hover:bg-yellow-200 transition duration-300">
                      View Product
                    </button>
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600">No products found.</p>
          )}
        </div>
      </div>
    </div>
  );
}
