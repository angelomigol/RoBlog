import { Calendar, Eye, ThumbsUp } from "lucide-react"


interface BlogComponentProps {
    postId?: string
}

const BlogComponentGlobal: React.FC<BlogComponentProps> = ({ postId }) => {

    const handleBlogClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault()
        window.location.href = `/post/${postId}`
    }


    return (
        <div
            onClick={handleBlogClick} 
            className="cursor-pointer max-w-[330px] w-[330px] space-y-2 hover:opacity-80"
        >
            <div className="w-full h-[208px]">
                <img src="/thumbnail.png" alt="RoBlog Thumbnail" className="object-scale-down" />
            </div>
            <div className="max-h-[130px] h-[130px] flex px-2">
                <div className="flex flex-col gap-y-2">
                    <h2 className="text-xl font-bold">Blog Title</h2>
                    <p className="text-[10px]">By: Author</p>
                    <p className="text-xs line-clamp-1">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, eos voluptatum quisquam impedit quasi nihil voluptas quidem eum, corporis, rem officiis quibusdam commodi eaque nam?</p>
                    <div className="flex items-center gap-8">
                        <div className="flex items-center gap-2">
                            <ThumbsUp className="w-4" />
                            <span className="text-xs">0</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Eye className="w-4" />
                            <span className="text-xs">0</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar className="w-4" />
                            <span className="text-xs">December 03, 2025</span>
                        </div>
                    </div>
                    <p className="text-xs">Category Type</p>
                </div>
            </div>
        </div>
    )
}

export default BlogComponentGlobal