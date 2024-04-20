"use client";

import { HeroBanner } from "@/components/Banners/HeroBanner";
import { MainTitle } from "@/components/Others/MainTitle";
import { Product, productsService } from "../../services/productsService";

import { ProductsFilter } from "@/components/FilterComponents/ProductsFilter";
import { ProductsCardsList } from "@/components/Cards/ProductsCardList";
import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface FeaturedProductsViewProps {
  productsInitialList: Product[];
  colorsFilterOptions: string[] | undefined;
  sizesFilterOptions: string[] | undefined;
}

export const FeaturedProductsView = ({
  productsInitialList,
  colorsFilterOptions,
  sizesFilterOptions,
}: FeaturedProductsViewProps) => {
  const { getProducts } = productsService();
  const router = useRouter();

  const [products, setProducts] = useState<Product[]>(productsInitialList);
  const [sizeSelected, setSizeSelected] = useState<string | undefined>();
  const [colorSelected, setColorSelected] = useState<string | undefined>();
  const [searchText, setSearchText] = useState<string | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onClickProduct = (productId: number) => {
    router.push(`/productDetails/${productId}`);
  };

  const getFilteredProducts = useCallback(async () => {
    setIsLoading(true);
    try {
      const productsResponse = await getProducts({
        color: colorSelected,
        size: sizeSelected,
        title: searchText,
      });
      setProducts(productsResponse);
    } catch (_) {
    } finally {
      setIsLoading(false);
    }
  }, [colorSelected, sizeSelected, searchText]);

  useEffect(() => {
    if (colorSelected || sizeSelected || searchText) {
      getFilteredProducts();
    }
  }, [getFilteredProducts]);

  return (
    <section className="pb-20">
      <HeroBanner />
      <section className="mt-16">
        <MainTitle title="Produtos em Destaque" />
      </section>

      <ProductsFilter
        colorsFilterOptions={colorsFilterOptions}
        sizesFilterOptions={sizesFilterOptions}
        colorSelected={colorSelected}
        searchText={searchText}
        setColorSelected={setColorSelected}
        setSearchText={setSearchText}
        setSizeSelected={setSizeSelected}
        sizeSelected={sizeSelected}
        isLoading={isLoading}
      />

      <ProductsCardsList
        productsList={products}
        isLoading={isLoading}
        onClickProduct={onClickProduct}
      />
    </section>
  );
};
