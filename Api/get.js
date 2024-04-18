import prisma from "../db/db.config.js";
import { Router } from "express";
const router = Router();


// get all shops
router.get("/shops", async (req, res) => {
  try {
    const shops = await prisma.shop.findMany({
      include: {
        staff: true,
      },
    });
    res.status(200).json(shops);
  } catch (err) {
    res.status(404).json({ err: err });
    console.log(err);
  }
});


//get single shop
router.get("/shop/:id", async (req, res) => {
  try {
    const shop = await prisma.shop.findUnique({
      where: { id: parseInt(req.params.id) },
      include: {
        staff: true,
      },
    });
    res.status(200).json(shop || {});
  } catch (err) {
    res.status(404).json({ err: err });
    console.log(err);
  }
});

// get all staffs
router.get("/staffs", async (req, res) => {
    try {
      const staffs = await prisma.staff.findMany({
        include: {
            shop: true
        }
      });
      res.status(200).json(staffs);
    } catch (err) {
      res.status(404).json({ err: err });
      console.log(err);
    }
  });

//get single staff
router.get("/staff/:id", async (req, res) => {
    try {
      const staff = await prisma.staff.findUnique({
        where: { id: parseInt(req.params.id) },
        include: {
          shop: true,
        },
      });
      res.status(200).json(staff || {});
    } catch (err) {
      res.status(404).json({ err: err });
      console.log(err);
    }
  });



//get categories
router.get("/categories", async (req, res) => {
    try {
      const categories = await prisma.categories.findMany({
        include: {
            product: true
        }
      });
      res.status(200).json(categories);
    } catch (err) {
      res.status(404).json({ err: err });
      console.log(err);
    }
  });


export default router;
