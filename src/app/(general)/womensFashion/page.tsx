import { getProductsInCategory } from "@/Services/Product/product.service";
import { Categorytemplate } from "@/ui-core";
import { useQuery } from "@tanstack/react-query";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Women's Clothes",
  description:
    "Explore the latest trends in women's fashion at Modern-walk. Find a wide range of stylish women's clothes and accessories",
};

async function WomensFashion() {
  const data = await getProductsInCategory("women's clothing");
  return (
    <div className="pt-24">
      <Categorytemplate products={data} title="women's Fashion" />
    </div>
  );
}

export default WomensFashion;
