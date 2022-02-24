import ReactQuill from 'react-quill';
import React, { useState } from 'react';
import 'react-quill/dist/quill.snow.css';


const CustomToolbar = () => (
    <div id="toolbar" className='bg-blue-600 rounded-t-2xl h-10'>

        <button className="ql-bold ql-stroke " />
        <button className="ql-italic " />
        <button className="ql-link" />


    </div>
);



const Texteditor = () => {
    const [postText, setpostText] = useState("");
    const postData = {
        views: "12.5k",
        likes: "12.5k",
        dislikes: "12.5k",
        shares: "12.5k",
        postText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. N Praesent dictum luctus ante, id euismod libero dignissim in. Nullam faucibus sagittis sapien ac laoreet. Nam feugiat bibendum nisi. Nunc turpis nunc, egestas eu mollis nec, tincidunt eget lorem. Integer laoreet non tellus et viverra. Sed facilisis neque nec lorem laoreet condimentum. Morbi convallis interdum ultrices. Aenean luctus a lectus in lobortis. Nunc aliquet ornare dolor a semper.",
        name: "John dev",
        topic: "#The NFTs for a poem, an article, a short film, and a novel",
    };

    return (
        <div className="text-editor w-full">
            <CustomToolbar />
            <ReactQuill
                value={""}
                onChange={(e) => setpostText(e)}
                placeholder={"Write Something"}
                modules={Texteditor.modules}
                formats={Texteditor.formats}
                theme={"snow"} // pass false to use minimal theme
                className="h-20 w-full"
            />
        </div>
    );
}


Texteditor.modules = {
    toolbar: {
        container: "#toolbar",

    },
    clipboard: {
        matchVisual: false,
    }
};


Texteditor.formats = [
    "bold",
    "italic",
    "link",

];





export default Texteditor