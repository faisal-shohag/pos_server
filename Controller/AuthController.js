import prisma from "../db/db.config.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import "dotenv/config"
import { find_admin } from "./Check.js"

//create jwt token with maxAge
const maxAge = 2 * 24 * 60 * 60
const createToken = (id) => jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: maxAge})

// admin login controller
const admin_login = async (req, res) => {
    const { email, password } = req.body 
    try {
        const admin = await find_admin(email, password)
        const token = createToken(admin.id)
        res.cookie('jwt_admin', token, { httpOnly: true, maxAge: maxAge * 1000})
        res.status(200).json(admin)
    } catch (error) {
        const errors = handleError(error)
        res.status(400).json({errors})
    }
}

//admin logout
const admin_logout = async(req, res) => {
    try{
        res.cookie('jwt_admin', '', {maxAge: 1})
    } catch(error) {
        const errors = handleError(error)
        res.status(400).json({errors})
    }
}


const handleError = (err) =>{
    let errors = {username: '', password: ''}

    if(err.code === "P2002"){
        return {username: "User already exist!"}
    }

    if(err.message === 'This email does not exist!'){
        errors.username = 'This email does not exist!';
    }
    if(err.message === 'Password is incorrect!'){
        errors.password = 'Password is incorrect!';
    }
    return errors;
}


export { admin_login, admin_logout }