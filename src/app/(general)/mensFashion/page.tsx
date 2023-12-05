"use client";
import { getProductsInCategory } from "@/Services/Product/product.service";
import { Categorytemplate } from "@/ui-core";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const MensFashion = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["products", "men's clothing"],
    queryFn: ({ queryKey }) => getProductsInCategory(queryKey[1]),
  });
  return (
    <div className="pt-24">
      <Categorytemplate
        products={data || []}
        loading={isLoading}
        error={error}
        title="Mens Fashion"
      />
    </div>
  );
};

export default MensFashion;
