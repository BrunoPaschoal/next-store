interface ProductCardProps {
  onClick: (productId: number) => void;
  productId: number;
}

export const ProductCard = ({ onClick, productId }: ProductCardProps) => {
  return (
    <div
      onClick={() => onClick(productId)}
      className="h-[300px] w-[100%] min-w-[200px] max-w-[236px] flex-1 bg-slate-300 rounded-xl"
    ></div>
  );
};
