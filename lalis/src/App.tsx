import FinishButton from "./components/buttons/finishButton";
import Top from "./components/top/top";
import Games from './components/games/games';

function App() {

  return (
    <div className='bg-gray-200 w-full flex justify-center'>
    <div id='wrapper' className='bg-white px-5 py-5 my-5 rounded-md drop-shadow-md md:w-1/2'>
     <Top />
     <div id='divider'>
     <FinishButton >
      <span>Finish</span>
     </FinishButton>
     </div>
    <Games />
    </div>
  </div>
  )
}

export default App
