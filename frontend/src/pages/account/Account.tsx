import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import MyPostsContent from "./components/MyPostsContent"
import FavoritesContent from "./components/FavoritesContent"
import ProfileSection from "./components/ProfileSection"
import { ScrollArea } from "@/components/ui/scroll-area"

const Account = () => {
  return (
    <ScrollArea className="h-screen">
      <div className="h-full w-full space-y-5">
        <ProfileSection />
        <div className="lg:max-w-7xl md:max-w-6xl max-w-3xl mx-auto">
          <Tabs defaultValue="myPosts">
            <TabsList className="flex bg-transparent px-20">
              <TabsTrigger value="myPosts" className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:text-white data-[state=active]:font-bold  rounded-none flex-1 text-3xl font-normal mx-20">
                Posts
              </TabsTrigger>
              <TabsTrigger value="favorites" className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:text-white data-[state=active]:font-bold  rounded-none flex-1 text-3xl font-normal mx-20">
                Favorites
              </TabsTrigger>
            </TabsList>

            <TabsContent value="myPosts">
              <MyPostsContent />
            </TabsContent>
            <TabsContent value="favorites">
              <FavoritesContent />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </ScrollArea>
  )
}

export default Account