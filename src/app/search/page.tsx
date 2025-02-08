"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";

type Product = {
  _id: string;
  title: string;
  price: number;
  imageUrl: string;
};

export default function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams?.get("query");
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (query) {
      fetch(`/api/products?search=${query}`)
        .then((res) => res.json())
        .then((data) => setProducts(data))
        .catch((error) => console.error("Error fetching products:", error));
    }
  }, [query]);

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6">Search Results</h2>
      {products.length === 0 ? (
        <p>No products found for &ldquo;{query}&rdquo;</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product._id} className="border p-4 rounded-lg shadow-md">
              <Image
                src={product.imageUrl}
                alt={product.title}
                className="w-full h-64 object-cover rounded-md"
                width={300}
                height={200}
              />
              <h3 className="text-lg font-bold mt-4">{product.title}</h3>
              <p className="text-gray-700 mt-2">${product.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
