import mongoose from "mongoose"
import mysql from "mysql2/promise"
import dotenv from "dotenv"

dotenv.config()

export const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGODB_URI)
        console.log(`Connect to Mongo DB ${connect.connection.host}`)
    } catch (error) {
        console.error("Failed to connect to MongoDB", error)
        process.exit(1)
    }
}

export const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
})