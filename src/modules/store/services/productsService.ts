import axios from "axios";

export type FilterProductsOptionsReponse = {
  sizeOptions: string[];
  colorOptions: string[];
};

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
    const params = new URLSearchParams();

    if (filters.color) params.append("color", filters.color);
    if (filters.size) params.append("size", filters.size.toString());
    if (filters.title) params.append("title", filters.title);

    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/products?${params.toString()}`
    );

    return data?.data;
  };

  const getProductById = async (id: number): Promise<Product | undefined> => {
    const productsResponse = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/products?id=${id}`
    );
    const { data } = productsResponse;

    return data.data;
  };

  const getFilterOptions = async (): Promise<FilterProductsOptionsReponse> => {
    const { data } = await axios.get<FilterProductsOptionsReponse>(
      `${process.env.NEXT_PUBLIC_BASE_URL}/filterOptions`
    );
    return data;
  };

  return { getProducts, getProductById, getFilterOptions };
};
