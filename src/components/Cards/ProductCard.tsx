"use client";

import { Product } from "@/modules/store/services/productsService";
import Image from "next/image";
import { ProductSizeTag } from "../Others/ProductSizeTag";
import { useRouter } from "next/navigation";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const router = useRouter();

  const onClickProduct = (productId: number) => {
    router.push(`/productDetails/${productId}`);
  };
  return (
    <div
      onClick={() => onClickProduct(product.id)}
      className="h-[400px] w-[100%] min-w-[200px] max-w-[236px] flex-1 rounded-xl overflow-hidden cursor-pointer border active:opacity-80"
    >
      <div>
        <Image
          src={product.imgUrl}
          width={400}
          height={400}
          alt={product.title}
        />
      </div>
      <div className="flex-col px-2 py-2 ">
        <h2 className="text-gray-700 font-semibold line-clamp-1">
          {product.title}
        </h2>
        <div className="h-[80px]">
          <span className="text-[0.8rem] font-thin text-gray-500 text line-clamp-4">
            {product.description}
          </span>
        </div>

        <div className="flex gap-1 mt-4">
          {product.sizes?.map((size, index) => (
            <ProductSizeTag key={index} size={size} />
          ))}
        </div>
      </div>
    </div>
  );
};
