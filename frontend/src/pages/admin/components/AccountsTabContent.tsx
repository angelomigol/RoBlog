import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import AccountsTable from "./AccountsTable"
import { Search, Wrench } from "lucide-react"
import { Input } from "@/components/ui/input"

const AccountsTabContent = () => {
    return (
        <Card className="bg-zinc-800/50 border-zinc-700/50 text-zinc-100">
            <CardHeader>
                <div className="flex items-center justify-between">
                    <div>
                        <CardTitle className="flex items-center gap-2">
                            <Wrench className="size-5" />
                            Account Maanger
                        </CardTitle>
                        <CardDescription>Manage User Accounts</CardDescription>
                    </div>
                    
                    {/* SEARCH BAR */}
                    <div className="flex item-center rounded-lg border border-zinc-700/50 bg-black px-2">
                        <Search className="mt-[6px]" />
                        <Input 
                            type="text"
                            placeholder="Search Username..."
                            className="bg-black border-none focus-visible:ring-0"
                        />
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                <AccountsTable />
            </CardContent>
        </Card>
    )
}

export default AccountsTabContent