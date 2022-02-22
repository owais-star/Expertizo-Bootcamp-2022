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
        <aside className=" w-2/6 bg-gradient-to-b from-gray-100 to-white">
          <Leftaside />
        </aside>
        <div className="w-full h-full">
          <header className='w-full h-24'>
            <Header />
          </header>
          <main className='flex'>
            <div className='w-[70%]'>
              <Center />
            </div>
            <div className='w-[30%]'>
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
