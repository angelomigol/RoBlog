import { pool } from "../lib/db.js"

export const adminStats = async (req, res, next) => {
    try {
        const [[totalPosts]] = await pool.query('SELECT COUNT(*) AS total FROM posts')
        const [[totalUsers]] = await pool.query('SELECT COUNT(*) AS total FROM users')
        const [[totalBlogReports]] = await pool.query('SELECT COUNT(*) AS total FROM posts')
        const [[totalCommentReports]] = await pool.query('SELECT COUNT(*) AS total  FROM posts')

        res.json({
            totalPosts: totalPosts.total,
            totalUsers: totalUsers.total,
            totalBlogReports: totalBlogReports.total,
            totalCommentReports: totalCommentReports.total,
        })
    } catch (error) {
        next(error)   
    }
}