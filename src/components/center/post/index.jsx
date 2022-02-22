import profile from "../../../assets/images/profile.jpg";
import { UilEye, UilSmile, UilMeh, UilBookmark, UilMessage, UilEllipsisH } from '@iconscout/react-unicons'

const Post = (props) => {
    const current = new Date();
    const date = `${current.toLocaleDateString()} ${current.toLocaleTimeString()}`;
    return (
        <>
            <div className="flex flex-col items-center w-full border-b-2 ">
                <div className="flex flex-col w-[92%] mt-4">
                    <div className="flex justify-between items-center">
                        <div className="flex" >
                            <img src={props.profilePictureUrl} className=" rounded-full h-[25px]  w-[25px]" />
                            <h1 className="ml-2 text-blue-800 font-[600]">{props.name}</h1>
                        </div>

                        <div className="bg-gray-100 rounded-2xl px-1">
                            <p className="text-[12px] text-blue-500 font-[500]">{date}</p>
                        </div>
                    </div>
                    <div className="text-[12px] font-[500] text-blue-300 ml-8 mt-[3px]">
                        <p>{props.topic}</p>
                    </div>
                </div>


                <div className="w-[85%] text-medium my-5 pl-2 ">
                    <p className="">
                        {props.postText}
                    </p>
                </div>

                <div className="flex w-[85%] my-5 justify-between">
                    <div className="flex justify-between">
                        <div className="flex items-center justify-center cursor-pointer">
                            <UilEye className="h-7 w-8 fill-blue-700" />
                            <span className="mr-1  text-blue-500">{props.views}</span>
                        </div>
                        <div className="flex items-center justify-center cursor-pointer">
                            <UilSmile className="h-7 w-8 fill-blue-700" />
                            <span className="mr-1 text-blue-500">{props.likes}</span>
                        </div>
                        <div className="flex items-center justify-center cursor-pointer">
                            <UilMeh className="h-7 w-8 fill-blue-700" />
                            <span className="mr-1 text-blue-500">{props.dislikes}</span>
                        </div>
                        <div className="flex items-center justify-center cursor-pointer">
                            <UilBookmark className="h-7 w-8 fill-blue-700" />
                            <span className="mr-1 text-blue-500">{props.shares}</span>
                        </div>
                    </div>
                    <div className="flex">
                        <div>
                            <UilMessage className="h-7 w-8 fill-blue-700" />
                        </div>
                        <div className="ml-2">
                            <UilEllipsisH className="h-7 w-8 fill-blue-700" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Post