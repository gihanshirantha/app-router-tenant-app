"use client";
import { getProductsInCategory } from "@/Services/Product/product.service";
import { Categorytemplate } from "@/ui-core";
import React from "react";

async function MensFashion() {
  const data = await getProductsInCategory("men's clothing");
  return (
    <div className="pt-24">
      <Categorytemplate products={data} title="Mens Fashion" />
    </div>
  );
}

export default MensFashion;
