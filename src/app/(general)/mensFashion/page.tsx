"use client";
import { getProductsInCategory } from "@/Services/Product/product.service";
import { Categorytemplate } from "@/ui-core";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Men's Clothes",
  description:
    "Explore the latest trends in men's fashion at Modern-walk. Find a wide range of stylish men's clothes and accessories",
};

async function MensFashion() {
  const data = await getProductsInCategory("men's clothing");
  return (
    <div className="pt-24">
      <Categorytemplate products={data} title="Mens Fashion" />
    </div>
  );
}

export default MensFashion;
