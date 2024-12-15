import mongoose from "mongoose"

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true
        },
        imageUrl: {
            type: String,
            required: true
        },
        clerkId: {
            type: String,
            unique: true,
            required: true
        },


    }, 
    { timestamps: true }
)

export const User = mongoose.model("User", userSchema)