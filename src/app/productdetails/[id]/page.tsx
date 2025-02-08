// /pages/productsDetails/[id]/page.tsx

"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { sanityFetch } from "@/sanity/lib/fetch";
import Image from "next/image";
import { useCart } from "@/components/CartContext"; // Import CartContext

// Product Type
type Product = {
  _id: string;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
};

type CartItem = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  size: string | null;
  color: string | null;
  quantity: number;
};

async function getProductDetails(id: string) {
  const query = `*[_type == "product" && _id == $id][0]{_id, title, description, price, "imageUrl": productImage.asset->url}`;
  const product: Product = await sanityFetch({ query, params: { id } });
  return product;
}

export default function ProductDetailsPage() {
  const { id } = useParams();
  const { addToCart } = useCart(); // Accessing addToCart method from context

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [quantity, setQuantity] = useState<number>(1);

  const availableSizes = ["Small", "Medium", "Large", "Extra Large"];
  const availableColors = ["Black", "Brown", "Silver", "Blue", "White"];

  useEffect(() => {
    if (id) {
      const fetchProductDetails = async () => {
        const fetchedProduct = await getProductDetails(id as string);
        setProduct(fetchedProduct);
        setLoading(false);
      };
      fetchProductDetails();
    }
  }, [id]);

  const toggleDescription = () => setShowFullDescription(!showFullDescription);

  const handleQuantityChange = (operation: "increment" | "decrement") => {
    setQuantity((prev) => (operation === "increment" ? prev + 1 : prev > 1 ? prev - 1 : 1));
  };

  const handleAddToCart = () => {
    if (!product) return;
    if (!selectedSize || !selectedColor) {
      alert("Please select size and color before adding to cart.");
      return;
    }

    const newItem: CartItem = {
      id: product._id,
      title: product.title,
      price: product.price,
      imageUrl: product.imageUrl,
      size: selectedSize,
      color: selectedColor,
      quantity,
    };

    addToCart(newItem); // Using addToCart from context
    alert("Product added to cart!");
  };

  if (loading) {
    return <div className="text-center p-10 text-xl text-gray-600">Loading...</div>;
  }

  if (!product) {
    return <div className="text-center p-10 text-xl text-gray-600">Product not found.</div>;
  }

  const descriptionLimit = 200;
  const limitedDescription = product.description.substring(0, descriptionLimit);
  const fullDescription = product.description;

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-4xl font-extrabold text-center mb-10 text-gray-800">Product Details</h1>

      <div className="flex flex-col md:flex-row items-center gap-12 bg-white p-6 rounded-lg shadow-lg">
        <div className="flex-shrink-0">
          <Image
            src={product.imageUrl}
            alt={product.title}
            className="rounded-lg border border-gray-200 shadow-sm"
            width={400}
            height={400}
          />
        </div>

        <div className="flex flex-col w-full">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">{product.title}</h2>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            {showFullDescription ? fullDescription : `${limitedDescription}...`}
          </p>

          <button className="text-black font-semibold mb-6" onClick={toggleDescription}>
            {showFullDescription ? "Show Less" : "Read More"}
          </button>

          {/* Size Selector */}
          <div className="mt-4">
            <label className="block mb-2 text-yellow-600 font-extrabold">Select Size:</label>
            <select
              value={selectedSize || ""}
              onChange={(e) => setSelectedSize(e.target.value)}
              className="p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:bg-yellow-50"
            >
              <option value="" disabled>
                Choose Size
              </option>
              {availableSizes.map((size) => (
                <option key={size} value={size} className="text-gray-800">
                  {size}
                </option>
              ))}
            </select>
          </div>

          {/* Color Selector */}
          <div className="mt-4">
            <label className="block mb-2 text-yellow-600 font-extrabold">Select Color:</label>
            <select
              value={selectedColor || ""}
              onChange={(e) => setSelectedColor(e.target.value)}
              className="p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-yellow-500"
            >
              <option value="" disabled>
                Choose Color
              </option>
              {availableColors.map((color) => (
                <option key={color} value={color}>
                  {color}
                </option>
              ))}
            </select>
          </div>

          {/* Quantity Selector */}
          <div className="mt-4 flex items-center space-x-4">
            <label className="text-yellow-600 font-extrabold">Quantity:</label>
            <button
              onClick={() => handleQuantityChange("decrement")}
              className="px-3 py-1 bg-yellow-300 text-black rounded-md"
            >
              -
            </button>
            <span className="px-3 py-1 border rounded-md">{quantity}</span>
            <button
              onClick={() => handleQuantityChange("increment")}
              className="px-3 py-1 bg-yellow-300 text-black rounded-md"
            >
              +
            </button>
          </div>

          {/* Price and Buttons */}
          <div className="mt-6">
            <p className="text-xl font-semibold text-gray-600 mb-4">
              Price: <span className="text-gray-800">${(product.price * quantity).toFixed(2)}</span>
            </p>

            <button
              onClick={handleAddToCart}
              className="px-6 py-3 bg-yellow-600 text-white rounded-lg font-medium hover:bg-yellow-400 transition"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
