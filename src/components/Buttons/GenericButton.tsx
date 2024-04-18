interface ButtonProps {
  title: string;
  onClick: () => void;
}

export const Button = ({ title, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="bg-slate-700 flex-1 p-2 text-slate-200 font-medium rounded-md self-end active:opacity-90"
    >
      {title}
    </button>
  );
};
