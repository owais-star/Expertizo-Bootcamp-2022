import Aside from '../components/left/sidebar';

function Homepage() {
    return (
        <div className="flex ">
            <div className="basis-1/4 h-100  bg-gray-200">
                <Aside />
            </div>
            <div className="basis-1 h-full bg-blue-200">
                <div>header</div>
                <div>
                    <div>center</div>
                    <div>right aside</div>
                </div>
            </div>
        </div>
    );
}

export default Homepage;