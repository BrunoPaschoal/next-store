"use client";
import { useCallback, useEffect, useState } from "react";
import { FeaturedProductsView } from "./FeaturedProductsView";
import { useRouter } from "next/navigation";
import {
  Product,
  featuredProductsService,
} from "../../services/featuredProductsService";

export const FeaturedProducts = () => {
  const router = useRouter();
  const { getProducts, getSizeOptions, getColorOptions } =
    featuredProductsService();

  const [products, setProducts] = useState<Product[]>([]);
  const [sizeOptions, setSizeOptions] = useState<string[] | undefined>();
  const [colorOptions, setColorOptions] = useState<string[] | undefined>();
  const [sizeSelected, setSizeSelected] = useState<string | undefined>();
  const [colorSelected, setColorSelected] = useState<string | undefined>();
  const [searchText, setSearchText] = useState<string | undefined>();

  const onClickProduct = (productId: number) => {
    router.push(`/productDetails/${productId}`);
  };

  const getFilterOptions = async () => {
    const sizeOptionsResponse = await getSizeOptions();
    const colorOptionsReponse = await getColorOptions();
    setSizeOptions(sizeOptionsResponse);
    setColorOptions(colorOptionsReponse);
  };

  const getAllProducts = useCallback(async () => {
    const productsResponse = await getProducts({
      color: colorSelected,
      size: sizeSelected,
      title: searchText,
    });

    setProducts(productsResponse);
  }, [colorSelected, sizeSelected, searchText]);

  const onSelectColor = (color: string) => {
    setColorSelected(color);
  };

  const onSelectSize = (size: string) => {
    setSizeSelected(size);
  };

  useEffect(() => {
    getAllProducts();
  }, [getAllProducts]);

  useEffect(() => {
    getFilterOptions();
  }, []);

  return (
    <FeaturedProductsView
      productsList={products}
      onClickProduct={onClickProduct}
      colorSelected={colorSelected}
      sizeSelected={sizeSelected}
      selectColor={onSelectColor}
      selectSize={onSelectSize}
      sizesFilterOptions={sizeOptions}
      colorsFilterOptions={colorOptions}
      searchText={searchText}
      setSearchText={setSearchText}
    />
  );
};
