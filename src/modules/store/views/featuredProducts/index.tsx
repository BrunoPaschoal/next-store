"use client";
import { FeaturedProductsView } from "./FeaturedProductsView";
import { useRouter } from "next/navigation";

export const FeaturedProducts = () => {
  const router = useRouter();
  const productsList = [
    {
      title: "Camiseta véia",
      description: "Camiseta com tecido dry",
      price: "30",
      imgUrl: "",
      id: 1,
    },
    {
      title: "Camiseta véia",
      description: "Camiseta com tecido dry",
      price: "30",
      imgUrl: "",
      id: 2,
    },
    {
      title: "Camiseta véia",
      description: "Camiseta com tecido dry",
      price: "30",
      imgUrl: "",
      id: 3,
    },
    {
      title: "Camiseta véia",
      description: "Camiseta com tecido dry",
      price: "30",
      imgUrl: "",
      id: 4,
    },
    {
      title: "Camiseta véia",
      description: "Camiseta com tecido dry",
      price: "30",
      imgUrl: "",
      id: 5,
    },
    {
      title: "Camiseta véia",
      description: "Camiseta com tecido dry",
      price: "30",
      imgUrl: "",
      id: 6,
    },
    {
      title: "Camiseta véia",
      description: "Camiseta com tecido dry",
      price: "30",
      imgUrl: "",
      id: 7,
    },
    {
      title: "Camiseta véia",
      description: "Camiseta com tecido dry",
      price: "30",
      imgUrl: "",
      id: 8,
    },
    {
      title: "Camiseta véia",
      description: "Camiseta com tecido dry",
      price: "30",
      imgUrl: "",
      id: 9,
    },
    {
      title: "Camiseta véia",
      description: "Camiseta com tecido dry",
      price: "30",
      imgUrl: "",
      id: 10,
    },
    {
      title: "Camiseta véia",
      description: "Camiseta com tecido dry",
      price: "30",
      imgUrl: "",
      id: 11,
    },
    {
      title: "Camiseta véia",
      description: "Camiseta com tecido dry",
      price: "30",
      imgUrl: "",
      id: 12,
    },
  ];

  const onClickProduct = (productId: number) => {
    router.push(`/productDetails/${productId}`);
  };
  return (
    <FeaturedProductsView
      productsList={productsList}
      onClickProduct={onClickProduct}
    />
  );
};
