import prisma from "../db/db.config.js";
import jwt from 'jsonwebtoken';
import "dotenv/config"

const admin_mid =(req, res, next) => {
    const token = req.cookies.jwt_admin;
    if(token) {
        jwt.verify(token, process.env.JWT_SECRET, (err) => {
            if(err) {
                res.status(400).json({"err": {"message": "authentication required"}})
            } else {
                next()
            }
        })
    } else {
        res.status(400).json({"err": {"message": "authentication required"}})
    }
}


export{admin_mid}