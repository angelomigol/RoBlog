const BloggerSectionSkeleton = () => {
    return (
        <div className="space-y-4">
            <h1 className="md:text-3xl text-2xl font-bold capitalize">Meet The Bloggers!</h1>

            <div className="flex space-x-10">
                {Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="space-y-3 animate-pulse">
                        <div className="bg-gray-400 size-[175px] rounded-2xl" />
                        <div className="h-8 bg-gray-400 rounded-md mx-2" />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BloggerSectionSkeleton