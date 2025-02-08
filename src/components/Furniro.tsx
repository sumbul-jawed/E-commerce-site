import Image from "next/image";

export default function Furniro() {
  return (
    <div className="w-full pt-[30px] md:pt-[67px] pb-[50px] bg-lightBG">
      {/* Text Section */}
      <div className="text-center relative w-full md:top-5 top-0 px-4">
        <h3 className="text-[14px] sm:text-[16px] md:text-[20px] font-semibold text-Gray2">
          Share your setup with
        </h3>
        <h2 className="text-[24px] sm:text-[28px] md:text-[40px] font-bold text-Gray1">
          #FuniroFurniture
        </h2>
      </div>

      {/* Image Section */}
      <div className="flex justify-center items-center w-full mt-6">
        <Image
          src="/images/furniro.jpg"
          width={1500}
          height={780}
          alt="Setup Images"
          className="w-full max-w-[90%] sm:max-w-[95%] md:max-w-[100%] h-auto"
        />
      </div>
    </div>
  );
}
