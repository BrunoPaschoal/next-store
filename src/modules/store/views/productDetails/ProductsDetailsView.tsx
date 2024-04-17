import Image from "next/image";
import { Product } from "../../services/productsService";
import { ProductSizeTag } from "@/components/Others/ProductSizeTag";
import { ProductColorTag } from "@/components/Others/ProductColorTag";
import { Button } from "@/components/Buttons/GenericButton";
import { shippingInfo } from "@/helpers/mocks";

interface ProductsDetailsView {
  product: Product;
  colorSelected: string | undefined;
  selectColor: (color: string) => void;
  sizeSelected?: string;
  selectSize: (size: string) => void;
}

export const ProductsDetailsView = ({
  product,
  colorSelected,
  selectColor,
  selectSize,
  sizeSelected,
}: ProductsDetailsView) => {
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
        <section className="flex-1 border">
          <div className="px-6 py-6 flex flex-col gap-4">
            <div>
              <h1 className="font-bold text-[1.5rem]">{product?.title}</h1>
              <div className="mt-2 text-slate-700">
                <h1 className="font-bold">Descrição do produto</h1>
                <p className="font-light  text-slate-600">
                  {product?.description}
                </p>
              </div>
            </div>

            <div className="flex flex-col font-medium gap-4">
              <div>
                <span>Cores disponíveis:</span>
                <div className="flex gap-1">
                  {product?.colors?.map((color, index) => (
                    <ProductColorTag
                      selectColor={selectColor}
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
                      selectSize={selectSize}
                      sizeSelected={sizeSelected}
                      sizeLarge
                    />
                  ))}
                </div>
              </div>

              <div>
                <span className="text-[2.5rem] font-thin text-green-700">
                  {product?.price.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </span>
              </div>
            </div>

            <div className="flex">
              <Button title="ADICIONAR AO CARRINHO" />
            </div>
          </div>
        </section>
      </div>

      <div className="mt-8 text-slate-700">
        <h1 className="font-bold text-xl border-b mb-2">Envio e Entrega</h1>
        <p className="font-light  text-slate-600">{shippingInfo}</p>
      </div>
    </section>
  );
};
