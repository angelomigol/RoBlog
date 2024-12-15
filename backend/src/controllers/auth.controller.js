import { v4 as uuidv4 } from 'uuid'
import { pool } from "../lib/db.js"

export const authCallback = async (req, res, next) => {
    try {
        const { clerkId, username, email, imageUrl } = req.body

        if (!clerkId || !username || !email) return res.status(400).json({ success: false, message: "Missing required fields" })

        const [rows] = await pool.query('SELECT * FROM users WHERE clerkId = ?', [clerkId])

        if (rows.length === 0) {
            const newId = uuidv4()

            try {
                await pool.query(
                    `INSERT INTO users (id, username, email, imageUrl, clerkId) VALUES (?, ?, ?, ?, ?)`,
                    [newId, username, email, imageUrl, clerkId]
                )
                
                return res.status(200).json({ success: true })
            } catch (insertError) {
                console.error("Error inserting user: ", insertError)
                return res.status(500).json({ 
                    success: false, 
                    message: "Failed to insert user",
                    error: insertError.message 
                })
            }
        }

        return res.status(200).json({ success: true })
    } catch (error) {
        console.error("Error in auth callback: ", error)
        next(error)
    }
}