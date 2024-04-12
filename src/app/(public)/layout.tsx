import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { Header } from "@/components/layout/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Store",
  description: "Next Store Shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={(inter.className, "bg-slate-100")}>
        <Header />
        <main className="px-14 flex justify-center">
          <div className="w-full max-w-[1246px]">{children}</div>
        </main>
      </body>
    </html>
  );
}
