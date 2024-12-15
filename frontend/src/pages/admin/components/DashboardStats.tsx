import { Flag, MessageSquare, SquarePen, Users2 } from "lucide-react"
import StatsCard from "./StatsCard"
import { useAdminStore } from "@/stores/useAdminStore"

const DashboardStats = () => {
	const { stats } = useAdminStore()
    const statData = [
        {
			icon: SquarePen,
			label: "Total Posts",
			value: stats.totalPosts.toString()
		},
		{
			icon: Users2,
			label: "Total Users",
			value: stats.totalUsers.toString()
		},
		{
			icon: Flag,
			label: "Blog Reports",
			value: stats.totalBlogReports.toString()
		},
		{
			icon: MessageSquare,
			label: "Comment Reports",
			value: stats.totalCommentReports.toString()
		},
    ]

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {statData.map((stat) => (
                <StatsCard
                    key={stat.label}
                    icon={stat.icon}
                    label={stat.label}
                    value={stat.value}
                />
            ))}
        </div>
    )
}

export default DashboardStats