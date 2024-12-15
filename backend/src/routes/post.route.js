import { Router } from "express"
import { protectRoute } from "../middleware/auth.middleware.js"
import { 
    createPost,
    getAllPosts,
    updatePost,
    deletePost,
    
} from "../controllers/post.controller.js"

const router = Router()

router.use(protectRoute)


router.post("/posts", createPost)

router.get("/posts/:postId", getAllPosts)

router.patch("/posts/:postId", updatePost)

router.delete("/posts/:postId", deletePost)

export default router