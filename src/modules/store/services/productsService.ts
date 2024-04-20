import { HttpClient } from "@/clients/HttpClient";
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
  const { axiosClient } = HttpClient();
  const getProducts = async (filters: Filters = {}): Promise<Product[]> => {
    const params = new URLSearchParams();

    if (filters.color) params.append("color", filters.color);
    if (filters.size) params.append("size", filters.size.toString());
    if (filters.title) params.append("title", filters.title);

    const {
      body: { data },
    } = await axiosClient.request<{ data: Product[] }>({
      method: "GET",
      url: `/products?${params.toString()}`,
    });

    return data;
  };

  const getProductById = async (id: number): Promise<Product | undefined> => {
    const {
      body: { data },
    } = await axiosClient.request<{ data: Product }>({
      url: `/products?id=${id}`,
      method: "GET",
    });

    return data;
  };

  const getFilterOptions = async (): Promise<FilterProductsOptionsReponse> => {
    const { data } = await axios.get<FilterProductsOptionsReponse>(
      `${process.env.NEXT_PUBLIC_BASE_URL}/filterOptions`
    );
    return data;
  };

  return { getProducts, getProductById, getFilterOptions };
};
