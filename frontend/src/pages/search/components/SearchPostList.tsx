import BlogComponentGlobal from "@/components/BlogComponentGlobal"
import SearchPostListSkeleton from "@/components/skeletons/SearchPostListSkeleton"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Search } from "lucide-react"


interface SearchPostListProps {
  isLoading?: boolean
  posts?: []
  searchInput?: string
  onClearSearch: () => void
}

const SearchPostList = ({ isLoading = false, posts = [], searchInput = "", onClearSearch }: SearchPostListProps) => {
  if (isLoading) {
    return (
      <SearchPostListSkeleton />
    )
  }

  if ((!posts || posts.length === 0) && searchInput) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <Search className="size-16 text-gray-300 mb-4" />
        <h2 className="text-2xl font-semibold text-slate-200 mb-2">
          No Results Found For "{searchInput}"
        </h2>
        <p className="text-gray-500 mb-6">
          Try adjusting your search input or filters to find what you're looking for.
        </p>
        <Button onClick={onClearSearch} variant={'secondary'}>
          Clear Search
        </Button>
      </div>
    )
  }

  return (
    <div className="flex flex-wrap gap-x-14 gap-y-10">
      {Array.from({ length: 6 }).map((_, index) => 
        <BlogComponentGlobal key={index}  />
    )}
    </div>
  )
}

export default SearchPostList