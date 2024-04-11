import { ProductDetails } from "@/modules/store/views/productDetails";

interface ProductDetailsPageProps {
  params: {
    productId: string;
  };
}

export default function ProductDetailsPage({
  params: { productId },
}: ProductDetailsPageProps) {
  return <ProductDetails productId={productId} />;
}
