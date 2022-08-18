import logo from './logo.svg';
import './App.css';
import Sidebar from './Components/Sidebar';
import Feed from './Components/Feed';
import Trending from './Components/Trending';

function App() {
  return (
    <div className="App mx-12 px-10 ">
      <div className='flex container h-screen w-full'>
        <div className='w-1/4 border-r border-grey-300 px-8 py-2 flex flex-col justify-between' >

        <Sidebar/>
        </div>
        <div className='flex h-screen w-full overflow-y-scroll'>
          <div className='container w-3/4  border-r border-grey-300'>

          <Feed/>
          </div>
          <div className='container w-1/2  '>

          <Trending/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
