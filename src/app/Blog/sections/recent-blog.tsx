import Link from "next/link";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";

export default function RecentBlog() {
  return (
    <section className="flex flex-col gap-6">
      <div className="flex flex-col items-start w-full md:w-[311px]">
        <div className="flex items-center border border-black rounded-sm px-3 py-2 w-full h-[58px] mb-12">
          <input
            type="text"
            placeholder="Search..."
            className="flex-grow focus:outline-none text-sm px-4 py-3"
          />
          <CiSearch className="text-2xl text-black" />
        </div>
        <div className="flex flex-col">
          <h1 className="font-bold text-black text-2xl mb-4">Categories</h1>
          <div className="grid grid-cols-2 gap-6">
            <div className="text-sm text-gray-400">Crafts</div>
            <div className="text-sm text-gray-400 text-right">2</div>
            <div className="text-sm text-gray-400">Design</div>
            <div className="text-sm text-gray-400 text-right">8</div>
            <div className="text-sm text-gray-400">Handmade</div>
            <div className="text-sm text-gray-400 text-right">7</div>
            <div className="text-sm text-gray-400">Interior</div>
            <div className="text-sm text-gray-400 text-right">1</div>
            <div className="text-sm text-gray-400">Wood</div>
            <div className="text-sm text-gray-400 text-right">6</div>
          </div>
        </div>
      </div>

      {/* Image Below Categories */}
      <div className="mt-6 flex justify-center w-full">
        <img src="/images/pics.jpg" alt="pc" className="rounded-md w-full h-auto" />
      </div>
      <p className="text-2xl font-medium">Recent Posts</p>

      <div className="flex flex-col gap-3">
        {recent.map((item, index) => (
          <RecentBlogCard key={index} image={item.image} header={item.header} />
        ))}
      </div>
    </section>
  );
}

function RecentBlogCard({ image, header }: Recent) {
  return (
    <Link href={`/`} className="flex gap-2.5">
      <Image
        src={image}
        alt=""
        height={80}
        width={80}
        className="rounded-[10px]"
      />

      <div className="flex flex-col justify-center">
        <p className="text-sm">{header}</p>
        <p className="text-xs text-[#9F9F9F]">17 Sept, 2024</p>
      </div>
    </Link>
  );
}

const recent: Recent[] = [
  {
    image: "/images/rec1.png",
    header: "Going all-in with millennial design",
  },
  {
    image: "/images/rec2.png",
    header: "Exploring new ways of decorating",
  },
  {
    image: "/images/rec3.png",
    header: "Handmade pieces that took time to make",
  },
  { image: "/images/rec4.png", header: "Modern home in Milan" },
  { image: "/images/rec5.png", header: "Colorful office redesign" },
];

interface Recent {
  image: string;
  header: string;
}
