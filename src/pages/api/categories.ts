// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getCategories } from "@/src/services/ProductService";

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse<string[]>) {
    console.log("fetching categories")
    const products:string[] = await getCategories()
    res.status(200).json(products)
}
