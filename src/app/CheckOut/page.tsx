'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import { useSearchParams } from 'next/navigation';
import Shipping from '@/components/Shipping';

interface CartItem {
  id: string;
  title: string;
  quantity: number;
  price: number;
}

export default function CheckoutPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [paymentMethod, setPaymentMethod] = useState<string>('cash');
  const searchParams = useSearchParams();

  useEffect(() => {
    const cartParam = searchParams.get('cart');
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
      customerInfo: {}, // Add form data here
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
      <Head>
        <title>Checkout | E-Commerce Store</title>
        <meta name="description" content="Complete your purchase securely on our checkout page." />
      </Head>

      <Image
        src={'/images/checkout.png'}
        alt="checkout"
        width={1440}
        height={316}
        className="w-full h-auto mt-20"
      />

      <div className="container mx-auto px-4 lg:px-12 mt-16 mb-10">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-10">
          <div className="w-full lg:w-[60%]">
            <h1 className="text-[36px] font-semibold mb-5">Billing details</h1>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Billing Form */}
              <div className="flex flex-wrap gap-6">
                <div className="w-full sm:w-[211px]">
                  <label className="block mb-2 font-medium">First Name</label>
                  <input type="text" className="w-full h-[50px] border border-black rounded-md p-2" required />
                </div>
                <div className="w-full sm:w-[211px]">
                  <label className="block mb-2 font-medium">Last Name</label>
                  <input type="text" className="w-full h-[50px] border border-black rounded-md p-2" required />
                </div>
              </div>

              <div>
                <label className="block mb-2 font-medium">Country / Region</label>
                <select className="w-full lg:w-[453px] h-[50px] border border-black rounded-md p-2 cursor-pointer" required>
                  <option value="">Select your country</option>
                  <option value="USA">United States</option>
                  <option value="UK">United Kingdom</option>
                  <option value="Canada">Canada</option>
                  <option value="India">India</option>
                </select>
              </div>

              <div>
                <label className="block mb-2 font-medium">Street Address</label>
                <input type="text" className="w-full lg:w-[453px] h-[50px] border border-black rounded-md p-2" required />
              </div>

              <div>
                <label className="block mb-2 font-medium">Phone</label>
                <input type="tel" className="w-full lg:w-[453px] h-[50px] border border-black rounded-md p-2" required />
              </div>

              <div className="mt-10">
                <h2 className="text-[20px] font-semibold">Choose Payment Method</h2>
                <div className="mt-4 space-y-3">
                  <label className="flex items-center gap-3">
                    <input
                      type="radio"
                      value="bank"
                      checked={paymentMethod === 'bank'}
                      onChange={handlePaymentChange}
                      className="w-[20px] h-[20px]"
                    />
                    <span className="text-[18px] font-semibold">Direct Bank Transfer</span>
                  </label>
                  <p className="text-[#9F9F9F]">Make your payment directly into our bank account. Please use your Order ID as the payment reference.</p>

                  <label className="flex items-center gap-3">
                    <input
                      type="radio"
                      value="cash"
                      checked={paymentMethod === 'cash'}
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
          </div>

          <div className="w-full lg:w-[35%]">
            <div className="flex items-start justify-between">
              <div className="flex flex-col gap-3">
                <h2 className="text-[24px] font-semibold">Product</h2>
                {cart.length === 0 ? (
                  <p className="text-center text-gray-500">Your cart is empty.</p>
                ) : (
                  cart.map((item) => (
                    <p key={item.id} className="text-[#9F9F9F]">
                      {item.title} <span className="text-black">X {item.quantity}</span>
                    </p>
                  ))
                )}
                <span className="font-semibold">Subtotal</span>
                <span className="font-semibold">Total</span>
              </div>
              <div className="flex flex-col gap-3 text-right">
                <h2 className="text-[24px] font-semibold">Subtotal</h2>
                <span>Rs. {cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</span>
                <span className="text-[#B88E2F] text-[24px] font-semibold">Rs. {cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</span>
              </div>
            </div>
            <div className="border-b border-[#D9D9D9] w-full mt-6"></div>
          </div>
        </div>
      </div>

      <Shipping />
    </div>
  );
}
