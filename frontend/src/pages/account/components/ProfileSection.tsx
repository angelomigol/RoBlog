import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { useUser } from "@clerk/clerk-react"
import { PenLine, Settings } from "lucide-react"
import moment from "moment"


const ProfileSection = () => {
    const { user } = useUser()

    return (
        <div className="h-auto w-full">  
            <img 
                src="/thumbnail.png" 
                alt="Author Banner" 
                className="max-h-[280px] w-full object-fill"
            /> 

            <div className="max-w-3xl md:max-w-6xl mx-auto relative flex flex-col md:flex-row items-center md:items-start">
                <Avatar className="border border-white absolute md:-top-20 top-[-10rem] size-[120px] md:size-[182px]">
                    <AvatarImage src={user?.imageUrl} />
                    <AvatarFallback>
                        <img 
                            src="https://github.com/shadcn.png" 
                            alt="Profile Avatar" 
                            className="rounded-full size-full"
                        />
                    </AvatarFallback>
                </Avatar>
                <div className="mt-[6rem] md:mt-0 md:ml-[200px] p-3 w-full space-y-3">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-3">
                        <div className="cursor-pointer group max-w-full flex items-end gap-2">
                            <p className="text-xl md:text-3xl truncate">{user?.username}</p>
                            <PenLine className="size-[22px] mb-1 hidden group-hover:block" />
                        </div>
                        <Settings className="cursor-pointer hover:opacity-75 transition-opacity" />
                    </div>
                    <div className="flex flex-col md:flex-row justify-between text-sm">
                        <p>{user?.emailAddresses[0].emailAddress}</p>
                        <p>Joined {moment(user?.createdAt).format('MMMM DD, YYYY')}
                        </p>
                    </div>
                    <Textarea
                        className="bg-black resize-none w-full"
                        placeholder="Write something about yourself..."
                    />
                </div>
            </div>
        </div>
    )
}

export default ProfileSection