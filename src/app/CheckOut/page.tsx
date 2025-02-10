"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

interface CartItem {
  id: string;
  title: string;
  quantity: number;
  price: number;
}

export default function CheckoutPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [paymentMethod, setPaymentMethod] = useState<string>("cash");
  const searchParams = useSearchParams();

  useEffect(() => {
    const cartParam = searchParams.get("cart");
    if (cartParam) {
      try {
        const cartData = JSON.parse(cartParam);
        setCart(cartData);
      } catch (error) {
        console.error("Invalid cart data", error);
      }
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const orderData = {
      cart,
      paymentMethod,
      customerInfo: {},
    };

    try {
      const response = await fetch("/api/orders", {
        method: "POST",
        body: JSON.stringify(orderData),
        headers: { "Content-Type": "application/json" },
      });
      if (response.ok) {
        alert("Order placed successfully!");
      } else {
        alert("Failed to place order.");
      }
    } catch (error) {
      console.error("Error placing order:", error);
    }
  };

  const handlePaymentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentMethod(event.target.value);
  };

  return (
    <div>
      <h1 className="text-[36px] font-semibold mb-5">Billing details</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex flex-wrap gap-6">
          <div className="w-full sm:w-[211px]">
            <label className="block mb-2 font-medium">First Name</label>
            <input type="text" placeholder="John" className="w-full h-[50px] border border-black rounded-md p-2" required />
          </div>
          <div className="w-full sm:w-[211px]">
            <label className="block mb-2 font-medium">Last Name</label>
            <input type="text" placeholder="Doe" className="w-full h-[50px] border border-black rounded-md p-2" required />
          </div>
        </div>

        <div>
          <label className="block mb-2 font-medium">Phone</label>
          <input type="tel" placeholder="123-456-7890" className="w-full lg:w-[453px] h-[50px] border border-black rounded-md p-2" required />
        </div>

        <div className="mt-10">
          <h2 className="text-[20px] font-semibold">Choose Payment Method</h2>
          <div className="mt-4 space-y-3">
            <label className="flex items-center gap-3">
              <input
                type="radio"
                value="bank"
                checked={paymentMethod === "bank"}
                onChange={handlePaymentChange}
                className="w-[20px] h-[20px]"
              />
              <span className="text-[18px] font-semibold">Direct Bank Transfer</span>
            </label>

            <label className="flex items-center gap-3">
              <input
                type="radio"
                value="cash"
                checked={paymentMethod === "cash"}
                onChange={handlePaymentChange}
                className="w-[20px] h-[20px]"
              />
              <span className="text-[18px] font-semibold text-[#9F9F9F]">Cash On Delivery</span>
            </label>
          </div>
        </div>

        <div className="mt-10">
          <button type="submit" className="w-full lg:w-[318px] h-[64px] bg-black text-white rounded-2xl hover:bg-gray-800 transition-all">
            Place order
          </button>
        </div>
      </form>

      <div className="mt-10">
        <h2 className="text-[24px] font-semibold">Cart Summary</h2>
        {cart.length === 0 ? (
          <p className="text-center text-gray-500">Your cart is empty.</p>
        ) : (
          <div>
            {cart.map((item) => (
              <p key={item.id} className="text-[#9F9F9F]">
                {item.title} <span className="text-black">X {item.quantity}</span>
              </p>
            ))}
            <p className="font-semibold mt-4">Subtotal: Rs. {cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</p>
          </div>
        )}
      </div>
    </div>
  );
}
