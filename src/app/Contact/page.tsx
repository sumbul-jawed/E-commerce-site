import React from 'react';
import Image from 'next/image';
import { FaLocationDot, FaPhone, FaClock } from "react-icons/fa6";
import Shipping from "@/components/Shipping";

const page = () => {
    return (
        <>
            <div>
                <Image
                    src="/images/contact.jpg"
                    alt="Contact Banner"
                    width={1440}
                    height={316}
                    className="w-full h-auto mt-20"
                />
            </div>
            <div className="flex flex-col items-center justify-center mt-10 px-4 lg:mt-20">
                <h1 className="text-[24px] sm:text-[30px] lg:text-[36px] font-semibold text-center">
                    Get In Touch With Us
                </h1>
                <p className="text-[14px] sm:text-[16px] text-[#9F9F9F] mt-4 text-center max-w-[90%] lg:max-w-[644px]">
                    For more information about our product & services, please feel free to drop us an email.
                    Our staff will always be there to help you out. Do not hesitate!
                </p>
            </div>

            <div className="flex flex-col lg:flex-row items-start justify-between mt-12 px-4 lg:px-16 gap-10">
                {/* Info Section */}
                <div className="flex flex-col gap-8 lg:w-1/2">
                    {[
                        {
                            img: <FaLocationDot className="text-black text-[28px]" aria-label="Location icon" />,
                            title: "Address",
                            desc: "236 5th SE Avenue, New York NY10000, United States",
                        },
                        {
                            img: <FaPhone className="text-black text-[28px]" aria-label="Phone icon" />,
                            title: "Phone",
                            desc: "Mobile: +(84) 546-6789\nHotline: +(84) 456-6789",
                        },
                        {
                            img: <FaClock className="text-black text-[28px]" aria-label="Clock icon" />,
                            title: "Working Time",
                            desc: "Monday-Friday: 9:00 - 22:00\nSaturday-Sunday: 9:00 - 21:00",
                        },
                    ].map((info, index) => (
                        <div key={index} className="flex items-start gap-4">
                            <div>{info.img}</div>
                            <div>
                                <h2 className="text-[18px] sm:text-[20px] lg:text-[24px] font-semibold">
                                    {info.title}
                                </h2>
                                <p className="text-[14px] sm:text-[16px] text-gray-700 whitespace-pre-line">
                                    {info.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Contact Form */}
                <div className="flex flex-col lg:w-1/2 gap-6">
                    {[
                        { label: "Your Name", placeholder: "Enter your name" },
                        { label: "Email Address", placeholder: "Enter your email" },
                        { label: "Subject", placeholder: "Enter subject (optional)" },
                        { label: "Message", placeholder: "Enter your message" },
                    ].map((field, index) => (
                        <div key={index} className="flex flex-col">
                            <label className="text-[16px] font-semibold mb-2">{field.label}</label>
                            <input
                                type="text"
                                placeholder={field.placeholder}
                                className="border border-gray-300 rounded-md px-4 py-3 w-full text-[14px] focus:ring-2 focus:ring-[#B88E2F] focus:outline-none"
                            />
                        </div>
                    ))}
                    <button className="w-full lg:w-[237px] h-[55px] bg-[#B88E2F] text-white rounded-md mt-4 flex items-center justify-center text-[16px] font-semibold mb-10">
                        Submit
                    </button>
                </div>
            </div>
            <Shipping/>
        </>
    );
};

export default page;
