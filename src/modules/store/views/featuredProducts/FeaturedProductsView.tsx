import { HeroBanner } from "@/components/Banners/HeroBanner";
import { MainTitle } from "@/components/Others/MainTitle";
import { Product } from "../../services/productsService";

import { ProductsFilter } from "@/components/FilterComponents/ProductsFilter";
import { ProductsCardsList } from "@/components/Cards/ProductsCardList";

interface FeaturedProductsViewProps {
  productsInitialList: Product[];
  colorsFilterOptions: string[] | undefined;
  sizesFilterOptions: string[] | undefined;
}

export const FeaturedProductsView = ({
  productsInitialList,
  colorsFilterOptions,
  sizesFilterOptions,
}: FeaturedProductsViewProps) => {
  return (
    <section className="pb-20">
      <HeroBanner />
      <section className="mt-16">
        <MainTitle title="Produtos em Destaque" />
      </section>

      <ProductsFilter
        colorsFilterOptions={colorsFilterOptions}
        sizesFilterOptions={sizesFilterOptions}
      />

      <ProductsCardsList productsInitialList={productsInitialList} />
    </section>
  );
};
