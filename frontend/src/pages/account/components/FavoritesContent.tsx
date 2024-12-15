import BlogComponentGlobal from "@/components/BlogComponentGlobal"

const FavoritesContent = () => {
    return (
        <div className="pt-10 max-w-6xl mx-auto flex flex-wrap justify-center gap-x-14 gap-y-10">
            {Array.from({ length: 6 }).map((_, index) => 
                <BlogComponentGlobal key={index}  />
            )}
        </div>
    )
}

export default FavoritesContent