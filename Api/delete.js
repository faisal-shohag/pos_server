import prisma from "../db/db.config.js";
import { Router } from "express";
const router = Router();

//delete shop
router.delete('/shop/:id', async (req, res) => {
    try {
        const shop = await prisma.shop.delete({
            where: {id: parseInt(req.params.id)}
        })
        res.status(200).json({success: true, deleted: shop})

    } catch (err) {
        res.status(404).json({ err: err });
        console.log(err);
    }
})


export default router