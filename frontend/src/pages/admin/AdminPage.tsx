import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Header from "./components/Header"
import DashboardStats from "./components/DashboardStats"
import { useAuthStore } from "@/stores/useAuthStore"
import { Gavel, MessageSquare, Newspaper, Users2 } from "lucide-react"
import AccountsTabContent from "./components/AccountsTabContent"
import BanTabContent from "./components/BanTabContent"
import ReportedBlogsContent from "./components/ReportedBlogsContent"
import ReportedCommentsContent from "./components/ReportedCommentsContent"
import { useAdminStore } from "@/stores/useAdminStore"
import { useEffect } from "react"
import { useBlogStore } from "@/stores/useBlogStore"

const AdminPage = () => {
  // const { isAdmin, isLoading } = useAuthStore()
  const { fetchStats } = useAdminStore()
  const { fetchAccounts } = useBlogStore()

  useEffect(() => {
    fetchStats()
    fetchAccounts()

  }, [fetchStats, fetchAccounts, ])

  // if (!isAdmin && !isLoading) return <div>Unauthorized</div>

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-900 to-black text-zinc-100 p-8">
      <Header />

      <DashboardStats />

      <Tabs defaultValue="accounts" className="space-y-4 text-zinc-100">
        <TabsList className="p-1  bg-zinc-800/50 text-zinc-400">
          <TabsTrigger value="accounts" className="data-[state=active]:bg-zinc-700 data-[state=active]:text-zinc-100">
            <Users2 className="mr-2 size-4" />
            Accounts
          </TabsTrigger>
          <TabsTrigger value="banned" className="data-[state=active]:bg-zinc-700 data-[state=active]:text-zinc-100">
            <Gavel className="mr-2 size-4" />
            Banned Users 
          </TabsTrigger>
          <TabsTrigger value="report_blogs" className="data-[state=active]:bg-zinc-700 data-[state=active]:text-zinc-100">
            <Newspaper className="mr-2 size-4" />
            Reported Blogs
          </TabsTrigger>
          <TabsTrigger value="report_comments" className="data-[state=active]:bg-zinc-700 data-[state=active]:text-zinc-100">
            <MessageSquare className="mr-2 size-4" />
            Reported Comments 
          </TabsTrigger>
        </TabsList>

        <TabsContent value="accounts">
          <AccountsTabContent />
        </TabsContent>
        <TabsContent value="banned">
          <BanTabContent />
        </TabsContent><TabsContent value="report_blogs">
          <ReportedBlogsContent />
        </TabsContent>
        <TabsContent value="report_comments">
          <ReportedCommentsContent />
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default AdminPage