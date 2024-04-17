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

type Filters = {
  color?: string;
  size?: string;
  title?: string;
};

export const productsService = () => {
  // const getProducts = async (filters: Filters = {}): Promise<Product[]> => {
  //   let filteredProducts = productsList;

  //   if (filters.color) {
  //     filteredProducts = filteredProducts.filter((product) =>
  //       product.colors.includes(filters.color!)
  //     );
  //   }

  //   if (filters.size) {
  //     filteredProducts = filteredProducts.filter((product) =>
  //       product.sizes.includes(filters.size!)
  //     );
  //   }

  //   if (filters.title) {
  //     filteredProducts = filteredProducts.filter((product) =>
  //       product.title.toLowerCase().includes(filters.title!?.toLowerCase())
  //     );
  //   }

  //   return filteredProducts;
  // };

  const getProducts = async (filters: Filters = {}): Promise<Product[]> => {
    const productsResponse = await fetch("/api/products", {
      method: "GET",
    });

    const products = await productsResponse.json();

    return products;
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
