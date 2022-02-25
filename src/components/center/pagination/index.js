import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'

const Pagination = ({ postsPerPage, totalPosts, paginate, nextPage, prevPage }) => {

    const noOfPages = []

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        noOfPages.push(i)
    }
    return (
        <div className="bg-white px-4 py-3 flex items-center justify-between sm:px-6">

            <div className="hidden sm:flex-1 sm:flex sm:items-center">
                <div>
                    <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                        <a
                            onClick={() => prevPage()}
                            href="#/"
                            className="relative inline-flex items-center px-2 py-2 rounded-l-md  bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                        >
                            <span className="sr-only">Previous</span>
                            <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                        </a>
                        {noOfPages.map((number, index) => {
                            return <a
                                key={index}
                                onClick={() => paginate(number)}
                                href="#/"
                                className="relative inline-flex items-center px-2 py-2 rounded-l-md  bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                            >
                                {number}

                            </a>

                        })}
                        <a
                            onClick={() => nextPage(noOfPages)}
                            href="#/"
                            className="relative inline-flex items-center px-2 py-2 rounded-r-md   bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                        >
                            <span className="sr-only">Next</span>
                            <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                        </a>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Pagination