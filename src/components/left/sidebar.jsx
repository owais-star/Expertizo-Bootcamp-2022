// import "./sidebar.css";
import logo from "../../assets/images/Cards_Emblem_1Color_Blue.webp";
import image from "../../assets/images/profile.jpg";
import banner1 from "../../assets/images/banner1.png";
import banner2 from "../../assets/images/banner2.png";
import { UilEstate, UilReact, UilMicrophone, UilBrain, UilBookOpen, UilPresentationPlay, UilLightbulbAlt, UilBriefcaseAlt, UilDesert } from '@iconscout/react-unicons';
import ThemeToggleButton from "./themeToggleButton/index";
import './sidebar.css'

function Statistics(props) {
    return (
        <div className="text-blue-600 text-center font-semibold text-sm">
            {props.quantity} <span className="text-blue-400 text-xs">{props.category}</span>
        </div>
    )
}
const Nav = [
    { icon: <UilEstate className="mx-4 inline my-auto fill-blue-500 h-8 w-8" />, Name: "Home" },
    { icon: <UilBookOpen className="mx-4 inline my-auto fill-blue-500 h-8 w-8" />, Name: "myBook" },
    { icon: <UilPresentationPlay className="mx-4 inline my-auto fill-blue-500 h-8 w-8" />, Name: "myVid" },
    { icon: <UilLightbulbAlt className="mx-4 inline my-auto fill-blue-500 h-8 w-8" />, Name: "myIdea" },
    { icon: <UilBriefcaseAlt className="mx-4 inline my-auto fill-blue-500 h-8 w-8" />, Name: "myJob" },
    { icon: <UilMicrophone className="mx-4 inline my-auto fill-blue-500 h-8 w-8" />, Name: "myPodcast" },
    { icon: <UilBrain className="mx-4 inline my-auto fill-blue-500 h-8 w-8" />, Name: "myReaused" },
    { icon: <UilDesert className="mx-4 inline my-auto fill-blue-500 h-8 w-8" />, Name: "mySlowfood" },
    { icon: <UilReact className="mx-4 inline my-auto fill-blue-500 h-8 w-8" />, Name: "myCN" },
];
function Navigationbutton(props) {
    return (
        <button className="flex flex-row drop-shadow-md my-2 w-[85%] bg-gradient-to-r from-gray-100 to-blue-100 hover:text-white h-16 items-center rounded-2xl hover:from-blue-700 hover:to-blue-700 py-2 ">
            {props.icon}
            <span className="py-1 flex align-middle text-lg font-medium">{props.Name}</span>
        </button>
    )
}

function Aside() {
    return (
        <div className="flex flex-col items-center  " >

            <div className="flex flex-col w-full  items-center h-auto bg-gradient-to-r from-sky-500 to-indigo-500 bg-cover bg-no-repeat  " >
                <div className="mt-6 mb-3.5 border-2 rounded-full">
                    <img className="h-28 w-28 rounded-full" src={logo} alt="" />
                </div>
                <h1 className="text-white text-2xl font-medium">my2cents</h1>
                <div className="w-[85%] mt-6">
                    <div className="h-28 rounded-tl-2xl rounded-tr-2xl w-full bg-cover bg-no-repeat bg-coverphoto"></div>
                    <div className="flex flex-col h-24 w-full  border-b-2  items-center bg-white">
                        <div className="relative  top-[-28px] border-2 border-blue-300 p-0.5 rounded-full">
                            <img className="h-12 w-12 rounded-full" alt="" src={image} />
                        </div>
                        <h1 className="text-blue-600 text-lg mt-[-26px] font-bold">Professor</h1>
                        <h2 className="text-blue-400 mb-4">Istanbul, Turkey</h2>
                    </div>
                </div>
            </div>
            <div className="flex flex-col border-r-2 items-center w-full">
                {/* first secction done */}
                <div className="flex flex-col w-[85%] drop-shadow-xl h-24 bg-white justify-center rounded-bl-2xl rounded-br-2xl">
                    <div className="flex flex-row justify-around px-8">
                        <Statistics quantity="5k" category="Posts" />
                        <Statistics quantity="500" category="Videos" />
                        <Statistics quantity="40" category="Books" />
                    </div>
                    <div className="flex flex-row my-3 px-3 justify-between">
                        <Statistics quantity="2k" category="Ideas" />
                        <Statistics quantity="126" category="Introductions" />
                        <Statistics quantity="652" category="Podcasts" />
                    </div>
                </div>
                {/* Navigation Buttons */}
                <div className="flex flex-col mt-12 w-full justify-center items-center border-b-2 pb-3 ">
                    {Nav.map((item, index) => {
                        return (
                            <Navigationbutton key={index} Name={item.Name} icon={item.icon} />
                        )
                    })}
                </div>

                <div className="flex flex-col w-[85%] items-center mt-8">
                    <ThemeToggleButton />
                    <div className='mt-10  w-full'>
                        <img src={banner1} className="rounded-xl h-[70rem]" />
                    </div>
                    <div className='mt-10  w-full'>
                        <img src={banner2} className="rounded-xl h-[25rem]" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Aside;