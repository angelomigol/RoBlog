import BlogComponentGlobal from "@/components/BlogComponentGlobal"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Textarea } from "@/components/ui/textarea"
import { Bookmark, Eye, ThumbsUp } from "lucide-react"

const Post = () => {

    return (
        <ScrollArea className="h-screen">
            <div className="h-full max-w-6xl w-full mx-auto p-6 flex flex-col items-center space-y-6">
                <h1 className="text-4xl font-bold">Post Title</h1>
                <div className="flex items-start divide-x-2 text-lg">
                    <p className="pr-3">Author</p>
                    <p className="px-3">Category</p>
                    <p className="pl-3">Date</p>
                </div>
                <div className="w-full md:max-h-[500px]">
                    <img src="" alt="" className="w-full md:h-[500px] bg-gray-400" />
                </div>

                <div>
                    {/* content here */}
                </div>
            </div>

            <div className="px-10 flex items-start justify-between">
                <div className="flex gap-4">
                    <div className="flex items-center gap-2">
                        <ThumbsUp className="size-5" />
                        <span className="text-xl">0</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Eye className="size-5" />
                        <span className="text-xl">0</span>
                    </div>
                    <div className="cursor-pointer flex items-center gap-1 hover:bg-[#1F1C21]">
                        Save
                        <Bookmark className="size-5" />
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <span>Share this post:</span>
                    <div className="flex gap-3">
                        <img src="/facebook.svg" alt="Facebook" className="w-6 cursor-pointer " />
                        <img src="/instagram.svg" alt="Facebook" className="w-6 cursor-pointer " />
                        <img src="/x.svg" alt="Facebook" className="w-6 cursor-pointer " />
                    </div>
                </div>
                <div className="max-w-[600px] flex flex-wrap justify-end gap-3">
                    {Array.from({ length: 3 }).map((_, index) => (
                        <div key={index} className="bg-[#BDB3BF]/20 rounded-lg text-sm py-2 px-3">
                            #
                            <span>tag</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="px-10 my-10 space-y-10">
                <h3 className="text-3xl font-bold">More Posts</h3>
                <Carousel
                    opts={{
                        align: "start",
                    }}
                    className="w-[calc(100vw-160px)]"
                    >
                    <CarouselContent>
                        {Array.from({ length: 5 }).map((_, index) => (
                            <CarouselItem key={index} className="basis-[400px]">
                                <BlogComponentGlobal />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>

            <div className="px-10 my-10 space-y-10">
                <h3 className="text-3xl font-bold">Comments (0)</h3>
                <div className="flex items-center gap-10">
                    <Avatar className="size-16">
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Textarea 
                        placeholder="Share your thoughts..."
                        className="bg-black resize-none h-24"
                    />
                    <Button  
                        className="bg-black px-6 h-12 rounded-2xl text-lg border border-white"
                    >
                        Post
                    </Button>
                </div>
                <div className="">

                </div>
            </div>
        </ScrollArea>
    )
}

export default Post