"use client";
import Hero from "@/components/Hero";
import CategoriesSection from "@/components/CategoriesSection";
import OurProducts from "@/components/OurProducts"
import Furniro from "@/components/Furniro";
import HeroSlider from "@/components/HeroSlider";


export default function Dashboard() {
  const categories = [
    { id: 1, name: "Fold Chair", imageUrl: "/images/image-2.png" },
    { id: 2, name: "L-shape Sofa", imageUrl: "/images/image-4.png" },
    { id: 3, name: "Table & Chair", imageUrl: "/images/image-10.png" },
  ];

  return (
    <div>
      <Hero />
      <CategoriesSection categories={categories} />
      <OurProducts/>
      <HeroSlider/>
      <Furniro/>
    </div>
  );
}
