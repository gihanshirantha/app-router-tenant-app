import { getProductsInCategory } from "@/Services/Product/product.service";
import { Categorytemplate } from "@/ui-core";
import { Metadata } from "next";
import React from "react";

async function WomensFashion() {
  const data = await getProductsInCategory("women's clothing");
  return (
    <div className="pt-24">
      <Categorytemplate
        products={data}
        title="women's Fashion"
        loading={false}
        error={null}
      />
    </div>
  );
}

export default WomensFashion;
