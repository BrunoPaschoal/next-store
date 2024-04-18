"use client";

import { Product } from "@/modules/store/services/productsService";
import { EmptyIndicator } from "../Others/EmptyIndicator";
import { ProductCard } from "./ProductCard";
import { ProductsCardsLoading } from "../LoadingIndicators/ProductsCardsLoading";

interface ProductsCardsListProps {
  productsList: Product[];
  isLoading: boolean;
  onClickProduct: (productId: number) => void;
}

export const ProductsCardsList = ({
  productsList,
  isLoading,
  onClickProduct,
}: ProductsCardsListProps) => {
  console.log(isLoading);
  return (
    <>
      {!!productsList?.length && !isLoading && (
        <section className="mt-12 flex flex-wrap gap-4 justify-center md:justify-start">
          {productsList?.map((product, index) => (
            <ProductCard
              key={index}
              product={product}
              onClickProduct={onClickProduct}
            />
          ))}
        </section>
      )}

      {!productsList?.length && !isLoading && (
        <section className="mt-12 flex flex-wrap gap-4">
          <EmptyIndicator />
        </section>
      )}

      {isLoading && <ProductsCardsLoading />}
    </>
  );
};
