import Image from "next/image";
import Banner from "@/assets/imgs/banner.jpg";

export const HeroBanner = () => {
  return (
    <div className="bg-slate-200 h-[350px] bg-gradient-to-r from-slate-200 to-slate-300 rounded-2xl overflow-hidden flex relative">
      <Image
        src={Banner}
        alt="Banner"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
    </div>
  );
};
