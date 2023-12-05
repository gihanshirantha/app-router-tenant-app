"use client";

import { getAllProducts } from "@/Services/Product/product.service";
import { HomeTemplate } from "@/ui-core";
import React from "react";
import { useQuery } from "@tanstack/react-query";

const Home = () => {
  const {
    data: products,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getAllProducts,
  });
  return (
    <div className="pt-24">
      <HomeTemplate products={products} error={error} loading={isLoading} />
    </div>
  );
};

export default Home;
