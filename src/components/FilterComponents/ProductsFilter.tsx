"use client";

import { useState } from "react";
import { ProductColorTag } from "../Others/ProductColorTag";
import { ProductSizeTag } from "../Others/ProductSizeTag";
import { InputSearch } from "../Inputs/InputSearch";

interface ProductsFilterProps {
  colorsFilterOptions: string[] | undefined;
  sizesFilterOptions: string[] | undefined;
}

export const ProductsFilter = ({
  colorsFilterOptions,
  sizesFilterOptions,
}: ProductsFilterProps) => {
  const [sizeSelected, setSizeSelected] = useState<string | undefined>();
  const [colorSelected, setColorSelected] = useState<string | undefined>();
  const [searchText, setSearchText] = useState<string | undefined>();

  const onSelectColor = (color: string) => {
    setColorSelected(color);
  };

  const onSelectSize = (size: string) => {
    setSizeSelected(size);
  };

  return (
    <section className="flex flex-col md:flex-row md:items-end justify-between border-b items-start">
      <div className="mt-6 flex flex-col gap-4 mb-3 flex-1">
        <span className="font-medium">Filtros</span>

        <div>
          <span className="text-sm font-thin">Cor</span>
          <div className="flex mt-1 opacity-90 flex-wrap">
            {colorsFilterOptions?.map((color, index) => (
              <ProductColorTag
                color={color}
                selectColor={onSelectColor}
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
                selectSize={onSelectSize}
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
  );
};
