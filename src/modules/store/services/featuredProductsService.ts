import { productsList } from "@/helpers/mocks";

export type Product = {
  title: string;
  description: string;
  price: number;
  colors: string[];
  sizes: string[];
  imgUrl: string;
  id: number;
};

export const featuredProductsService = () => {
  const getProducts = async (): Promise<Product[]> => {
    return productsList;
  };

  const getProductById = async (id: number): Promise<Product | undefined> => {
    const product = productsList.find((product) => product.id === id);
    return product;
  };
  return { getProducts, getProductById };
};
