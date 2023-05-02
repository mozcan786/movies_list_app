export default function Loader() {
    return <div className="flex justify-center min-h-screen pt-[100px]">
        <div className="flex flex-col">
            <div className='flex space-x-24'>
                <div className='container space-y-10 relative'>
                    <div className='flex flex-col'>
                        <div className='flex flex-row space-x-4'>
                            <div className="w-12 h-12 rounded-full animate-spin border-x-8 border-dashed border-purple-500 border-t-transparent">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}