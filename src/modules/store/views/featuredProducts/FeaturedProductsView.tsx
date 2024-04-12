import { HeroBanner } from "@/components/Banners/HeroBanner";
import { ProductCard } from "@/components/Cards/ProductCard";
import { InputSearch } from "@/components/Inputs/InputSearch";
import { MainTitle } from "@/components/Others/MainTitle";
import { Product } from "../../services/featuredProductsService";
import { ProductSizeTag } from "@/components/Others/ProductSizeTag";
import { ProductColorTag } from "@/components/Others/ProductColorTag";
import { Dispatch, SetStateAction } from "react";
import { EmptyIndicator } from "@/components/Others/EmptyIndicator";

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
      <section className="flex flex-col md:flex-row md:items-end justify-between border-b items-start">
        <div className="mt-6 flex flex-col gap-4 mb-3 flex-1">
          <span className="font-medium">Filtros</span>

          <div>
            <span className="text-sm font-thin">Cor</span>
            <div className="flex mt-1 opacity-90 flex-wrap">
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
        <div className="flex mb-3 mt-4 w-full md:w-72 justify-end">
          <InputSearch searchText={searchText} setSearchText={setSearchText} />
        </div>
      </section>

      {!!productsList.length && (
        <section className="mt-12 flex flex-wrap gap-4 justify-center md:justify-start">
          {productsList?.map((product, index) => (
            <ProductCard
              key={index}
              product={product}
              onClick={onClickProduct}
            />
          ))}
        </section>
      )}

      {!productsList.length && (
        <section className="mt-12 flex flex-wrap gap-4">
          <EmptyIndicator />
        </section>
      )}
    </section>
  );
};
