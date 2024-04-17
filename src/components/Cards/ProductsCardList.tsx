"use client";

import { Product } from "@/modules/store/services/productsService";
import { EmptyIndicator } from "../Others/EmptyIndicator";
import { ProductCard } from "./ProductCard";
import { useState } from "react";

interface ProductsCardsListProps {
  productsInitialList: Product[];
}

export const ProductsCardsList = ({
  productsInitialList,
}: ProductsCardsListProps) => {
  const [products, setProducts] = useState(productsInitialList);
  return (
    <>
      {!!products?.length && (
        <section className="mt-12 flex flex-wrap gap-4 justify-center md:justify-start">
          {products?.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </section>
      )}

      {!products?.length && (
        <section className="mt-12 flex flex-wrap gap-4">
          <EmptyIndicator />
        </section>
      )}
    </>
  );
};
