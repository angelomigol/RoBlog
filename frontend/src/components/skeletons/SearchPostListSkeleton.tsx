const SearchPostListSkeleton = () => {
    return (
        <div className="flex flex-wrap gap-x-14 gap-y-10">
            {Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="animate-pulse cursor-pointer max-w-[330px] w-[330px] space-y-2">
                    <div className="w-full h-[208px] bg-gray-400 rounded-lg" />
                    <div className="max-h-[130px] h-[130px] flex px-2">
                        <div className="w-full flex flex-col gap-y-2">
                            <div className="w-1/2 h-6 bg-gray-400 rounded" />
                            <div className="w-1/4 h-4 bg-gray-400 rounded" />
                            <div className="h-4 bg-gray-400 rounded" />
                            <div className="h-4 bg-gray-400 rounded" />
                            <div className="w-1/4 h-4 bg-gray-400 rounded" />
                        </div>
                    </div>
                </div>
            ))}
        </div>
      )
}

export default SearchPostListSkeleton