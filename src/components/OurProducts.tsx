"use client";
// import navigate from "next/Navigation";
import { Icon } from "@iconify/react";
import Link from "next/link";

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
  {
    id: 5,
    name: "Grifo",
    fullname: "Night lamp",
    price: "Rp 1.500.000",
    originalPrice: "",
    image: "/images/image-5.png",
  },
  {
    id: 6,
    name: "Muggo",
    fullname: "Small mug",
    price: "Rp 150.000",
    originalPrice: "",
    image: "/images/image-6.png",
  },
  {
    id: 7,
    name: "Pingky",
    fullname: "Cute bed set",
    discount: "-50%",
    price: "Rp 7.000.000",
    originalPrice: "Rp 14.000.000",
    image: "/images/image-7.png",
  },
  {
    id: 8,
    name: "Potty",
    fullname: "Minimalist flower pot",
    price: "Rp 500.000",
    originalPrice: "",
    image: "/images/image-8.png",
  },
];

export default function Products() {
  return (
    <div className="w-full border-b-2 py-8 md:py-16 flex flex-col justify-center bg-[#F4F5F7] px-4 md:px-8">
      <div className="flex flex-col gap-8 md:gap-12 w-full mx-auto">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-[28px] md:text-[40px] font-bold text-gray-800">Our Products</h1>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 justify-center">
          {/* Cards for Products */}
          {OurProducts.map((product, index) => (
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
                  {/* NEW Badge */}
                  {(index === 3 || index === 5 || index === 7) && (
                    <div className="h-[36px] md:h-[48px] w-[36px] md:w-[48px] bg-green-600 rounded-full flex items-center justify-center absolute top-4 right-4 md:top-6 md:right-6">
                      <p className="text-[12px] md:text-[16px] font-medium text-white">NEW</p>
                    </div>
                  )}
                  {/* Discount Badge */}
                  {(index === 0 || index === 2 || index === 6) && (
                    <div className="h-[36px] md:h-[48px] w-[36px] md:w-[48px] bg-red-600 rounded-full flex items-center justify-center absolute top-4 right-4 md:top-6 md:right-6">
                      <p className="text-[12px] md:text-[16px] font-medium text-white">{product.discount}</p>
                    </div>
                  )}
                </div>

                {/* Add to Cart Button */}
                <div className="h-full absolute bottom-0 w-full flex flex-col gap-2 md:gap-4 items-center justify-center bg-opacity-0 opacity-0 group-hover:bg-opacity-70 group-hover:opacity-100 bg-gray-800 transition-opacity duration-300">
                  <Link href="/Asgaard" className="text-sm md:text-[16px] font-medium text-[#B88E2F] text-primary bg-white px-6 md:px-10 py-2 md:py-3">
                    view product
                  </Link>
                  <div className="flex gap-2 md:gap-4 text-white text-xs md:text-sm mt-1">
                    <button className="flex items-center gap-1 md:gap-2 font-semibold">
                      <Icon icon="gridicons:share" /> Share
                    </button>
                    <Link href={"/Products"} className="flex items-center gap-1 md:gap-2 font-semibold">
                      <Icon icon="fluent:arrow-swap-28-regular" /> Compare
                    </Link>
                    <button className="flex items-center gap-1 md:gap-2 font-semibold">
                      <Icon icon="mingcute:heart-line" /> Like
                    </button>
                  </div>
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
