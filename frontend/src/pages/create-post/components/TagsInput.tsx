import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, X } from "lucide-react";
import React, { useState } from "react";

interface TagsInputProps {
    onTagsChange?: (tags: string[]) => void
    initialTags?: string[]
}

const TagsInput: React.FC<TagsInputProps> = ({ onTagsChange, initialTags = [] }) => {
    const [tags, setTags] = useState<string[]>(initialTags)
    const [inputValue, setInputValue] = useState<string>("")

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }

    const addNewTag = () => {
        const trimmedTag = inputValue.trim()
        if (trimmedTag && !tags.includes(trimmedTag)) {
            const newTags = [...tags, trimmedTag]
            setTags(newTags)
            setInputValue("")
            onTagsChange?.(newTags)
        }
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            e.preventDefault()
            addNewTag()
        } else if (e.key === "Backspace" && inputValue === "" && tags.length > 0) {
            const newTags = tags.slice(0, -1)
            setTags(newTags)
            onTagsChange?.(newTags)
        }
    }

    const handleRemoveTag = (tagToRemove: string) => {
        const newTags = tags.filter(tag => tag !== tagToRemove)
        setTags(newTags)
        onTagsChange?.(newTags)
    }

    return (
        <div>
            <div className='flex items-center gap-4'>
                <Input 
                    type="text"
                    value={inputValue}
                    className="w-[20%]" 
                    placeholder='Add Tags'
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                />

                <Button 
                    variant={"outline"}
                    className="bg-transparent w-10"
                    onClick={()=> {
                        addNewTag();
                    }}
                >

                    <Plus className='size-6' />
                </Button>
            </div>

            <div className='max-h-24 overflow-y-auto'>
                <div className='h-full'>
                    {tags?.length > 0  && (
                        <div className='flex items-center gap-2 flex-wrap mt-2'>
                            {tags.map((tag, index) => (
                                <span 
                                    key={index} 
                                    className='flex items-center gap-2 text-sm py-2 px-3 bg-[#BDB3BF]/20 rounded-lg'
                                >
                                    # {tag}
                                    <Button 
                                        size={'icon'}
                                        variant={'destructive'}
                                        onClick={() => {
                                            handleRemoveTag(tag)
                                        }}
                                    >
                                        <X />
                                    </Button>
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default TagsInput