import { UilFolderOpen } from '@iconscout/react-unicons'
const Showingpostscount = () => {
    return (
        <div className='flex flex-col w-full h-[7.7rem] px-8 rounded-2xl bg-blue-600'>
            <div className=' flex justify-between mt-6 '>
                <div className='flex items-center'>
                    <UilFolderOpen className="h-6 w-6 fill-white" />
                    <h1 className='text-white font-medium text-[1.65rem] ml-4'>Crypto Winter's</h1>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="white">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                    </svg>
                </div>

            </div>
            <div className='flex mt-3 ml-1 items-center'>
                <h3 className='text-white text-[14px]'>#Bitcoin</h3>
                <div className='ml-2 flex justify-center items-center bg-white text-gray-500 text-sm rounded-2xl h-5 w-20 '>
                    <h3>1253 Posts</h3>
                </div>
            </div>
        </div>
    )
}
export default Showingpostscount