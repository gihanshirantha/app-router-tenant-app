import { getProductsInCategory } from "@/Services/Product/product.service";
import { Categorytemplate } from "@/ui-core";
import { useQuery } from "@tanstack/react-query";
import React from "react";

async function WomensFashion() {
  const data = await getProductsInCategory("women's clothing");
  return (
    <div className="pt-24">
      <Categorytemplate products={data} title="women's Fashion" />
    </div>
  );
}

export default WomensFashion;
