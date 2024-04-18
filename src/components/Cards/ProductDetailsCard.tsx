"use client";

import { useState } from "react";
import { Button } from "../Buttons/GenericButton";
import { ProductColorTag } from "../Others/ProductColorTag";
import { ProductSizeTag } from "../Others/ProductSizeTag";
import { Product } from "@/modules/store/services/productsService";

interface ProductDetailsCard {
  product: Product | undefined;
}

export const ProductDetailsCard = ({ product }: ProductDetailsCard) => {
  const [colorSelected, setColorSelected] = useState<string | undefined>();
  const [sizeSelected, setSizeSelected] = useState<string | undefined>();

  const AddProductToCart = () => {
    const payLoad = {
      product,
      colorSelected,
      sizeSelected,
    };
  };

  return (
    <section className="flex-1 border">
      <div className="px-6 py-6 flex flex-col gap-4">
        <div>
          <h1 className="font-bold text-[1.5rem]">{product?.title}</h1>
          <div className="mt-2 text-slate-700">
            <h1 className="font-bold">Descrição do produto</h1>
            <p className="font-light  text-slate-600">{product?.description}</p>
          </div>
        </div>

        <div className="flex flex-col font-medium gap-4">
          <div>
            <span>Cores disponíveis:</span>
            <div className="flex gap-1">
              {product?.colors?.map((color, index) => (
                <ProductColorTag
                  selectColor={setColorSelected}
                  colorSelected={colorSelected}
                  color={color}
                  key={index}
                />
              ))}
            </div>
          </div>

          <div>
            <span>Tamanhos disponíveis:</span>
            <div className="flex gap-2 mt-2">
              {product?.sizes?.map((size, index) => (
                <ProductSizeTag
                  key={index}
                  size={size}
                  selectSize={setSizeSelected}
                  sizeSelected={sizeSelected}
                  sizeLarge
                />
              ))}
            </div>
          </div>

          <div>
            <span className="text-[2.5rem] font-thin text-green-700">
              {product?.price?.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </span>
          </div>
        </div>

        <div className="flex">
          <Button title="ADICIONAR AO CARRINHO" onClick={AddProductToCart} />
        </div>
      </div>
    </section>
  );
};
