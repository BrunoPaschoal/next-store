interface ProductSizeTagProps {
  size: string;
}

export const ProductSizeTag = ({ size }: ProductSizeTagProps) => {
  return (
    <div className="h-5 w-9 rounded-full border flex items-center justify-center text-gray-700 font-medium">
      <span className="text-[0.8rem]">{size}</span>
    </div>
  );
};
