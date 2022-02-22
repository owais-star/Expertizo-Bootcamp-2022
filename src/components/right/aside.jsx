import Categories from "./categories/index";
import RecentTopics from "./recentTopics/index";

function Aside() {
    return (
        <div className="flex flex-col w-full items-center" >
            <div className="w-[88%] mt-7">
                <div className="w-full">
                    <Categories />
                </div>
                <div className="w-full h-10">
                    <RecentTopics />
                </div>
            </div>
        </div>
    );
}

export default Aside;