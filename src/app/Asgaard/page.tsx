"use client";
import React from 'react';
import Link from 'next/link';
import { IoMdStarOutline } from "react-icons/io";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa6";

// Navigation Component
function Navigation() {
  return (
    <div className='w-full max-w-[1600px] px-5 py-6 bg-[#F9F1E7]'>
      <nav className="flex space-x-2 pl-20 text-gray-400 font-semibold">
        <Link href="/" className="hover:text-black">Home</Link>
        <span className="text-black font-bold">&gt;</span>
        <Link href="/Shop" className="hover:text-black">Shop</Link>
        <span className="text-black font-bold">&gt;</span>
        <div className='font-bold text-black ml-10'> |</div>
        <h2 className="text-black font-semibold">Asgaard Sofa</h2>
      </nav>
    </div>
  );
}

const OurProducts = [
  {
    id: 1,
    name: "Syltherine",
    fullname: "Stylish cafe chair",
    discount: "-30%",
    price: "Rp 2.500.000",
    originalPrice: "Rp 3.500.000",
    image: "/images/image-1.png",
  },
  {
    id: 2,
    name: "Leviosa",
    fullname: "Stylish cafe chair",
    price: "Rp 2.500.000",
    originalPrice: "",
    image: "/images/image-2.png",
  },
  {
    id: 3,
    name: "Lolito",
    fullname: "Luxury big sofa",
    discount: "-50%",
    price: "Rp 7.000.000",
    originalPrice: "Rp 14.000.000",
    image: "/images/image-3.png",
  },
  {
    id: 4,
    name: "Respira",
    fullname: "Outdoor bar table and stool",
    price: "Rp 500.000",
    originalPrice: "",
    image: "/images/image-4.png",
  },
];

