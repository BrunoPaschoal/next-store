import { filterProductById, filterProducts } from "@/helpers/filterProducts";
import { NextApiRequest } from "next/types";

async function fakeDelay() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Função resolvida após 1 segundo!");
    }, 1000);
  });
}

export async function GET(req: NextApiRequest) {
  const { searchParams } = new URL(req.url!);

  await fakeDelay();

  const id = searchParams.get("id");

  if (id) {
    const productFinded = filterProductById(id);
    return Response.json({ data: productFinded });
  }

  const filteredProducts = filterProducts({
    color: searchParams.get("color") || undefined,
    size: searchParams.get("size") || undefined,
    title: searchParams.get("title") || undefined,
  });

  return Response.json({ data: filteredProducts });
}
