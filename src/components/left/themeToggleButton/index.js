import { useState } from "react";


const ThemeToggleButton = () => {
    const [isBright, setIsBright] = useState(true);

    return (
        <div className={(isBright) ? 'flex justify-center items-center' : 'flex justify-center items-center bg-gray-400'}>
            <svg xmlns="http://www.w3.org/2000/svg" className={(isBright) ? "h-8 w-8 fill-blue-500" : "h-8 w-8 fill-white"} fill="blue" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <div className='ml-1'>
                <div className={(isBright) ? " w-16 h-7 flex cursor-pointer items-center border-blue-400 border-[2px] rounded-lg p-1" : " w-16 h-7 flex cursor-pointer items-center border-white bg-black justify-end border-[2px] rounded-lg p-1"}
                    onClick={(e) => {
                        setIsBright(!isBright);
                    }}>
                    <div
                        className={(isBright) ? "toggle-dot w-1 h-4 rounded-[5px] bg-blue-700 shadow-md" : "toggle-dot w-1 h-4 rounded-[5px] bg-white shadow-md"}
                    >
                    </div>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" className={(isBright) ? "h-7 w-7 ml-1 fill-blue-700" : "h-7 w-7 ml-1 fill-white opacity-80"} viewBox="0 0 20 20" fill="currentColor">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
        </div>
    );
};

export default ThemeToggleButton;