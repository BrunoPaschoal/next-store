"use client";
import { useEffect, useState } from "react";
import { FeaturedProductsView } from "./FeaturedProductsView";
import { useRouter } from "next/navigation";
import {
  Product,
  featuredProductsService,
} from "../../services/featuredProductsService";

export const FeaturedProducts = () => {
  const router = useRouter();
  const { getProductById, getProducts } = featuredProductsService();
  const [products, setProducts] = useState<Product[]>([]);

  const onClickProduct = (productId: number) => {
    router.push(`/productDetails/${productId}`);
  };

  const getAllProducts = async () => {
    const productsResponse = await getProducts();
    setProducts(productsResponse);
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <FeaturedProductsView
      productsList={products}
      onClickProduct={onClickProduct}
    />
  );
};
