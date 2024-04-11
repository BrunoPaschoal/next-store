import { HeroBanner } from "@/components/Banners/HeroBanner";
import { ProductCard } from "@/components/Cards/ProductCard";
import { InputSearch } from "@/components/Inputs/InputSearch";
import { FilterTag } from "@/components/Others/FilterTags";
import { MainTitle } from "@/components/Others/MainTitle";
import { Product } from "../../services/featuredProductsService";

interface FeaturedProductsViewProps {
  productsList: Product[];
  onClickProduct: (productId: number) => void;
}

export const FeaturedProductsView = ({
  productsList,
  onClickProduct,
}: FeaturedProductsViewProps) => {
  return (
    <section className="pb-48">
      <HeroBanner />
      <section className="mt-16">
        <MainTitle title="Produtos em Destaque" />
      </section>
      <section className="flex justify-between border-b items-end">
        <div className="mt-6 flex gap-4 mb-3 flex-1">
          <FilterTag />
          <FilterTag />
          <FilterTag />
          <FilterTag />
        </div>
        <div className=" flex mb-3 flex-1 justify-end">
          <InputSearch />
        </div>
      </section>
      <section className="mt-12 flex flex-wrap gap-4">
        {productsList?.map((product, index) => (
          <ProductCard key={index} product={product} onClick={onClickProduct} />
        ))}
      </section>
    </section>
  );
};
