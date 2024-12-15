import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Wrench } from "lucide-react"
import CommentsTable from "./CommentsTable"

const ReportedCommentsContent = () => {
    return (
        <Card className="bg-zinc-800/50 border-zinc-700/50 text-zinc-100">
            <CardHeader>
                <div className="flex items-center justify-between">
                    <div>
                        <CardTitle className="flex items-center gap-2 text-red-400">
                            <Wrench className="size-5" />
                            Reported Comments Manager
                        </CardTitle>
                        <CardDescription>Manage Comments Reported By Users</CardDescription>
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                <CommentsTable />
            </CardContent>
        </Card>
    )
}

export default ReportedCommentsContent