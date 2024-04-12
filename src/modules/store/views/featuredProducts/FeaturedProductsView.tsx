import { HeroBanner } from "@/components/Banners/HeroBanner";
import { ProductCard } from "@/components/Cards/ProductCard";
import { InputSearch } from "@/components/Inputs/InputSearch";
import { FilterTag } from "@/components/Others/FilterTags";
import { MainTitle } from "@/components/Others/MainTitle";
import { Product } from "../../services/featuredProductsService";
import { ProductSizeTag } from "@/components/Others/ProductSizeTag";
import { ProductColorTag } from "@/components/Others/ProductColorTag";
import { Dispatch, SetStateAction } from "react";

interface FeaturedProductsViewProps {
  productsList: Product[];
  onClickProduct: (productId: number) => void;
  colorSelected: string | undefined;
  selectColor: (color: string) => void;
  sizeSelected?: string;
  selectSize: (size: string) => void;
  setSearchText: Dispatch<SetStateAction<string | undefined>>;
  searchText: string | undefined;
  colorsFilterOptions: string[] | undefined;
  sizesFilterOptions: string[] | undefined;
}

export const FeaturedProductsView = ({
  productsList,
  onClickProduct,
  colorSelected,
  selectColor,
  selectSize,
  sizeSelected,
  colorsFilterOptions,
  sizesFilterOptions,
  searchText,
  setSearchText,
}: FeaturedProductsViewProps) => {
  return (
    <section className="pb-20">
      <HeroBanner />
      <section className="mt-16">
        <MainTitle title="Produtos em Destaque" />
      </section>
      <section className="flex justify-between border-b items-end">
        <div className="mt-6 flex flex-col gap-4 mb-3 flex-1">
          <span className="font-medium">Filtros</span>

          <div>
            <span className="text-sm font-thin">Cor</span>
            <div className="flex mt-1 opacity-90">
              {colorsFilterOptions?.map((color, index) => (
                <ProductColorTag
                  color={color}
                  selectColor={selectColor}
                  colorSelected={colorSelected}
                  key={index}
                />
              ))}
            </div>
          </div>

          <div>
            <span className="text-sm font-thin">Tamanho</span>
            <div className="flex gap-2  mt-1">
              {sizesFilterOptions?.map((size, index) => (
                <ProductSizeTag
                  size={size}
                  selectSize={selectSize}
                  sizeSelected={sizeSelected}
                  sizeLarge
                  key={index}
                />
              ))}
            </div>
          </div>
        </div>
        <div className=" flex mb-3 flex-1 justify-end">
          <InputSearch searchText={searchText} setSearchText={setSearchText} />
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
