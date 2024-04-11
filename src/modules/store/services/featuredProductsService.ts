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

  const getSizeOptions = async (): Promise<string[]> => {
    const allSizes = productsList.reduce(
      (sizes, product) => [...sizes, ...product.sizes],
      [] as string[]
    );
    return [...new Set(allSizes)];
  };

  const getColorOptions = async (): Promise<string[]> => {
    const allColors = productsList.reduce(
      (colors, product) => [...colors, ...product.colors],
      [] as string[]
    );
    return [...new Set(allColors)];
  };

  const getProductById = async (id: number): Promise<Product | undefined> => {
    const product = productsList.find((product) => product.id === id);
    return product;
  };
  return { getProducts, getProductById, getSizeOptions, getColorOptions };
};
