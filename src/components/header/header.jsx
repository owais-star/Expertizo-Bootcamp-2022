import image from "../../assets/images/profile.jpg";

const Header = () => {
    const placeholder = "search topic, book, video, idea, talent, podcast";
    return (
        <div className="flex items-center justify-center h-full border-b-2  border-gray-300 w-full">
            <div className="w-[75%] h-[2.7rem] border-[1px] m-4 flex items-center  border-blue-300 rounded-3xl ">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-6" fill="none" viewBox="0 0 24 24" stroke="blue">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input type={"search"} placeholder={placeholder} className="w-[89%] placeholder:text-blue-500 placeholder:font-xl placeholder:text-[0.98rem] pl-2 outline-none" />
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-[1.6rem]" fill="none" viewBox="0 0 24 24" stroke="blue">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
            </div>
            <div className="flex w-24 align-center justify-evenly">
                <div className="">
                    <div className="relative left-[19px] top-[5px] h-2 w-2 border-white rounded-full bg-red-400">

                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 fill-blue-600" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                    </svg>
                </div>
                <div className="">
                    <div className="relative left-[22px] top-[7px] h-2 w-2 border-white rounded-full bg-red-400">

                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 fill-blue-600" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                        <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                    </svg>
                </div>
            </div>
            <div>
                <div className="w-[5.3rem] h-[2.7rem] flex items-center justify-center rounded-3xl border-[1px] border-blue-300 bg-blue-50">
                    <img src={image} alt="" className=" rounded-full h-8 w-8" />
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-[1.3rem] ml-2 text-semibold stroke-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </div>

        </div>
    )
}

export default Header;