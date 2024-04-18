import prisma from "../db/db.config.js";
import { Router } from "express";
const router = Router();

//update shop
router.put('/shop/:id', async (req, res) => {
    const data = req.body
    try {
        const shop = await prisma.shop.update({
            where: {id: parseInt(req.params.id)},
            data: {...data}
        })
        res.status(200).json({success: true, updated: shop})

    } catch (err) {
        res.status(404).json({ err: err });
        console.log(err);
    }
})



//update staff
router.put('/staff/:id', async (req, res) => {
    const data = req.body
    try {
        const staff = await prisma.staff.update({
            where: {id: parseInt(req.params.id)},
            data: {...data}
        })
        res.status(200).json({success: true, update: staff})
    } catch (err) {
        res.status(404).json({ err: err });
        console.log(err);
    }
})


//add category
router.put('/category/:id', async (req, res) => {
    const data = req.body
    try {
        const category = await prisma.categories.update({
            where: {id: parseInt(req.params.id)},
            data: {...data}
        })
        res.status(200).json({success: true, updated: category})
    } catch (err) {
        res.status(404).json({ err: err });
        console.log(err);
    }
})


//add product
router.put('/product/:id', async (req, res) => {
    const data = req.body
    try {
        const product = await prisma.product.update({
            where: {id: parseInt(req.params.id)},
            data: {...data}
        })
        res.status(200).json({success: true, updated: product})
    } catch (err) {
        res.status(404).json({ err: err });
        console.log(err);
    }
})


export default router