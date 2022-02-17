import Leftaside from '../components/left/sidebar';
import Header from '../components/header';
import Center from '../components/center/feed';
import Rightaside from '../components/right/aside'

function Homepage() {
    return (
        <div className="flex ">
            <aside className=" w-2/6 h-[100vh] bg-gradient-to-b from-gray-400 to-white">
                <Leftaside />
            </aside>
            <div className="w-full h-full">
                <header className='w-full h-32 bg-cyan-400'>
                    <Header />
                </header>
                <main className='flex'>
                    <div className='w-[70%] bg-red-500'>
                        <Center />
                    </div>
                    <div className='w-[30%] bg-orange-200'>
                        <Rightaside />
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Homepage;