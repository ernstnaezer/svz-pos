// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getCategoyProducts } from "@/src/services/ProductService";
import { Product } from "@/src/types";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse<Product[]>) {
    const category = req.query.category as string

    console.log(`Fetching products for category ${category}`)
    const products:Product[] = await getCategoyProducts(category)
    res.status(200).json(products)
}
