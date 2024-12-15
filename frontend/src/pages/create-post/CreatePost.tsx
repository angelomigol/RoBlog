import { useRef, useState } from "react";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChartBar, ImagePlus, Undo2 } from "lucide-react"
import FroalaEditor from 'react-froala-wysiwyg';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/js/plugins.pkgd.min.js';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import TagsInput from "./components/TagsInput";
import { useBlogStore } from "@/stores/useBlogStore";
import { Post } from "@/types";
import { ScrollArea } from "@/components/ui/scroll-area";


const CreatePost = () => {
    const { createPost, isLoading } = useBlogStore()
    const [newPost, setNewPost] = useState<Post>({
        title: "",
        content: "",
        category: "",
        visibility: "draft",
        tags: [],
        thumbnail: null,

        likes: 0,
        views: 0,
        comments: [],
    })

    const imageInputRef = useRef<HTMLInputElement>(null)

    const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) setNewPost({ ...newPost, thumbnail: file })
    }

    const handleSubmit = async () => {
        await createPost(newPost)
    }

    return (
        <ScrollArea className="h-screen">
            <div className="h-full flex flex-col p-6 gap-10">
                <div className="flex items-center justify-between">
                    <h1 className="md:text-3xl text-2xl font-bold">Create Blog</h1>
                    <div className="space-x-5">
                        <Button 
                            onClick={handleSubmit}
                            disabled={isLoading}
                            className="bg-[#62AC4B] min-w-[144px] h-[45px] text-xl font-bold hover:bg-[#62AC4B] hover:opacity-75 transition-opacity"
                            >
                                {isLoading ? "Publishing..." : "Publish"}
                        </Button>
                        <Button variant={"ghost"} className="h-[45px] border border-white">
                            <Undo2 />
                        </Button>
                    </div>
                </div>
                <div className="space-y-4">
                    <div className="text-xs flex items-center justify-end gap-3">
                        <ChartBar />
                        <p>Status: Draft</p>
                    </div>

                    <div className="space-y-4">
                        <Input 
                            value={newPost.title}
                            onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                            className="h-20 border-none md:text-5xl font-bold focus-visible:ring-0" 
                            type="text" 
                            placeholder="Insert Blog Title Here..."
                            required
                        />

                        <FroalaEditor 
                            tag="textarea" 
                            config={{
                                quickInsertEnabled: false,
                                placeholderText: "Start Writing Your Blog Here...",
                                height: 500,
                            }} 
                            onModelChange={(model: string) => setNewPost({ ...newPost, content: model })} 
                        />

                        <div className="flex items-center justify-center gap-14">
                            <Select value={newPost.category} onValueChange={(value) => setNewPost({ ...newPost, category: value })}>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Category Type" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Select a blog category</SelectLabel>
                                        <SelectItem value="all">All</SelectItem>
                                        <SelectItem value="tutorial">Tutorial</SelectItem>
                                        <SelectItem value="updates">Updates</SelectItem>
                                        <SelectItem value="game_reviews">Game Reviews</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>

                            <Select defaultValue="draft" value={newPost.visibility} onValueChange={(value) => setNewPost({ ...newPost, visibility: value as "draft" | "public" | "private" })}>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Visiblity" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectItem value="draft">Draft</SelectItem>
                                        <SelectItem value="public">Public</SelectItem>
                                        <SelectItem value="private">Private</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="flex flex-col">
                            <h1 className="font-bold">Thumbnail</h1>
                            <p className="text-xs">Set a thumbnail that stands out to the viewers' attention.</p>
                            <input 
                                type="file" 
                                accept="image/*" 
                                onChange={handleImageSelect}
                                ref={imageInputRef}
                                hidden    
                            />

                            <div onClick={() => imageInputRef.current?.click()} className="w-[200px] flex items-center justify-center p-6 mt-2  border-2 border-dashed border-zinc-700 rounded-lg cursor-pointer">
                                <div className="text-center">
                                    {newPost.thumbnail ? (
                                        <div className="space-y-2">
                                            <div className="text-sm text-emerald-500">Image Selected:</div>
                                            <div className="text-xs text-zinc-400">{newPost.thumbnail.name.slice(0, 20)}</div>
                                        </div>
                                    ) : (
                                        <>
                                            <div className="p-3 bg-zinc-800 rounded-full inline-block">
                                                <ImagePlus className="size-6 text-zinc-400" />
                                            </div>
                                            <div className="text-sm text-zinc-400 mb-2">Upload File</div>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>

                        <TagsInput />                    
                    </div>
                </div>
            </div>
        </ScrollArea>
    )
}

export default CreatePost