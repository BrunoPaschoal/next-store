interface ProductSizeTagProps {
  size: string;
  sizeSelected?: string;
  sizeLarge?: boolean;
  selectSize?: (size: string) => void;
}

export const ProductSizeTag = ({
  size,
  selectSize,
  sizeSelected,
  sizeLarge,
}: ProductSizeTagProps) => {
  return (
    <div
      className={`rounded-full flex items-center justify-center font-medium cursor-pointer ${
        sizeSelected === size
          ? "bg-slate-800 text-slate-100"
          : "border text-gray-700 "
      } ${sizeLarge ? "h-8 w-12" : "h-5 w-9"}`}
      onClick={() => (selectSize ? selectSize(size) : null)}
    >
      <span className={`${sizeLarge ? "text-[0.9rem]" : "text-[0.7rem]"}`}>
        {size}
      </span>
    </div>
  );
};
