const RecentTopics = () => {
    return (
        <>
            <div className="flex flex-col mt-5">
                <div className="flex pl-5 pr-5 justify-between items-center rounded-tl-xl rounded-tr-xl text-white h-20 bg-blue-600">
                    <div>
                        <h1 className="font-medium">Recent Topics</h1>
                    </div>
                    <div className="flex w-20 border-white border-[1px] px-2 justify-between items-center rounded-xl h-8">
                        <h1 className="text-white">Top</h1>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col h-24 bg-gray-200 " >
                    <div className="flex h-auto w-[80%]">
                        <div className="flex  w-[80%]">
                            <p className="text-sm text-ellipsis overflow-clip">
                                lorekjkdfkgnfffffffffffffffkdnkngkdfndnkggn
                            </p>
                        </div>
                        <div className="h-6 w-12 bg-white rounded-2xl">
                            <div className="">
                                1234
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex justify-center align-center w-[95%] h-14  rounded-2xl">
                        <div className="">

                        </div>
                        <div className=""></div>
                        <div className="">

                        </div>

                    </div>
                </div>
            </div>

        </>

    );
}

export default RecentTopics;