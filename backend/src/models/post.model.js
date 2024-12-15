import mongoose from "mongoose"

const postSchema = new mongoose.Schema(
    {
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        heading: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        },


    }, 
    { timestamps: true }
)

export const Post = mongoose.model("Post", postSchema)