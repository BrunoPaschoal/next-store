interface ProductColorTagProps {
  color: string;
  colorSelected?: string;
  selectColor: (color: string) => void;
}

export const ProductColorTag = ({
  color,
  colorSelected,
  selectColor,
}: ProductColorTagProps) => {
  return (
    <div
      className={`h-8 w-8 rounded-full flex items-center justify-center cursor-pointer ${
        colorSelected === color ? "border-2 border-slate-400" : ""
      }`}
    >
      <div
        className={`h-6 w-6 rounded-full cursor-pointer`}
        style={{ backgroundColor: color }}
        onClick={() => selectColor(color)}
      ></div>
    </div>
  );
};
