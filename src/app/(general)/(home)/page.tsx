import { getAllProducts } from "@/Services/Product/product.service";
import { HomeTemplate } from "@/ui-core";
import React from "react";

async function Home() {
  const data = await getAllProducts();
  return (
    <div className="pt-24">
      <HomeTemplate products={data} error={null} />
    </div>
  );
}

export default Home;
