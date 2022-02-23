import { useState } from 'react'

let categories = ["Bitcoin", "Crypto", "Blockchain", "Market", "Politic", "Stacking", "DEX", "Ecosystem"]



const CategoryButton = (props) => {

    return (
        <button className="bg-gray-100 rounded-xl h-5 mt-2 hover:underline decoration-blue-400">
            <h4 className="text-[0.84rem] text-blue-400 ">
                {props.btnCategory}
            </h4>
        </button>
    );
}

const Category = () => {
    const [active, setactive] = useState(true);
    return (
        <>
            <div>
                <div className="flex pl-5 pr-5 justify-between items-center rounded-xl text-white h-16 bg-blue-600">
                    <div>
                        <h1>Category</h1>
                    </div>
                    <div onClick={(e) => {
                        setactive(!active);
                    }}>
                        <svg xmlns="http://www.w3.org/2000/svg" className={(active) ? "h-6 w-6 cursor-pointer" : "h-6 w-6 cursor-pointer transition-all duration-200 rotate-180"} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className={(active) ? "flex flex-col" : "hidden"}>
                <div className="grid grid-rows-2 grid-flow-col gap-2 px-2 mt-4">
                    <div className="w-full">

                    </div>
                    <div className="w-full">

                    </div>
                    {categories.map((item, index) => {
                        return <CategoryButton btnCategory={item} key={index} />
                    })}
                </div>
                <div className="flex pl-3 mt-5 border-b-gray-200 h-16 border-b-2 border-gray-100 ">
                    <div className="flex items-center h-4">
                        <input className="h-4 w-4" type="checkbox" value="true" checked />
                        <h5 className="ml-2 text-sm text-blue-400 font-light underline">Select all categories</h5>
                    </div>
                </div>
            </div>
        </>

    );
}

export default Category;