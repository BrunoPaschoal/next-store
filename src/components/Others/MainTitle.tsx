interface MainTitleProps {
  title: string;
}

export const MainTitle = ({ title }: MainTitleProps) => {
  return <h1 className="text-2xl font-bold text-gray-800">{title}</h1>;
};
