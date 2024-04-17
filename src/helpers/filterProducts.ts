import { Filters, Product } from "@/modules/store/services/productsService";
import { productsList } from "./mocks";

export const filterProducts = (filters: Filters = {}): Product[] => {
  let filteredProducts = productsList;

  if (filters.color) {
    filteredProducts = filteredProducts.filter((product) =>
      product.colors.includes(filters.color!)
    );
  }

  if (filters.size) {
    filteredProducts = filteredProducts.filter((product) =>
      product.sizes.includes(filters.size!)
    );
  }

  if (filters.title) {
    filteredProducts = filteredProducts.filter((product) =>
      product.title.toLowerCase().includes(filters.title!?.toLowerCase())
    );
  }

  return filteredProducts;
};

export const filterProductById = (id: string): Product | undefined => {
  const product = productsList.find((product) => product.id === +id);
  return product;
};
