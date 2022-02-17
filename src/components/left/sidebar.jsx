import "./sidebar.css";
import logo from "../../assets/images/Cards_Emblem_1Color_Blue.webp";
import image from "../../assets/images/IMG_20211205_213225.jpg";
import { UilEstate, UilReact, UilMicrophone, UilBrain, UilBookOpen, UilPresentationPlay, UilLightbulbAlt, UilBriefcaseAlt, UilDesert } from '@iconscout/react-unicons';

function Statistics(props) {
    return (
        <div className="text-blue-600 text-center font-small">
            {props.quantity} <span className="text-blue-400">{props.category}</span>
        </div>
    )
}
function Navigationbutton(props) {
    return (
        <button className="flex flex-row w-[85%] h-16 bg-gradient-to-r from-gray-100 to-blue-100  items-center rounded-2xl hover:bg-blue-700 py-2 ">
            <span className="py-1 flex align-middle text-lg font-bold">{props.page}</span>
        </button>
    )
}

function Aside() {
    return (
        <div className="flex flex-col items-center " >

            <div className="flex flex-col w-full  items-center h-auto
            bg-gradient-to-r from-sky-500 to-indigo-500">
                <div className="my-6">
                    <img className="h-32 w-32 rounded-full" src={logo} alt="" />
                </div>
                <h1 className="text-white text-2xl font-medium">my2cents</h1>
                <div className="w-[85%] mt-6">
                    <div className="h-40 rounded-tl-2xl rounded-tr-2xl w-full bg-cover bg-no-repeat bg-[url('https://media.istockphoto.com/photos/data-analyzing-in-exchange-stock-market-the-candle-chars-on-display-picture-id880534636')]"></div>
                    <div className="flex flex-col h-34 w-full  border-b-2  items-center bg-white">
                        <div className="relative  top-[-35px] border-2 rounded-full p-0 ">
                            <img className="h-16 w-16 rounded-full" src={image} alt="" />
                        </div>
                        <h1 className="text-blue-600 text-xl mt-[-26px] font-medium">Professor</h1>
                        <h2 className="text-blue-400 mb-4">Istanbul, Turkey</h2>
                    </div>
                </div>
            </div>
            {/* first secction done */}
            <div className="flex flex-col w-[85%] h-24 bg-white justify-center rounded-bl-2xl rounded-br-2xl">
                <div className="flex flex-row justify-around px-3.5">
                    <Statistics quantity="5k" category="Posts" />
                    <Statistics quantity="500" category="videos" />
                    <Statistics quantity="40" category="Books" />
                </div>
                <div className="flex flex-row my-3 justify-around">
                    <Statistics quantity="2k" category="Ideas" />
                    <Statistics quantity="126" category="Introductions" />
                    <Statistics quantity="652" category="Podcasts" />
                </div>
            </div>
            {/* Navigation Buttons */}
            <div className="flex flex-col mt-12 w-full justify-center items-center border-b-2  ">
                <button className="flex flex-row my-2 w-[85%] h-16 bg-blue-700  items-center rounded-2xl hover:bg-blue-700 py-2 ">
                    <UilEstate className="mx-4 inline my-auto fill-blue-300 h-8 w-8" />
                    <span className="py-1 flex align-middle text-lg font-medium text-white">Home</span>
                </button>
                <button className="flex flex-row my-2 w-[85%] h-16 bg-gradient-to-r from-gray-100 to-blue-100  items-center rounded-2xl hover:bg-blue-700 py-2 ">
                    <UilBookOpen className="mx-4 inline my-auto fill-blue-500 h-8 w-8" />
                    <span className="py-1 flex align-middle text-lg font-medium">myBook</span>
                </button>
                <button className="flex flex-row my-2 w-[85%] h-16 bg-gradient-to-r from-gray-100 to-blue-100  items-center rounded-2xl hover:bg-blue-700 py-2 ">
                    <UilPresentationPlay className="mx-4 inline my-auto fill-blue-500 h-8 w-8" />
                    <span className="py-1 flex align-middle text-lg font-medium">myVideo</span>
                </button>
                <button className="flex flex-row my-2 w-[85%] h-16 bg-gradient-to-r from-gray-100 to-blue-100  items-center rounded-2xl hover:bg-blue-700 py-2 ">
                    <UilLightbulbAlt className="mx-4 inline my-auto fill-blue-500 h-8 w-8" />
                    <span className="py-1 flex align-middle text-lg font-medium">myIdea</span>
                </button>
                <button className="flex flex-row my-2 w-[85%] h-16 bg-gradient-to-r from-gray-100 to-blue-100  items-center rounded-2xl hover:bg-blue-700 py-2 ">
                    <UilBriefcaseAlt className="mx-4 inline my-auto fill-blue-500 h-8 w-8" />
                    <span className="py-1 flex align-middle text-lg font-medium">myJob</span>
                </button>
                <button className="flex flex-row my-2 w-[85%] h-16 bg-gradient-to-r from-gray-100 to-blue-100  items-center rounded-2xl hover:bg-blue-700 py-2 ">
                    <UilMicrophone className="mx-4 inline my-auto fill-blue-500 h-8 w-8" />
                    <span className="py-1 flex align-middle text-lg font-medium">myPodcast</span>
                </button>
                <button className="flex flex-row my-2 w-[85%] h-16 bg-gradient-to-r from-gray-100 to-blue-100  items-center rounded-2xl hover:bg-blue-700 py-2 ">
                    <UilBrain className="mx-4 inline my-auto fill-blue-500 h-8 w-8" />
                    <span className="py-1 flex align-middle text-lg font-medium">myReuse</span>
                </button>
                <button className="flex flex-row my-2 w-[85%] h-16 bg-gradient-to-r from-gray-100 to-blue-100  items-center rounded-2xl hover:bg-blue-700 py-2 ">
                    <UilDesert className="mx-4 inline my-auto fill-blue-500 h-8 w-8" />
                    <span className="py-1 flex align-middle text-lg font-medium">mySlowfood</span>
                </button>
                <button className="flex flex-row my-2 w-[85%] h-16 bg-gradient-to-r from-gray-100 to-blue-100  items-center rounded-2xl hover:bg-blue-700 py-2 ">
                    <UilReact className="mx-4 inline my-auto fill-blue-500 h-8 w-8" />
                    <span className="py-1 flex align-middle text-lg font-medium">myCM</span>
                </button>

            </div>

        </div>
    );
}

export default Aside;