import { Dispatch, SetStateAction } from "react";

interface InputSearchProps {
  setSearchText: Dispatch<SetStateAction<string | undefined>>;
  searchText: string | undefined;
}

export const InputSearch = ({
  searchText,
  setSearchText,
}: InputSearchProps) => {
  return (
    <input
      placeholder="Buscar"
      value={searchText}
      onChange={(e) => setSearchText(e.target.value)}
      className="rounded-full w-full h-8 px-4 py-2 bg-slate-200 placeholder:font-semibold placeholder:text-sm outline-none focus:border-blue-500 border-2"
    />
  );
};
