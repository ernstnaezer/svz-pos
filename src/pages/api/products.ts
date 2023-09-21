// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getProducts } from "@/src/services/ProductService";
import { Product } from "@/src/types";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse<Product[]>) {
    console.log("Fetching products")
    const products:Product[] = await getProducts()
    res.status(200).json(products)
}
