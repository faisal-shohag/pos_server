import { Router } from "express"
import { admin_login, admin_logout, staff_login, staff_logout} from '../Controller/AuthController.js';
const router = Router()

//
router.post('/admin_login', admin_login)
router.get('/admin_logout', admin_logout)

// 
router.post('/staff_login', staff_login)
router.get('/staff_logout', staff_logout)


export default router