"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { IoMdStarOutline } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io"; // Optional, if you want to use an arrow icon
import Hero from "@/components/common/Hero";
import Shipping from "@/components/Shipping";

const Page = () => {
  const [dropdown, setDropdown] = useState<boolean>(false);

  return (
    <>
      {/* Top Section */}
<Hero title="Product Comparison" />

{/* Combined Section */}
<div className="flex flex-wrap items-start justify-center md:justify-between mt-8 px-4 md:px-16 relative">
  {/* Text Section */}
  <div className="flex flex-col mb-6 sm:mb-0 text-center md:text-left">
    <h1 className="text-[24px] sm:text-[28px] font-semibold leading-tight">
      Go to Product <br /> page for more <br />Products
    </h1>
    <span className="text-[#727272] mt-4 sm:mt-6 text-[18px] sm:text-[20px]">
      <button className="underline text-gray-400">View More</button>
    </span>
  </div>

  {/* Product Cards */}
  <div className="flex flex-wrap gap-8 justify-center md:justify-start">
    {/* Product Card 1 */}
    <div className="flex flex-col gap-2 items-center w-[90%] sm:w-[260px]">
      <Image src="/images/PC1.png" alt="Asgaard Sofa" width={250} height={177} className="mt-5 object-cover" />
      <h1 className="text-[20px] sm:text-[24px] font-semibold text-center">Asgaard Sofa</h1>
      <span className="text-center">Rs. 250,000.00</span>
      <div className="flex items-center gap-3 mt-2 justify-center">
        <span>4.7</span>
        <div className="flex items-center space-x-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <IoMdStarOutline key={i} className="text-yellow-500 text-xl" aria-hidden="true" />
          ))}
        </div>
        <div className="border-l border-[#727272] h-[30px]"></div>
        <span className="text-[#727272]">204 Reviews</span>
      </div>
    </div>

    {/* Product Card 2 */}
    <div className="flex flex-col gap-2 items-center w-[90%] sm:w-[260px]">
      <Image src="/images/PC2.png" alt="Asgaard Sofa" width={260} height={177} className="h-[177px] object-cover" />
      <h1 className="text-[20px] sm:text-[24px] font-semibold text-center">Asgaard Sofa</h1>
      <span className="text-center">Rs. 250,000.00</span>
      <div className="flex items-center gap-3 mt-2 justify-center">
        <span>4.7</span>
        <div className="flex items-center space-x-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <IoMdStarOutline key={i} className="text-yellow-500 text-xl" aria-hidden="true" />
          ))}
        </div>
        <div className="border-l border-[#727272] h-[30px]"></div>
        <span className="text-[#727272]">204 Reviews</span>
      </div>
    </div>
  </div>

  {/* Add Product Section */}
  <div className="flex flex-col w-full sm:w-1/3 mt-8 sm:mt-0">
    <h1 className="text-[20px] sm:text-[24px] font-semibold text-center sm:text-left">Add A Product</h1>
    <div className="relative mt-4 sm:mt-6">
      <button
        className="flex items-center justify-between w-full sm:w-[242px] h-[39px] text-white bg-[#B88E2F] px-4 rounded-md"
        onClick={() => setDropdown(!dropdown)}
      >
        Choose a Product
        <span className="ml-2">
          <IoIosArrowDown />
        </span>
      </button>
      <ul
        className={`absolute ${
          dropdown ? "block" : "hidden"
        } bg-white border border-gray-300 rounded-md w-full sm:w-[242px] mt-2 z-10`}
      >
        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Product 1</li>
        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Product 2</li>
        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Product 3</li>
      </ul>
    </div>
  </div>
</div>


      {/* Divider */}
<div className="border-b border-[#E8E8E8] w-full mt-16"></div>

