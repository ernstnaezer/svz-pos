// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Product, OpenTap } from "@/src/types";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse<OpenTap[]>) {

    const biertje:Product = {
        id:1,
        title:"tap bier",
        category:"bier & wijn",
        description:"tap biertje",
        image:"",
        price:2.0
    }

    const cola:Product = {
        id:1,
        title:"cola",
        category:"fris & warm",
        description:"cola",
        image:"",
        price:1.5
    }

    const openTaps:OpenTap[] = [
        {id:"12345", cartItems:[
            {product: biertje, quantity: 2},
            {product: cola, quantity: 1}
        ]},
        {id:"777666", cartItems:[
            {product: cola, quantity: 3}
        ]}
    ]

    res.status(200).json(openTaps)
}
