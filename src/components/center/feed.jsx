import banner3 from "../../assets/images/travellogo.png";
import SelectedCategory from "./selectedCategoryPostCount/index"
import FilterPosts from "./filterPosts/index"
import Post from "./post/index.jsx"
import Pagination from "./pagination/index"
import PostEditor from "./postEditor/index"
import profile from "../../assets/images/profile.jpg"
import { UilInvoice } from '@iconscout/react-unicons'
import { db } from '../../config/firebase'
import { addDoc, doc, getDocs, collection, onSnapshot } from 'firebase/firestore'
import { useState, useEffect } from "react";


const postsData1 = [
    {
        views: "12.5k",
        likes: "12.5k",
        dislikes: "12.5k",
        shares: "12.5k",
        postText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. N Praesent dictum luctus ante, id euismod libero dignissim in. Nullam faucibus sagittis sapien ac laoreet. Nam feugiat bibendum nisi. Nunc turpis nunc, egestas eu mollis nec, tincidunt eget lorem. Integer laoreet non tellus et viverra. Sed facilisis neque nec lorem laoreet condimentum. Morbi convallis interdum ultrices. Aenean luctus a lectus in lobortis. Nunc aliquet ornare dolor a semper.",
        name: "John dev ",
        topic: "#The NFTs for a poem, an article, a short film, and a novel",
        profilePictureUrl: profile
    },
    {
        views: "12.5k",
        likes: "12.5k",
        dislikes: "12.5k",
        shares: "12.5k",
        postText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. N Praesent dictum luctus ante, id euismod libero dignissim in. Nullam faucibus sagittis sapien ac laoreet. Nam feugiat bibendum nisi. Nunc turpis nunc, egestas eu mollis nec, tincidunt eget lorem. Integer laoreet non tellus et viverra. Sed facilisis neque nec lorem laoreet condimentum. Morbi convallis interdum ultrices. Aenean luctus a lectus in lobortis. Nunc aliquet ornare dolor a semper.",
        name: "Craig Cooper",
        topic: "#The NFTs for a poem, an article, a short film, and a novel",
        profilePictureUrl: profile
    }, {
        views: "12.5k",
        likes: "12.5k",
        dislikes: "12.5k",
        shares: "12.5k",
        postText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. N Praesent dictum luctus ante, id euismod libero dignissim in. Nullam faucibus sagittis sapien ac laoreet. Nam feugiat bibendum nisi. Nunc turpis nunc, egestas eu mollis nec, tincidunt eget lorem. Integer laoreet non tellus et viverra. Sed facilisis neque nec lorem laoreet condimentum. Morbi convallis interdum ultrices. Aenean luctus a lectus in lobortis. Nunc aliquet ornare dolor a semper.",
        name: "Alice willway",
        topic: "#The NFTs for a poem, an article, a short film, and a novel",
        profilePictureUrl: profile
    }
]

function Feed() {
    // const [postsData, setpostsData] = useState([]);
    // const getPosts = async () => {
    //     try {
    //         const querySnapshot = await getDocs(collection(db, "posts"));
    //         querySnapshot.forEach((doc) => {
    //             // doc.data() is never undefined for query doc snapshots
    //             setpostsData(postsData => [...postsData, doc.data()]);
    //             console.log(doc.id, " => ", doc.data());

    //         });
    //     } catch (error) {
    //         // console.log("error", error.message)
    //     }
    // }
    // useEffect(() => {

    //     getPosts();
    //     return () => {

    //     }
    // }, [])

    return (
        <div className="flex flex-col w-full items-center">
            <div className="flex flex-col w-[92%]">
                <div className=" mt-6">
                    <img src={banner3} alt="" className=" w-full rounded-2xl h-64" />
                </div>
                <div className="w-full mt-6">
                    <SelectedCategory />
                </div>
                <div className="w-full mt-6">
                    <FilterPosts />
                </div>
            </div>
            <div className="w-full mt-3 ">
                {postsData1.map((item, index) => {
                    return (
                        <Post key={index} name={item.name} views={item.views} likes={item.likes} dislikes={item.dislikes} shares={item.shares} postText={item.postText} profilePictureUrl={item.profilePictureUrl} topic={item.topic} />
                    )
                })}
            </div>
            <div className="flex justify-center mt-3 w-full">
                <Pagination />
            </div>
            <div className="w-[92%]">
                <div className="w-full my-8">
                    <div className="flex items-center justify-center w-full h-28 bg-blue-700 rounded-2xl">
                        <div className="flex items-center cursor-pointer justify-center w-[90%] h-12 p-4 bg-white rounded-2xl">
                            <div className="">
                                <UilInvoice className="fill-blue-700 mr-3" />
                            </div>
                            <h1 className="text-blue-700 text-lg font-semibold ">Monitize a Topic</h1>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-full">
                    <div className=" flex items-center pl-6 w-full h-14 bg-blue-100 rounded-2xl">
                        <h1 className="text-2xl text-blue-500 font-medium">Create a Post</h1>
                    </div>
                    <div className="w-full mt-3">
                        <PostEditor />
                    </div>
                    <div className="w-full">
                        <div className='flex items-center justify-between mt-2'>
                            <div className='flex flex-col'>
                                <div>
                                    <h2 className="font-medium">Stored on chain?</h2>
                                </div>
                                <div className='flex justify-between'>
                                    <div className='flex'>
                                        <div>
                                            <input className="h-4 w-4" value="true" name="storedOnChain" type={'checkbox'} />
                                        </div>
                                        <div className='ml-1'>
                                            Sure
                                        </div>
                                    </div>
                                    <div className='flex'>
                                        <div>
                                            <input className="h-4 w-4" value="false" name="storedOnChain" type={'checkbox'} />
                                        </div>
                                        <div className='ml-1'>
                                            Nope
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className="flex justify-center w-[31rem] h-11 items-center hover:bg-blue-700 bg-blue-600 rounded-2xl">

                                <h3 className='text-white text-xl'>Post</h3>

                            </button>
                        </div>
                    </div>
                </div>
                <div className="w-full">
                    <img src={banner3} alt="" className="mt-8 w-full rounded-2xl h-64" />
                </div>
            </div>
        </div>
    );
}

export default Feed;