{/* Specifications Section */}
<div className="flex flex-wrap items-start justify-center md:justify-between mt-14 px-4 md:px-16">
  {/* General Details */}
  <div className="flex flex-col gap-6 text-[18px] sm:text-[20px] w-full sm:w-1/3 mb-6 sm:mb-0">
    <h1 className="text-[24px] sm:text-[28px] font-semibold">General</h1>
    <h4>Sales Package</h4>
    <h4>Model Number</h4>
    <h4>Secondary Material</h4>
    <h4>Configuration</h4>
    <h4>Upholstery Material</h4>
    <h4>Upholstery Color</h4>
  </div>

  {/* Product Info */}
  <div className="flex flex-col gap-6 text-[18px] sm:text-[20px] w-full sm:w-1/3">
    <h4>1 sectional sofa</h4>
    <h4>TFCBLIGRBL6SRHS</h4>
    <h4>Solid Wood</h4>
    <h4>L-shaped</h4>
    <h4>Fabric + Cotton</h4>
    <h4>Bright Grey & Lion</h4>
  </div>

  {/* Product Info for Second Item */}
  <div className="flex flex-col gap-6 text-[18px] sm:text-[20px] w-full sm:w-1/3">
    <h4>1 Three Seater, 2 Single Seater</h4>
    <h4>DTUBLIGRBL568</h4>
    <h4>Solid Wood</h4>
    <h4>L-shaped</h4>
    <h4>Fabric + Cotton</h4>
    <h4>Bright Grey & Lion</h4>
  </div>
</div>

{/* Product Details */}
<div className="flex flex-wrap items-start justify-center md:justify-between mt-14 px-4 md:px-16">
  {/* Labels */}
  <div className="flex flex-col gap-6 text-[18px] sm:text-[20px] w-full sm:w-1/3 mb-6 sm:mb-0">
    <h1 className="text-[24px] sm:text-[28px] font-semibold">Product</h1>
    <h4>Filling Material</h4>
    <h4>Finish Type</h4>
    <h4>Adjustable Headrest</h4>
    <h4>Maximum Load Capacity</h4>
    <h4>Origin of Manufacture</h4>
  </div>

  {/* Product Info Column 1 */}
  <div className="flex flex-col gap-6 text-[18px] sm:text-[20px] w-full sm:w-1/3">
    <h4>Foam</h4>
    <h4>Bright Grey & Lion</h4>
    <h4>No</h4>
    <h4>280 KG</h4>
    <h4>India</h4>
  </div>

  {/* Product Info Column 2 */}
  <div className="flex flex-col gap-6 text-[18px] sm:text-[20px] w-full sm:w-1/3">
    <h4>Matte</h4>
    <h4>Bright Grey & Lion</h4>
    <h4>Yes</h4>
    <h4>300 KG</h4>
    <h4>India</h4>
  </div>
</div>

{/* Warranty Details */}
<div className="flex flex-wrap items-start justify-center md:justify-between mt-14 px-4 md:px-16">
  {/* Column 1 - Warranty Labels */}
  <div className="flex flex-col gap-6 w-full sm:w-1/3 mb-6 sm:mb-0">
    <h1 className="text-[24px] sm:text-[28px] font-semibold">Warranty</h1>
    <h4>Warranty Summary</h4>
    <h4>Warranty Service Type</h4>
    <h4>Covered in Warranty</h4>
    <h4>Not Covered in Warranty</h4>
    <h4>Domestic Warranty</h4>
  </div>

  {/* Column 2 - Warranty Details for Product 1 */}
  <div className="flex flex-col gap-6 w-full sm:w-1/3">
    <h4>1 Year Manufacturing Warranty</h4>
    <h4>For Warranty Claims or Any Product Related Issues Please Email at operations@trevifurniture.com</h4>
    <h4>Warranty Against Manufacturing Defect</h4>
    <h4>
      The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear.
    </h4>
    <h4>1 Year</h4>
    <button className="w-[300px] h-[50px] bg-[#B88E2F] text-white mt-6 rounded-lg shadow-lg">Add To Cart</button>
  </div>

  {/* Column 3 - Warranty Details for Product 2 */}
  <div className="flex flex-col gap-6 w-full sm:w-1/3">
    <h4>1.2 Year Manufacturing Warranty</h4>
    <h4>For Warranty Claims or Any Product Related Issues Please Email at support@xyz.com</h4>
    <h4>Warranty of the product is limited to manufacturing defects only.</h4>
    <h4>
      The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use.
    </h4>
    <h4>3 Months</h4>
    <button className="w-[300px] h-[50px] bg-[#B88E2F] text-white mt-6 rounded-lg shadow-lg">Add To Cart</button>
  </div>
</div>

<Shipping />

    </>
  );
};

export default Page;
