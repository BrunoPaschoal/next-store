import { productsService } from "@/modules/store/services/productsService";
import { FeaturedProductsView } from "@/modules/store/views/featuredProducts";

export default async function FeaturedProductsPage() {
  const { getProducts, getFilterOptions } = productsService();

  // Server requets
  const productsList = await getProducts();
  const filterOptions = await getFilterOptions();

  return (
    <FeaturedProductsView
      colorsFilterOptions={filterOptions?.colorOptions}
      productsInitialList={productsList}
      sizesFilterOptions={filterOptions?.sizeOptions}
    />
  );
}
