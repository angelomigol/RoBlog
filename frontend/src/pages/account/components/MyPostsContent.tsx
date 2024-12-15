import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Filter } from "lucide-react"

const MyPostsContent = () => {
    return (
      <div className="max-w-6xl mx-auto space-y-4 py-4">
        <div className="mx-auto w-[900px]">
          <Select defaultValue="recent">
            <SelectTrigger className="w-fit flex items-center justify-start gap-2 border-none focus:ring-0">
              <Filter />
              <SelectValue placeholder="Filter" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="recent">Recent</SelectItem>
                <SelectItem value="viewed">Most Viewed</SelectItem>
                <SelectItem value="liked">Most Liked</SelectItem>
                <SelectItem value="game_reviews">Game Reviews</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="max-w-6xl mx-auto flex flex-col items-center divide-y-2 gap-y-10">
          {Array.from({ length: 6 }).map((_, index) => 
            <div key={index} className="pt-10 flex flex-col gap-3 max-w-[900px]">
              <h1 className="text-3xl font-bold">Blog Title</h1>
              <div className="flex items-start divide-x-2 text-xl">
                <p className="pr-3">Author</p>
                <p className="px-3">Category</p>
                <p className="pl-3">Date</p>
              </div>
              <img src="/thumbnail.png" alt="RoBlogs Thumbnail" className="w-full h-[323px] object-fill" />
              <p className="text-xl line-clamp-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi deleniti qui reiciendis aperiam quos accusamus officiis suscipit, ipsum dolore quam soluta voluptates ea aliquid assumenda. Dolor ipsa asperiores unde iste minus magni at, consectetur quia velit voluptatibus, nostrum quidem iure?</p>
            </div>
          )}
        </div>
      </div>
    )
}

export default MyPostsContent