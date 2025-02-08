import Image from "next/image";

type Category = {
  id: number;
  name: string;
  imageUrl: string;
};

export default function CategoriesSection({ categories }: { categories: Category[] }) {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6 underline">Our Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map((category) => (
          <div
            key={category.id}
            className="relative w-full h-64 overflow-hidden border border-yellow-300 rounded-lg shadow-md group"
          >
            {/* Image */}
            <Image
              src={category.imageUrl}
              alt={category.name}
              className="w-full h-full object-cover"
              layout="fill"
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-white text-2xl font-bold">{category.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
