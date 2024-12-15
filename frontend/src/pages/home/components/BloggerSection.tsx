import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import BloggerSectionSkeleton from "@/components/skeletons/BloggerSectionSkeleton"
import { Link } from "react-router-dom"

type BloggerSectionProps = {
    isLoading: boolean
}

const BloggerSection = ({ isLoading }: BloggerSectionProps) => {

    if (isLoading) return <BloggerSectionSkeleton />

    return (
        <div className="space-y-4">
            <h1 className="md:text-3xl text-2xl font-bold capitalize">Meet The Bloggers!</h1>

            <Carousel
            opts={{
                align: "start",
            }}
            className="w-[95%]"
            >
                <CarouselContent>
                    {Array.from({ length: 6 }).map((_, index) => (
                        <CarouselItem key={index} className="basis-[215px]">
                            <div className="flex items-center">
                                <Link
                                    to={`/account/:accountId`}
                                    onClick={(e) => {
                                        e.preventDefault()
                                        window.location.href = `/account/:accountId`
                                    }}
                                    className="outline-none"
                                >
                                    <div className="space-y-3 rounded-t-2xl">
                                        <img src="https://github.com/shadcn.png" alt="Profile Avatar" className="rounded-t-2xl size-[175px] object-cover" />
                                        <h1 className="md:text-2xl text-xl font-bold text-center">Username</h1>
                                    </div>
                                </Link>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    )
}

export default BloggerSection