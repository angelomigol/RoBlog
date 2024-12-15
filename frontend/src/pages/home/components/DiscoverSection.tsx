import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Filter } from "lucide-react"
import BlogComponentGlobal from "@/components/BlogComponentGlobal"


const DiscoverSection = () => {
  return (
    <div className="space-y-4">
      <h1 className="md:text-3xl text-2xl font-bold">Discover</h1>
      <div className="flex items-center gap-4">
        <Select>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Category Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Select a blog category</SelectLabel>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="tutorial">Tutorial</SelectItem>
              <SelectItem value="updates">Updates</SelectItem>
              <SelectItem value="game_reviews">Game Reviews</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <Select defaultValue="recent">
          <SelectTrigger className="w-fit flex items-center justify-start gap-2 border-none focus:ring-0">
            <Filter />
            <SelectValue placeholder="Filter" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="recent">Recent</SelectItem>
              <SelectItem value="tutorial">Tutorial</SelectItem>
              <SelectItem value="updates">Updates</SelectItem>
              <SelectItem value="game_reviews">Game Reviews</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    
      <div className="flex flex-wrap gap-10">
        {Array.from({ length: 8 }).map((_, index) => 
          <BlogComponentGlobal key={index} />
        )}
      </div>
    </div>
  )
}

export default DiscoverSection