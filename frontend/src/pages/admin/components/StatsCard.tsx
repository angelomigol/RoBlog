import { Card, CardContent } from "@/components/ui/card"

type StatsCardProps = {
    icon: React.ElementType
    label: string
    value: string
}

const StatsCard = ({ icon: Icon, label, value }: StatsCardProps) => {
    return (
        <Card className="bg-zinc-800/50 border-zinc-700/50 hover:bg-zinc-800/80 transition-colors text-zinc-100">
            <CardContent className="p-6">
                <div className="flex items-center gap-4">
                    <Icon className="size-12" />
                    <div>
                        <p className="text-sm text-zinc-400">{label}</p>
                        <p className="text-2xl font-bold">{value}</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default StatsCard