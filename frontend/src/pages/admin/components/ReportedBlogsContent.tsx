import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import BlogsTable from "./BlogsTable"
import { Wrench } from "lucide-react"

const ReportedBlogsContent = () => {
    return (
        <Card className="bg-zinc-800/50 border-zinc-700/50 text-zinc-100">
            <CardHeader>
                <div className="flex items-center justify-between">
                    <div>
                        <CardTitle className="flex items-center gap-2 text-red-400">
                            <Wrench className="size-5" />
                            Reported Blogs Manager
                        </CardTitle>
                        <CardDescription>Manage Blogs Reported By Users</CardDescription>
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                <BlogsTable />
            </CardContent>
        </Card>
    )
}

export default ReportedBlogsContent