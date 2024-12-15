import { Router } from "express";
import { protectRoute, requireAdmin } from "../middleware/auth.middleware.js";
import { adminStats } from "../controllers/stat.controller.js";


const router = Router();

router.get("/admin", adminStats); // protectRoute, requireAdmin


export default router;