"use client";
import { useEffect, useState } from "react";
import { Product, productsService } from "../../services/productsService";
import { ProductsDetailsView } from "./ProductsDetailsView";

interface ProductDetailsProps {
  productId: string;
}

export const ProductDetails = ({ productId }: ProductDetailsProps) => {
  const { getProductById } = productsService();
  const [product, setProduct] = useState<Product>();
  const [colorSelected, setColorSelected] = useState<string | undefined>();
  const [sizeSelected, setSizeSelected] = useState<string | undefined>();

  const getProduct = async () => {
    const productresponse = await getProductById(+productId);
    console.log(productresponse);
    setProduct(productresponse);
  };

  const onSelectColor = (color: string) => {
    setColorSelected(color);
  };

  const onSelectSize = (size: string) => {
    setSizeSelected(size);
  };

  useEffect(() => {
    getProduct();
  }, []);
  return (
    <ProductsDetailsView
      product={product!}
      colorSelected={colorSelected}
      selectColor={onSelectColor}
      selectSize={onSelectSize}
      sizeSelected={sizeSelected}
    />
  );
};
