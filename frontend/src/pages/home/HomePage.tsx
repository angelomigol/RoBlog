import { ScrollArea } from "@/components/ui/scroll-area"
import BloggerSection from "./components/BloggerSection"
import DiscoverSection from "./components/DiscoverSection"
import HomeSection from "./components/HomeSection"


const HomePage = () => {
  return (
    <ScrollArea className="h-screen flex flex-col gap-14">
      <div className="w-screen p-6 space-y-8">

        {/* HOME SECTION */}
        <HomeSection />

        {/* BLOGGER SECTION */}
        <BloggerSection isLoading={false} />

        {/* DISCOVER SECTION */}
        <DiscoverSection />
      </div>
    </ScrollArea>
  )
}

export default HomePage