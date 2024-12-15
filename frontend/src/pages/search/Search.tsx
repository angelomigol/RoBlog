import { useState } from "react"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import Searchbar from "./components/Searchbar"
import { Filter } from "lucide-react"
import SearchPostList from "./components/SearchPostList"
import { ScrollArea } from "@/components/ui/scroll-area"

const Search = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [posts, setPosts] = useState([])
    const [searchInput, setSearchInput] = useState('')

    const handleSearch = async (input: string) => {
        setSearchInput(input);
        setIsLoading(true);


        try {
          await new Promise(resolve => setTimeout(resolve, 1500));
          setPosts([]); 
        } catch (error) {
          console.error('Search failed', error);
        } finally {
          setIsLoading(false);
        }
    };
    
    const handleClearSearch = () => {
        setSearchInput('');
        setPosts([]);
    };

    return (
        <ScrollArea className="h-screen pt-6">
            <div className="h-full mx-auto max-w-6xl flex items-center flex-col px-6 pb-6 gap-8">
                <Searchbar onSearch={handleSearch} onClear={handleClearSearch} />

                <div className="w-full flex items-center justify-between gap-8">
                        <p className="w-3/5 md:text-2xl text-xl font-bold truncate">
                            Search results{" "} <span>for {" "}</span>
                            {searchInput && <span>"{searchInput}"</span>}
                        </p>

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

                </div>
                <SearchPostList
                    isLoading={isLoading}
                    posts={posts}
                    searchInput={searchInput} 
                    onClearSearch={handleClearSearch}
                />
            </div>
        </ScrollArea>
    )
}

export default Search