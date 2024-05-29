import { db } from "@/prisma/db";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).end();

    }

    const { productId, quantity } = req.body;
    if (!productId || typeof quantity !== 'number') {
        return res.status(400).json({ message: "invalid data" });
    }

    try {
        const product = await db.product.findUnique({ where: { id: productId } });
        if (!product) {
            return res.status(404).json({ message: "product not found" });
        }

        if (product.stock < quantity) {
            return res.status(400).json({ message: "insufficient stock" });
        }

        await db.product.update({
            where: { id: productId },
            data: { stock: product.stock - quantity },

        });

        res.status(200).json({ message: "stock updated successfully" });
    } catch (error) {
        res.status(500).json({ message: "internal server error" })
    }
}