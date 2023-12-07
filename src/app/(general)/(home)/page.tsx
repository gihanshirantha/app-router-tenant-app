import { getAllProducts } from "@/Services/Product/product.service";
import { HomeTemplate } from "@/ui-core";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Modern-walk - Trendy Clothes for Every Style",
  description: "Discover the latest trends in fashion at Modern-walk",
};

async function Home() {
  const data = await getAllProducts();
  return (
    <div className="pt-24">
      <HomeTemplate products={data} error={null} />
    </div>
  );
}

export default Home;
