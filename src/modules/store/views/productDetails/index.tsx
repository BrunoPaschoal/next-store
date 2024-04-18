import Image from "next/image";
import { Product } from "../../services/productsService";
import { shippingInfo } from "@/helpers/mocks";
import { ProductDetailsCard } from "@/components/Cards/ProductDetailsCard";

interface ProductsDetailsView {
  product: Product | undefined;
}

export const ProductsDetailsView = ({ product }: ProductsDetailsView) => {
  return (
    <section className="flex-col mb-20">
      <div className="flex text-slate-700 flex-col md:flex-row">
        <section className="flex-1">
          {!!product?.imgUrl && (
            <Image
              src={product?.imgUrl}
              alt={product?.title}
              width={622}
              height={622}
            />
          )}
        </section>
        <ProductDetailsCard product={product} />
      </div>

      <div className="mt-8 text-slate-700">
        <h1 className="font-bold text-xl border-b mb-2">Envio e Entrega</h1>
        <p className="font-light  text-slate-600">{shippingInfo}</p>
      </div>
    </section>
  );
};
