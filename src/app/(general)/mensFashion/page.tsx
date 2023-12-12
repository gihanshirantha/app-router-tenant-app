import { getProductsInCategory } from "@/Services/Product/product.service";
import { Categorytemplate } from "@/ui-core";
import { Metadata } from "next";
import React from "react";

async function MensFashion() {
  const data = await getProductsInCategory("men's clothing");
  return (
    <div className="pt-24">
      <Categorytemplate
        products={data}
        title="Mens Fashion"
        loading={false}
        error={null}
      />
    </div>
  );
}

export default MensFashion;
