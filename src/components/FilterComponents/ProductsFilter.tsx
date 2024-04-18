"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { ProductColorTag } from "../Others/ProductColorTag";
import { ProductSizeTag } from "../Others/ProductSizeTag";
import { InputSearch } from "../Inputs/InputSearch";

interface ProductsFilterProps {
  colorsFilterOptions: string[] | undefined;
  sizesFilterOptions: string[] | undefined;
  setSizeSelected: Dispatch<SetStateAction<string | undefined>>;
  sizeSelected: string | undefined;
  setColorSelected: Dispatch<SetStateAction<string | undefined>>;
  colorSelected: string | undefined;
  setSearchText: Dispatch<SetStateAction<string | undefined>>;
  searchText: string | undefined;
  isLoading: boolean;
}

export const ProductsFilter = ({
  colorsFilterOptions,
  sizesFilterOptions,
  colorSelected,
  searchText,
  setColorSelected,
  setSearchText,
  setSizeSelected,
  sizeSelected,
  isLoading,
}: ProductsFilterProps) => {
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
                selectColor={setColorSelected}
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
                selectSize={setSizeSelected}
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
