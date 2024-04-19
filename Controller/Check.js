import prisma from "../db/db.config.js";
import bcrypt from 'bcrypt';


//check admin on database
const find_admin = async(email, password) => {
    const admin = await prisma.admin.findUnique({
        where: {email}
    })

    if (admin) {
       // const match = await bcrypt.compare(password, admin.password);
        if(password == admin.password) return admin
        throw Error('Password is incorrect!')
    }
   throw Error('Email does not exist!')
}

//check staff on database
const find_staff = async(email, password) => {
    const staff = await prisma.staff.findUnique({
        where: {email}
    })

    if (staff) {
       // const match = await bcrypt.compare(password, admin.password);
        if(password == staff.password) return staff
        throw Error('Password is incorrect!')
    }
   throw Error('Email does not exist!')
}

export { find_admin, find_staff }