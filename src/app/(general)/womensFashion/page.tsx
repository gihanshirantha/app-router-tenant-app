"use client";
import { getProductsInCategory } from "@/Services/Product/product.service";
import { Categorytemplate } from "@/ui-core";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const WomensFashion = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["products", "women's clothing"],
    queryFn: ({ queryKey }) => getProductsInCategory(queryKey[1]),
  });
  return (
    <div className="pt-24">
      <Categorytemplate
        products={data || []}
        error={error}
        loading={isLoading}
        title="women's Fashion"
      />
    </div>
  );
};

export default WomensFashion;
