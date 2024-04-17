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

export type Filters = {
  color?: string;
  size?: string;
  title?: string;
};

export const productsService = () => {
  const getProducts = async (filters: Filters = {}): Promise<Product[]> => {
    let params = "";

    if (filters.color) params += `color=${encodeURIComponent(filters.color)}&`;
    if (filters.size) params += `size=${filters.size}&`;
    if (filters.title) params += `title=${encodeURIComponent(filters.title)}&`;
    if (params.endsWith("&")) params = params.slice(0, -1);

    const productsResponse = await fetch(`/api/products?${params}`, {
      method: "GET",
    });
    const { data } = await productsResponse.json();
    return data;
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
    const productsResponse = await fetch(`/api/products?id=${id}`, {
      method: "GET",
    });
    const { data } = (await productsResponse.json()) as { data: Product };

    return data;
  };
  return { getProducts, getProductById, getSizeOptions, getColorOptions };
};
