import { Router } from "express"
import { getAllAccounts } from "../controllers/user.controller.js"


const router = Router()

router.get('/', getAllAccounts)

export default router