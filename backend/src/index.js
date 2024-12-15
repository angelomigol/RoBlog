import express from "express"
import dotenv from "dotenv"
import path from "path"
import fs from "fs"
import cors from "cors"
import fileUpload from "express-fileupload"

import { clerkMiddleware } from "@clerk/express"

import userRoutes from "./routes/user.route.js"
import authRoutes from "./routes/auth.route.js"
import adminRoutes from "./routes/admin.route.js"
import postRoutes from "./routes/post.route.js"
import statRoutes from "./routes/stat.route.js"


dotenv.config()

const __dirname = path.resolve()
const app = express()
const PORT = process.env.PORT

app.use(cors({ origin: 'http://localhost:5173', credentials: true }))
app.use(express.json())
app.use(clerkMiddleware())


// ROUTES
app.use("/api/users", userRoutes)
app.use("/api/auth", authRoutes)
app.use("/api/admin", adminRoutes)
app.use("/api/posts", postRoutes)
app.use("/api/stats/", statRoutes)


app.use((error, req, res, next) => {
    res.status(500).json({ message: process.env.NODE_ENV === "production" ? "Internal Server Error" : error.message })
})

app.listen(PORT, () => {
    console.log("Server is running on", PORT)
})