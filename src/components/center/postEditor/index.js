import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


const CustomToolbar = () => (
    <div id="toolbar" className='bg-blue-600 rounded-t-2xl h-10'>

        <button className="ql-bold ql-stroke " />
        <button className="ql-italic " />
        <button className="ql-link" />


    </div>
);



const Texteditor = (props) => {

    return (
        <div className="text-editor w-full">
            <CustomToolbar />
            <ReactQuill
                value={props.postText}
                onChange={(e) => props.parentCallback(e)}
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