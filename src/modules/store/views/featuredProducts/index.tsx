import { FeaturedProductsView } from "./FeaturedProductsView";
import { productsService } from "../../services/productsService";

export const FeaturedProducts = async () => {
  const { getProducts, getFilterOptions } = productsService();

  // Server requets
  const productsList = await getProducts();
  const filterOptions = await getFilterOptions();

  return (
    <FeaturedProductsView
      productsInitialList={productsList}
      sizesFilterOptions={filterOptions?.sizeOptions}
      colorsFilterOptions={filterOptions?.colorOptions}
    />
  );
};
