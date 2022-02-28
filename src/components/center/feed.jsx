import banner3 from "../../assets/images/travellogo.png";
import SelectedCategory from "./selectedCategoryPostCount/index"
import FilterPosts from "./filterPosts/index"
import Post from "./post/index.jsx"
import Pagination from "./pagination/index"
import PostEditor from "./postEditor/index"
import profile from "../../assets/images/profile.jpg"
import Categories from "../right/categories/index"
import { UilInvoice } from '@iconscout/react-unicons'
import { db } from '../../config/firebase'
import { addDoc, collection, onSnapshot } from 'firebase/firestore'
import { useState, useEffect } from "react";



function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function Feed() {
    const [postsData, setpostsData] = useState([]);
    const [postText, setpostText] = useState("");
    // pagination
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage] = useState(3)
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = postsData.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => {

        setCurrentPage(pageNumber)
    }

    const nextPage = (noOfPages) => {
        if (noOfPages.length > currentPage) {
            setCurrentPage(currentPage + 1)
        } else {
            alert("No more posts")
        }
    }
    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        } else {
            alert("this is the first page")
        }
    }
    const postData = {
        views: randomNumber(5, 541) + "k",
        likes: randomNumber(4, 7) + "k",
        dislikes: randomNumber(2, 39) + "k",
        shares: randomNumber(82, 44) + "k",
        postText: postText,
        name: "John dev",
        topic: "#The NFTs for a poem, an article, a short film, and a novel",
    };
    // to get to post text from quill editor component
    const getDataFromQuillEditor = (childData) => {
        setpostText(childData)
    }
    // for posting a post
    const sendPost = async () => {
        try {
            if (postData.postText.length > 0) {
                const docRef = await addDoc(collection(db, "posts"), postData);
                console.log("Document written with ID: ", docRef.id);
                alert("Post submitted with ID: " + docRef.id);
            } else {
                alert("Please write something");
            }
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }
    useEffect(() => {
        // getPostsData();
        const unsub = onSnapshot(collection(db, "posts"), (Snapshot) => {
            const tempPosts = []
            Snapshot.forEach((doc) => {
                tempPosts.push(doc.data())
            });
            // console.log("posts", " => ", tempPosts);
            setpostsData(tempPosts);
        });
        return () => {
            unsub();
            console.log("unsubscribed")
        }
    }, [])

    return (
        <div className="flex flex-col w-full items-center">
            <div className="flex flex-col w-[92%]">
                <div className=" mt-6">
                    <img src={banner3} alt="" className=" w-full rounded-2xl h-64" />
                </div>
                <div className="sm:hidden block mt-5">
                    <Categories />
                </div>
                <div className="w-full mt-6">
                    <SelectedCategory />
                </div>
                <div className="w-full mt-6">
                    <FilterPosts />
                </div>
            </div>
            <div className="w-full mt-3 ">
                {currentPosts?.map((item, index) => {
                    return (
                        <Post key={index} name={item.name} views={item.views} likes={item.likes} dislikes={item.dislikes} shares={item.shares} postText={item.postText} profilePictureUrl={profile} topic={item.topic} />
                    )
                })}
            </div>
            <div className="flex justify-center mt-3 w-full">
                <Pagination postsPerPage={postsPerPage} totalPosts={postsData.length} paginate={paginate} prevPage={prevPage} nextPage={nextPage} />
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
                        <PostEditor parentCallback={getDataFromQuillEditor} postText={postText} />
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
                            <button onClick={sendPost} className="flex justify-center w-[31rem] h-11 items-center hover:bg-blue-700 bg-blue-600 rounded-2xl">

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