import { clerkClient } from "@clerk/express";

export const protectRoute = async (req, res, next) => {
    if (!req.auth.userId) return res.status(404).json({ message: 'Unauthorized Access - You Must Be Logged In' });
    next();
};

export const requireAdmin = async (req, res, next) => {
    try {
        const currentUser = await clerkClient.users.getUser(req.auth.userId);
        const isAdmin = process.env.ADMIN_EMAIL === currentUser.primaryEmailAddress?.emailAddress;

        if (!isAdmin) return res.status(403).json({ message: 'Unauthorized Access - You Must Be An Admin' });

        next();
    } catch (error) {
        next(error);
    }
}