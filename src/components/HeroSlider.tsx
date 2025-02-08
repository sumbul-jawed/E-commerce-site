"use client";
import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";

const HeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "/images/image-9.png", // Main Image
    "/images/image-10.png", // Smaller Image 1
    "/images/image-11.png", // Smaller Image 2
    "/images/image-7.png", // Smaller Image 2
    "/images/image-4.png", // Smaller Image 2
    "/images/image-2.png", // Smaller Image 2
  ];

  // Change Image every 3 seconds (Auto-scroll)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // 3000 ms = 3 seconds

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, [images.length]); // Dependency added

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="bg-[#fdf7f1] py-12">
      <div className="flex flex-col lg:flex-row items-center gap-8 px-4 lg:px-8">
        {/* Left Content */}
        <div className="text-left flex-1 flex flex-col gap-6 px-4 lg:pl-[100px] lg:pr-[42px]">
          <div className="flex flex-col gap-2">
            <h2 className="text-[28px] lg:text-[40px] font-bold text-Gray1 leading-[1.2]">
              50+ Beautiful rooms inspiration
            </h2>
            <p className="text-[14px] lg:text-[16px] font-medium text-Gray2">
              Our designer already made a lot of beautiful prototypes of rooms that inspire you.
            </p>
          </div>
          <button className="bg-yellow-700 text-white px-6 lg:px-[36px] py-3 lg:py-[12px] font-semibold text-[14px] lg:text-[16px] w-fit">
            Explore More
          </button>
        </div>

        {/* Right Content */}
        <div className="flex-1 w-full flex flex-col lg:flex-row items-center justify-center gap-8">
          {/* Main Image */}
          <div className="relative w-full lg:w-[404px] h-[300px] lg:h-[582px] overflow-hidden">
            <Image
              src={images[currentIndex]}
              alt="Room Inspiration"
              className="w-full h-full object-cover"
              width={900}
              height={100}
            />
            <div className="absolute bottom-4 lg:bottom-6 left-4 lg:left-6 bg-white bg-opacity-70 p-4 lg:p-8">
              <p className="text-[12px] lg:text-[16px] font-medium text-Gray2">
                01 —— Bed Room
              </p>
              <h3 className="text-[18px] lg:text-[28px] font-semibold text-Gray1">
                Inner Peace
              </h3>
            </div>
            <div className="p-2 lg:p-[12px] bg-primary w-10 h-10 lg:w-[48px] lg:h-[48px] absolute bottom-4 lg:bottom-6 right-16 lg:right-24 flex items-center justify-center cursor-pointer" onClick={nextSlide}>
              <Icon
                icon="solar:arrow-right-outline"
                className="text-white w-4 h-4 lg:w-6 lg:h-6"
              />
            </div>
          </div>

          {/* Smaller Images */}
          <div className="flex flex-col justify-between w-full lg:w-auto gap-4 lg:gap-0">
            <div className="flex flex-col lg:flex-row h-full lg:h-[486px] gap-4 lg:gap-[24px]">
              <div className="w-full lg:w-[372px] h-[200px] lg:h-[450px] overflow-hidden">
                <Image
                  src={images[(currentIndex + 1) % images.length]} // Change image
                  alt="Modern Vibes"
                  className="w-full h-full object-cover"
                  width={900}
                  height={100}
                />
              </div>
              <div className="w-full lg:w-[150px] h-[150px] lg:h-[450px] overflow-hidden relative">
                <Image
                  src={images[(currentIndex + 2) % images.length]} // Change image
                  alt="Modern Vibes"
                  className="w-full h-full object-contain"
                  width={60}
                  height={100}
                />
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex gap-2 lg:gap-[20px] items-center justify-center lg:justify-start mt-4 lg:mt-0">
              <span className="w-[18px] lg:w-[27px] h-[18px] lg:h-[27px] rounded-full border border-primary cursor-pointer bg-transparent flex justify-center items-center">
                <div className="bg-primary w-[8px] lg:w-[11px] h-[8px] lg:h-[11px] rounded-full"></div>
              </span>
              <span className="bg-Gray5 w-[8px] lg:w-[11px] h-[8px] lg:h-[11px] rounded-full"></span>
              <span className="bg-Gray5 w-[8px] lg:w-[11px] h-[8px] lg:h-[11px] rounded-full"></span>
              <span className="bg-Gray5 w-[8px] lg:w-[11px] h-[8px] lg:h-[11px] rounded-full"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
