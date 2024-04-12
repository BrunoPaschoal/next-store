import Image from "next/image";
import Logo from "@/assets/imgs/logo.svg";
import cart from "@/assets/icons/cart-icon.svg";

export const Header = () => {
  return (
    <header className="mb-16">
      <section className="px-6 md:px-14 py-1 w-full flex items-center justify-center bg-gray-800">
        <div className="w-full max-w-[1246px] flex items-center justify-between text-slate-200 text-sm">
          <span>(11) 93211-7995</span>
          <span>pt-br</span>
        </div>
      </section>
      <section className="px-6 md:px-14 py-4 w-full flex items-center justify-center bg-slate-100 shadow-sm shadow-slate-300">
        <div className="w-full max-w-[1246px] flex items-center justify-between text-slate-800 text-sm">
          <Image src={Logo} alt="Logo" width={50} className="cursor-pointer" />
          <Image src={cart} alt="cart" width={30} className="cursor-pointer" />
        </div>
      </section>
    </header>
  );
};
