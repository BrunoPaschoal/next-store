interface ProductDetailsProps {
  productId: string;
}

export const ProductDetails = ({ productId }: ProductDetailsProps) => {
  return (
    <div>
      <h1>Produto selecionado</h1>
      <h2>{`ID: ${productId}`}</h2>
    </div>
  );
};
