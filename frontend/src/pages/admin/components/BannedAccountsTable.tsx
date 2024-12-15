import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useBlogStore } from "@/stores/useBlogStore"
import { Calendar, Gavel } from "lucide-react"

const BannedAccountsTable = () => {
    const { accounts, isLoading, error } = useBlogStore()

    if (isLoading) {
        return (
            <div className="flex items-center justify-center py-8">
                <div className="text-zinc-400">Fetching Banned Accounts...</div>
            </div>
        )
    }

    if (error) {
        return (
            <div className="flex items-center justify-center py-8">
                <div className="text-red-400">{error}</div>
            </div>
        )
    }

    return (
        <Table>
            <TableHeader>
                <TableRow className="border-zinc-700/50 hover:bg-zinc-800/50">
                    <TableHead className="w-[50px]"></TableHead>
                    <TableHead>Username</TableHead>
                    <TableHead>Email Address</TableHead>
                    <TableHead>Ban Reason</TableHead>
                    <TableHead>Date Banned</TableHead>
                    <TableHead>Ban Expiration</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                </TableRow>
            </TableHeader>

            <TableBody>
                {accounts
                    .filter((account) => account.isBanned === 1)
                    .map((account) => (
                        <TableRow key={account._id} className="border-zinc-700/50 hover:bg-zinc-800/50 text-zinc-400">
                            <TableCell>
                                <img src={account.imageUrl} alt={account.username} className="rounded-full object-cover" />
                            </TableCell>
                            <TableCell className="font-medium text-zinc-100">{account.username}</TableCell>
                            <TableCell>{account.email}</TableCell>
                            <TableCell>{account.banReason}</TableCell>
                            <TableCell>
                                <span className="inline-flex items-center gap-1 text-zinc-400">
                                    <Calendar className="size-4" />
                                    {account.dateBanned}
                                </span>
                            </TableCell>
                            <TableCell>
                                <span className="inline-flex items-center gap-1 text-zinc-400">
                                    <Calendar className="size-4" />
                                    {account.banExpiration}
                                </span>
                            </TableCell>

                            <TableCell className="text-right">
                                <div className="flex gap-2 justify-end">
                                    <Button
                                        variant={'ghost'}
                                        size={'sm'}
                                        className="text-red-400 hover:text-red-300 hover:bg-red-400/10"
                                        // onClick={()=> unBanUser(account._id)}
                                    >
                                        <Gavel className="size-4" />
                                        Unban
                                    </Button>
                                </div>
                            </TableCell>
                        </TableRow>
                    )
                )}
            </TableBody>
        </Table>
    )
}

export default BannedAccountsTable