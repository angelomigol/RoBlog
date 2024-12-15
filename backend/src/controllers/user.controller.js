import { pool } from "../lib/db.js"


export const getAllAccounts = async (req, res, next) => {
    try {
        const [accounts] = await pool.query(`
            SELECT 
                u.imageUrl,
                u.username,
                u.email,
                COUNT(p.postId) AS no_of_posts,
                u.isBanned,
                u.banReason,
                u.dateBanned,
                u.banExpiration,
                u.createdAt
            FROM users u
            LEFT JOIN posts p ON u.id = p.authorId
            GROUP BY u.id
        `)

        res.json(accounts)
    } catch (error) {
        next(error)   
    }
}

