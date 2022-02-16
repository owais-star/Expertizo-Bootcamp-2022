import "./sidebar.css";
import logo from "../../assets/images/IMG_20211205_213225.jpg";
function Aside() {
    return (
        <div className="flex flex-col" >
            <div className="flex flex-col justify-between items-center">
                <div className=" my-5 ">
                    <img className="h-24 w-24 rounded-full" src={logo} alt="" />
                </div>
                <div className="">my 2 cents</div>
                <div>
                    <div></div>
                    <div></div>
                </div>

            </div>
        </div>
    );
}

export default Aside;