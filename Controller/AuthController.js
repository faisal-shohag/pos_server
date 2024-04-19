import jwt from 'jsonwebtoken';
import "dotenv/config"
import { find_admin, find_staff } from "./Check.js"

//create jwt token with maxAge
const maxAge = 2 * 24 * 60 * 60
const createToken = (id) => jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: '2d'})

// admin login controller
const admin_login = async (req, res) => {
    const { email, password } = req.body 
    try {
        const admin = await find_admin(email, password)
        const token = createToken(admin.id)
        // res.cookie('jwt_admin', token, { httpOnly: true, maxAge: maxAge * 1000, domain:'localhost'})
        res.status(200).json({...admin, token})
    } catch (error) {
        const errors = handleError(error)
        res.status(400).json({errors})
    }
}

//admin logout
const admin_logout = async(req, res) => {
    try{
        // res.cookie('jwt_admin', '', {httpOnly: true, maxAge: 1})
        res.status(200).json({"message": "logged out!"})
    } catch(error) {
        const errors = handleError(error)
        res.status(400).json({errors})
    }
}

//staff login
const staff_login = async (req, res) => {
    const { email, password } = req.body 
    try {
        const staff = await find_staff(email, password)
        const token = createToken(staff.email)
        res.cookie('jwt_staff', token, { httpOnly: true, maxAge: maxAge * 1000})
        res.status(200).json(staff)
    } catch (error) {
        const errors = handleError(error)
        res.status(400).json({errors})
    }
}


//staff logout
const staff_logout = async(req, res) => {
    try{
        res.cookie('jwt_staff', '', {maxAge: 1})
        res.status(200).json({"message": "logged out!"})
    } catch(error) {
        const errors = handleError(error)
        res.status(400).json({errors})
    }
}


const handleError = (err) =>{
    let errors = {err: err.message}
    return errors;
}


export { admin_login, admin_logout, staff_login, staff_logout }