// components
import Leftaside from './components/left/sidebar';
import Header from './components/header/header';
import Center from './components/center/feed';
import Rightaside from './components/right/aside'
import Footer from './components/Footer/index'
// screens 
import Homepage from "./screens/homepage"

function App() {
  return (
    <>
      <div className="flex ">
        <aside className=" w-2/6 bg-gradient-to-b from-gray-100 to-white sm:block hidden">
          <Leftaside />
        </aside>
        <div className="flex w-full flex-col">
          <header className='w-full h-24'>
            <Header />
          </header>
          <main className='flex'>
            <div className='sm:w-[70%] w-full'>
              <Center />
            </div>
            <div className='w-[30%] sm:block hidden'>
              <Rightaside />
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
