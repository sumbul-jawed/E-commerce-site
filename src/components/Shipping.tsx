import React from 'react';
import Image from 'next/image';

const Shipping = () => {
  const features = [
    {
      iconUrl: "/images/trophy.jpg",
      title: "High Quality",
      description: "crafted from top materials",
    },
    {
      iconUrl: "/images/guarantee.jpg",
      title: "Warranty Protection",
      description: "Over 2 years",
    },
    {
      iconUrl: "/images/shipping.jpg",
      title: "Free Shipping",
      description: "Order over 150 $",
    },
    {
      iconUrl: "/images/customer.jpg",
      title: "24 / 7 Support",
      description: "Dedicated support",
    },
  ];

  return (
    // Features Section
    <section className="bg-[#FAF3EA] md:h-[270px] py-10 md:py-0 flex px-2 md:px-[53px] mt-10 mb-5">
      <div className="flex flex-col gap-8 md:flex-row justify-between w-full">
        {features.map((item, index) => (
          <div key={index} className="flex gap-4 items-center">
            {/* Icon Section */}
            <div>
              <Image
                src={item.iconUrl}
                alt="icon"
                width={50}
                height={50}
                className="object-contain"
              />
            </div>
            {/* Text Section */}
            <div>
              <p className="text-customBlack font-semibold text-normal xl:text-[25px]">
                {item.title}
              </p>
              <p className="text-customGray">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Shipping;