// Products Component
function Products() {
  return (
    <div className="w-full border-b-2 py-8 md:py-16 flex flex-col justify-center bg-[#F4F5F7] px-4 md:px-8">
      <div className="flex flex-col gap-8 md:gap-12 w-full mx-auto">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-[28px] md:text-[40px] font-bold text-gray-800">Related Products</h1>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 justify-center">
          {OurProducts.map((product) => (
            <div
              className="bg-white group relative overflow-hidden w-full max-w-[285px] mx-auto"
              key={product.id}
            >
              {/* Image Container */}
              <div className="w-full h-[200px] sm:h-[240px] md:h-[300px]">
                <div
                  className="flex h-full w-full bg-no-repeat bg-center bg-cover relative group-hover:scale-105 transition-transform duration-300"
                  style={{
                    backgroundImage: `url(${product.image})`,
                  }}
                >
                  {/* Discount Badge */}
                  {product.discount && (
                    <div className="h-[36px] md:h-[48px] w-[36px] md:w-[48px] bg-red-600 rounded-full flex items-center justify-center absolute top-4 right-4 md:top-6 md:right-6">
                      <p className="text-[12px] md:text-[16px] font-medium text-white">{product.discount}</p>
                    </div>
                  )}
                </div>

                {/* Add to Cart Button */}
                <div className="h-full absolute bottom-0 w-full flex flex-col gap-2 md:gap-4 items-center justify-center bg-opacity-0 opacity-0 group-hover:bg-opacity-70 group-hover:opacity-100 bg-gray-800 transition-opacity duration-300">
                  <button className="text-sm md:text-[16px] font-medium text-[#B88E2F] text-primary bg-white px-6 md:px-10 py-2 md:py-3">
                    Add to Cart
                  </button>
                </div>
              </div>

              {/* Product Details */}
              <div className="w-full pt-4 md:pt-6 pb-6 px-4">
                <h2 className="text-[18px] md:text-[24px] font-semibold text-gray-800">{product.name}</h2>
                <h4 className="text-[14px] md:text-[16px] font-medium text-gray-600">{product.fullname}</h4>
                <div className="w-full flex gap-2 md:gap-4 items-center">
                  <p className="text-[16px] md:text-[20px] font-semibold text-gray-800">{product.price}</p>
                  {product.originalPrice && (
                    <p className="text-[14px] md:text-[16px] font-normal text-gray-400 line-through">{product.originalPrice}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        <div className="w-full text-center mt-5">
          <button className="text-sm md:text-[16px] border-[#B88E2F] font-semibold bg-white text-[#B88E2F] py-2 md:py-[12px] px-8 md:px-[72px] text-primary border hover:bg-primary hover:text-[#B88E2F] transition-colors">
            Show More
          </button>
        </div>
      </div>
    </div>
  );
}

function Page() {
  return (
    <div className="w-full max-w-[1600px] px-4 py-6 bg-white flex flex-col rounded mt-20">
      <Navigation />

      {/* Image and Content Section */}
<div className="flex flex-col lg:flex-row mt-10 w-full px-4 lg:px-20 gap-10">
  {/* Image on the Left */}
  <div className="w-full lg:w-1/2">
    <img
      src="/images/blog.jpg"
      alt="Asgaard Sofa"
      className="w-full h-[300px] lg:h-[500px] object-cover rounded"
    />
  </div>

  {/* Content on the Right */}
  <div className="w-full lg:w-1/2 flex flex-col justify-start">
    <h1 className="text-black font-bold text-2xl lg:text-3xl">Asgaard Sofa</h1>
    <p className="text-black mt-2 text-lg lg:text-xl">Rs. 250,000.00</p>

    {/* Star Rating */}
    <div className="flex items-center mt-2 space-x-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <IoMdStarOutline
          key={i}
          className="text-yellow-500 text-lg lg:text-xl"
          aria-hidden="true"
        />
      ))}
      <span className="text-gray-600 text-sm lg:text-base ml-2">| 5 customer reviews</span>
    </div>

    {/* Product Description */}
    <p className="mt-4 text-gray-700 leading-relaxed">
      Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.
    </p>

    {/* Size Selection */}
    <p className="mt-4 font-bold text-black">Size</p>
    <div className="flex space-x-4 mt-2">
      <button className="px-4 py-2 border rounded hover:bg-pink-200">L</button>
      <button className="px-4 py-2 border rounded hover:bg-pink-200">XL</button>
      <button className="px-4 py-2 border rounded hover:bg-pink-200">XS</button>
    </div>

    {/* Color Selection */}
    <p className="mt-6 font-bold text-gray-700">Color</p>
    <div className="flex space-x-4 mt-2">
      <div className="w-8 h-8 rounded-full bg-purple-500 border border-gray-300"></div>
      <div className="w-8 h-8 rounded-full bg-black border border-gray-300"></div>
      <div className="w-8 h-8 rounded-full bg-yellow-800 border border-gray-300"></div>
    </div>

    {/* Quantity and Actions */}
    <div className="flex flex-wrap items-center mt-6 space-x-4">
      <div className="flex items-center space-x-2">
        <button className="px-6 py-2 border rounded hover:bg-pink-200">
          - <span className="mx-4">1</span> +
        </button>
      </div>
      <button className="px-6 py-2 bg-white text-black border rounded hover:bg-pink-200">
        Add to Cart
      </button>
      <button className="px-6 py-2 bg-white text-black border rounded hover:bg-pink-200 whitespace-nowrap">
    + Compare
  </button>
    </div>

    <hr className="mt-6 border-gray-300" />

    {/* Additional Info */}
    <ul className="mt-4 space-y-4 text-gray-400">
      <li>
        <span className="font-semibold">SKU</span> <span className="ml-4">:</span> SSOO1
      </li>
      <li>
        <span className="font-semibold">Category</span> <span className="ml-1">:</span> Sofas
      </li>
      <li>
        <span className="font-semibold">Tags</span> <span className="ml-4">:</span> Sofa, Chair, Home, Shop
      </li>
      <li className="flex items-center space-x-2">
        <span className="font-semibold">Share</span> <span className="ml-4">:</span>
        <FaFacebook className="cursor-pointer text-black" />
        <FaLinkedin className="cursor-pointer text-black" />
        <FaTwitter className="cursor-pointer text-black" />
      </li>
    </ul>
  </div>
</div>


      {/* Divider */}
      <hr className="my-8 border-gray-300" />

      {/* Product Description Section */}
      <div className="mt-5 px-20 flex justify-center text-center space-x-10 pb-4">       
        <h2 className="text-xl font-bold text-black cursor-pointer">Description</h2>
        <h3 className="text-lg font-semibold text-gray-700 cursor-pointer">Additional Information</h3>
        <h3 className="text-lg font-semibold text-gray-700 cursor-pointer">Reviews [5]</h3>
      </div>

      <p className="mt-6 text-gray-700 leading-relaxed flex justify-center text-center">
        Embodying the raw, wayward spirit of rock & roll, the Kilburn portable active stereo speaker takes the unmistakable look and  
        Embodying the raw, wayward spirit of rock <br />roll, the Kilburn portable  speaker takes the unmistakable look and 
        Embodying the raw, wayward spirit of rock speaker takes the unmistakable look and 
        sound of Marshall, 
        
 
      </p>

      <p className="mt-4 text-gray-700 leading-relaxed flex justify-center text-center">
      Weighing in under 7 pounds, the Kilburn is a lightweight piece are of vintage-styled 
        engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn <br />is sre a compact, 
        stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both
        articulate and pronounced. <br />way on The analogue knobs allow you to fine-tune the controls to your personal preferences while the 
        guitar-influenced leather strap enables easy and stylish trave
      </p>
      <div className="flex justify-center items-center mt-10 mb-10">
        <img src="/images/sofa2.png" alt="sf" className='w-[1239px] h-[348px]' />
      </div>
      {/* Related Products Section */}
      <Products />
    </div>
  );
}

export default Page; 