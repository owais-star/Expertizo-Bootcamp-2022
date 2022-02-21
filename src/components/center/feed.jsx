import banner3 from "../../assets/images/travellogo.png";
import SelectedCategory from "./selected category post count/index"
import FilterPosts from "./filter posts/index"
import Post from "./post/index.jsx"
import profile from "../../assets/images/profile.jpg"


const postData = [
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

function App() {
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
            <div className="w-full mt-3">
                {postData.map((item) => {
                    return (
                        <Post name={item.name} views={item.views} likes={item.likes} dislikes={item.dislikes} shares={item.shares} postText={item.postText} profilePictureUrl={item.profilePictureUrl} topic={item.topic} />
                    )
                })}
            </div>
            <div className="w-full">
                pagination
            </div>
            <div className="w-[85%]">
                <div className="w-full">monetize a topic</div>
                <div className="w-full">create post</div>
                <div className="w-full">ad banner</div>
            </div>
        </div>
    );
}

export default App;