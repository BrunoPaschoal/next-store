import { productsList } from "@/helpers/mocks";
import { NextApiRequest, NextApiResponse } from "next/types";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  return Response.json({ ...productsList });
}
