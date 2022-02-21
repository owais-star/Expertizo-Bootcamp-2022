const Postsfilter = () => {
    return (
        <div className='rounded-2xl px-8 h-14 w-full items-center flex justify-between bg-gray-100'>
            <div className='text-blue-500 font-semibold text-3xl'>
                <h1>Posts</h1>
            </div>
            <div className='flex justify-between items-center p-1 bg-blue-600 text-white rounded w-[120px]'>
                <div className='ml-2'>
                    <h3>Latest</h3>
                </div>
                <div className='mr-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default Postsfilter