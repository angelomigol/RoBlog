import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Calendar, Eye, ThumbsUp } from "lucide-react"



interface BlogComponentProps {
    postId?: string
}

const BlogComponent: React.FC<BlogComponentProps> = ({ postId }) => {

    const handleBlogClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault()
        window.location.href = `/post/${postId}`
    }

    return (
        <div 
            onClick={handleBlogClick} 
            className="cursor-pointer max-w-[410px] w-[410px] space-y-4 hover:opacity-80"
        >
            <div className="w-full h-[255px]">
                <img src="/thumbnail.png" alt="RoBlog Thumbnail" className="object-scale-down" />
            </div>
            <div className="max-h-[155px] h-[155px] flex px-2">
                <div className="flex flex-col items-center gap-2">
                    <Avatar className="size-10">
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <span className="text-[8px] w-[42px] truncate">username</span>
                </div>
                <div className="flex flex-col px-3 gap-y-2">
                    <h2 className="text-2xl font-bold">Blog Title</h2>
                    <p className="text-sm text-balance line-clamp-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, eos voluptatum quisquam impedit quasi nihil voluptas quidem eum, corporis, rem officiis quibusdam commodi eaque nam?</p>
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

export default BlogComponent