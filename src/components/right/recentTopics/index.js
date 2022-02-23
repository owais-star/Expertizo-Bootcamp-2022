import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'
const Topic = (props) => {
    return (
        <div className="flex w-[90%] justify-between items-center my-3 cursor-pointer">
            <div className="w-[90%]">
                <h3 className="text-gray-800 text-base font-medium">{props.title}</h3>
            </div>
            <div className="flex justify-center items-center text-blue-400 text-xs h-5 w-10 bg-white rounded-lg">
                <h4>{props.count}</h4>
            </div>
        </div>
    )
}

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
                        <div className='cursor-pointer'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center h-[100rem] overflow-x-hidden overflow-scroll bg-gray-200 " >
                    <Topic title="Crypto Winter's" count="1234" />
                    <Topic title="Crypto Wars" count="1234" />
                    <Topic title="Lionel Messi sells NFT'S" count="1234" />
                    <Topic title="Reasons to use bitcoin for transactions" count="1234" />
                    <Topic title="Elon Musk has mad it off Earth" count="1234" />
                    <Topic title="Satoshi's Evolution" count="1234" />
                    <Topic title="Reasons to use bitcoin for transaction" count="1234" />
                    <Topic title="Why can't bitcoin be deflated" count="1234" />
                    <Topic title="How does 'Game of thrones' Realted to bitcoin in realtime" count="1234" />
                    <Topic title="Crypto Winter's" count="1234" />
                    <Topic title="Crypto Wars" count="1234" />
                    <Topic title="Lionel Messi sells NFT'S" count="1234" />
                    <Topic title="Reasons to use bitcoin for transactions" count="1234" />
                    <Topic title="Elon Musk has mad it off Earth" count="1234" />
                    <Topic title="Satoshi's Evolution" count="1234" />
                    <Topic title="Reasons to use bitcoin for transaction" count="1234" />
                    <Topic title="Why can't bitcoin be deflated" count="1234" />
                    <Topic title="How does 'Game of thrones' Realted to bitcoin in realtime" count="1234" />
                    <Topic title="Crypto Winter's" count="1234" />
                    <Topic title="Crypto Wars" count="1234" />
                    <Topic title="Lionel Messi sells NFT'S" count="1234" />
                    <Topic title="Reasons to use bitcoin for transactions" count="1234" />
                    <Topic title="Elon Musk has mad it off Earth" count="1234" />
                    <Topic title="Satoshi's Evolution" count="1234" />
                    <Topic title="New World Order" count="1234" />
                    <Topic title="Ethereum Revolution" count="1234" />
                    <Topic title="Bitcoin Evolution" count="1234" />
                    <Topic title="Reasons to use bitcoin for transaction" count="1234" />
                    <Topic title="Why can't bitcoin be deflated" count="1234" />
                    <Topic title="How does 'Game of thrones' Realted to bitcoin in realtime" count="1234" />
                </div>
                <div className="flex justify-center items-center w-full h-20 bg-gray-200 rounded-b-2xl">
                    <div className="flex justify-center items-center w-[90%] h-10 bg-white rounded-3xl">
                        <div className="">
                            <ChevronLeftIcon className='fill-blue-500 h-6 w-6' />
                        </div>
                        <div className="flex bg-gray-100 mx-2 text-blue-500 font-medium rounded-lg h-6 w-14 justify-around  ">
                            <h3 className=''>1</h3>
                            of
                            <h3 className=''>16</h3>
                        </div>
                        <div className="">
                            <ChevronRightIcon className='fill-blue-500 h-6 w-6' />
                        </div>

                    </div>
                </div>
            </div>

        </>

    );
}

export default RecentTopics;