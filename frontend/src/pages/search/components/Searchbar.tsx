import { FormEvent, useState } from "react"
import { Input } from "@/components/ui/input"
import { Search, X } from "lucide-react"
import { Button } from "@/components/ui/button"


interface SearcbarProps {
  onSearch: (searchInput: string) => void
  onClear: () => void
}

const Searchbar = ({ onSearch, onClear }: SearcbarProps) => {
  const [searchInput, setSearchInput] = useState("")

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const trimmedSearch = searchInput.trim()

    if (trimmedSearch) {
      onSearch(trimmedSearch)
    }
  }
  
  const handleClear = () => {
    setSearchInput("")
    onClear()
  }

  return (
    <form onSubmit={handleSearch} className="relative flex item-center rounded-lg border border-white bg-black px-2">
      <Search className="mt-2" />
      <Input 
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        type="text"
        placeholder="Search here..."
        className="w-[578px] h-[42px] bg-black border-none focus-visible:ring-0"
      />
      {searchInput && (
        <Button
          type="button"
          variant="ghost"
          size="icon"
          onClick={handleClear}
          className="absolute right-2 top-1/2 -translate-y-1/2 hover:bg-transparent"
        >
          <X className="h-4 w-4 text-white/70 hover:text-white" />
        </Button>
      )}
      <button type="submit" className="hidden">Search</button>
    </form>
  )
}

export default Searchbar