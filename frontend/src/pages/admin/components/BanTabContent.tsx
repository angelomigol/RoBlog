import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import BannedAccountsTable from "./BannedAccountsTable"
import { Wrench } from "lucide-react"

const BanTabContent = () => {
    return (
        <Card className="bg-zinc-800/50 border-zinc-700/50 text-zinc-100">
            <CardHeader>
                <div className="flex items-center justify-between">
                    <div>
                        <CardTitle className="flex items-center gap-2 text-red-400">
                            <Wrench className="size-5" />
                            Banned Accounts Maanger
                        </CardTitle>
                        <CardDescription>View and modify list of banned users</CardDescription>
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                <BannedAccountsTable />
            </CardContent>
        </Card>
    )
}

export default BanTabContent