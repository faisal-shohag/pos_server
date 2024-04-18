import prisma from "../db/db.config.js";
import { Router } from "express";
const router = Router();


// admin post
router.post('/admin', async (req, res) => {
    const data = req.body
    try {
        const admin = await prisma.admin.create({
            data: {...data}
        })
        res.status(200).json({success: true, created: admin})

    } catch (err) {
        res.status(404).json({ err: err });
        console.log(err);
    }
})


//add shop
router.post('/shop', async (req, res) => {
    const data = req.body
    try {
        const shop = await prisma.shop.create({
            data: {...data}
        })
        res.status(200).json({success: true, created: shop})

    } catch (err) {
        res.status(404).json({ err: err });
        console.log(err);
    }
})


//add staff
router.post('/staff', async (req, res) => {
    const data = req.body
    try {
        const staff = await prisma.staff.create({
            data: {...data}
        })
        res.status(200).json({success: true, created: staff})
    } catch (err) {
        res.status(404).json({ err: err });
        console.log(err);
    }
})


//add category
router.post('/category', async (req, res) => {
    const data = req.body
    try {
        const category = await prisma.categories.create({
            data: {...data}
        })
        res.status(200).json({success: true, created: category})
    } catch (err) {
        res.status(404).json({ err: err });
        console.log(err);
    }
})


//add product
router.post('/product', async (req, res) => {
    const data = req.body
    try {
        const product = await prisma.product.create({
            data: {...data}
        })
        res.status(200).json({success: true, created: product})
    } catch (err) {
        res.status(404).json({ err: err });
        console.log(err);
    }
})



export default router