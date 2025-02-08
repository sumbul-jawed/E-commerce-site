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

  // Pagination state
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [productsPerPage] = useState<number>(8); // Adjust as needed

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

  // Paginated products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  // Pagination controls
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex flex-col items-center">
      {/* Background Section */}
      <div
        className="relative w-full sm:w-[1440px] h-[316px] sm:h-[500px] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/shop.png')" }}
      >
        <div className="flex flex-col justify-center items-center text-center text-white h-full bg-gradient-to-t">
          <h2 className="text-4xl mb-2 font-bold text-black">Shop</h2>
          <h3 className="text-xl font-normal text-black">Home &gt; Shop</h3>
        </div>
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
          Our Products List
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentProducts.length ? (
            currentProducts.map((product) => (
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

        {/* Pagination Section */}
        <div className="flex justify-center mt-8">
          <button
            onClick={handlePrevPage}
            className="px-4 py-2 bg-gray-300 text-black rounded-l-md hover:bg-gray-400 transition duration-300"
            disabled={currentPage === 1}
          >
            Prev
          </button>
          
          {/* Show pages 1, 2, 3 dynamically */}
          {totalPages >= 1 && (
            <button
              onClick={() => handlePageChange(1)}
              className={`px-4 py-2 ${currentPage === 1 ? 'bg-yellow-500' : 'bg-gray-300'} text-black hover:bg-gray-400 transition duration-300`}
            >
              1
            </button>
          )}
          
          {totalPages >= 2 && (
            <button
              onClick={() => handlePageChange(2)}
              className={`px-4 py-2 ${currentPage === 2 ? 'bg-yellow-500' : 'bg-gray-300'} text-black hover:bg-gray-400 transition duration-300`}
            >
              2
            </button>
          )}
          
          {totalPages >= 3 && (
            <button
              onClick={() => handlePageChange(3)}
              className={`px-4 py-2 ${currentPage === 3 ? 'bg-yellow-500' : 'bg-gray-300'} text-black hover:bg-gray-400 transition duration-300`}
            >
              3
            </button>
          )}

          <button
            onClick={handleNextPage}
            className="px-4 py-2 bg-gray-300 text-black rounded-r-md hover:bg-gray-400 transition duration-300"
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
