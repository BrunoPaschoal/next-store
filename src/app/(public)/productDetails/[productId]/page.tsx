import { productsService } from "@/modules/store/services/productsService";
import { ProductsDetailsView } from "@/modules/store/views/productDetails";

interface ProductDetailsPageProps {
  params: {
    productId: string;
  };
}

export default async function ProductDetailsPage({
  params: { productId },
}: ProductDetailsPageProps) {
  const { getProductById } = productsService();

  // Server request
  const product = await getProductById(+productId);

  return <ProductsDetailsView product={product} />;
}
