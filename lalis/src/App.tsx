import { AiFillCaretUp, AiFillCaretDown } from 'react-icons/ai';
function App() {
  
  return (
    <div className='bg-gray-200 w-full h-screen flex justify-center'>
    <div id='wrapper' className='bg-white px-5 py-5 my-5 rounded-md drop-shadow-md'>
     <div id='top' className='border-2 border-primary rounded-md p-5 flex justify-between space-x-10'>
     <div id='topLeft' className='flex flex-col items-center space-y-5 border border-success p-5 rounded-md'>
        <div>
        <button className='btn bg-success border-none hover:bg-secondary'>
          <AiFillCaretUp className='text-2xl text-white font-bold' />
        </button>
        </div>
        <div className='bg-white btn border-2 border-primary text-primary hover:text-white'>
        <span className='text-xl font-bold' >05</span>
        </div>
        <div>
        <button className='btn bg-warning border-none hover:bg-accent'>
          <AiFillCaretDown className='text-2xl text-white font-bold' />
        </button>
        </div>
      </div>
      <div id='topRight' className='flex flex-col items-center space-y-5 border border-secondary p-5 rounded-md'>
        <div>
        <button className='btn bg-success border-none hover:bg-secondary'>
          <AiFillCaretUp className='text-2xl text-white font-bold' />
        </button>
        </div>
        <div className='bg-white btn border-2 border-success text-secondary hover:text-white'>
        <span className='text-xl font-bold'>10</span>
        </div>
        <div>
        <button className='btn bg-warning border-none hover:bg-accent'>
          <AiFillCaretDown className='text-2xl text-white font-bold' />
        </button>
        </div>
      </div>
     </div>
     <div id='divider'>
      <button className='btn btn-outline border border-warning hover:bg-error text-secondary w-full mt-5'>Finish</button>
     </div>
      <div id='wrapper-bottom' className='border-2 border-secondary rounded-md px-5 py-10  mt-10'>
      <div id='bottom' className='flex justify-between mb-5'>
      <div id='game-number' className='bg-primary btn border-none hover:bg-success'>
        <span className='text-xl font-bold'>01</span>
      </div>
      <div id='game-score' className='border border-success rounded-md px-5 flex justify-between items-center space-x-10'>
        <div  className='bg-primary w-10 h-10 flex justify-center items-center text-white font-bold rounded-md'>
        <span className=''>05</span>
        </div>
        <div  className='bg-primary w-10 h-10 flex justify-center items-center text-white font-bold rounded-md'>
        <span className=''>10</span>
        </div>
      </div>
      </div>
      <div id='bottom' className='flex justify-between mb-5'>
      <div id='game-number' className='bg-primary btn border-none hover:bg-success'>
        <span className='text-xl font-bold'>01</span>
      </div>
      <div id='game-score' className='border border-success rounded-md px-5 flex justify-between items-center space-x-10'>
        <div  className='bg-primary w-10 h-10 flex justify-center items-center text-white font-bold rounded-md'>
        <span className=''>05</span>
        </div>
        <div  className='bg-primary w-10 h-10 flex justify-center items-center text-white font-bold rounded-md'>
        <span className=''>10</span>
        </div>
      </div>
      </div>
      <div id='bottom' className='flex justify-between'>
      <div id='game-number' className='bg-primary btn border-none hover:bg-success'>
        <span className='text-xl font-bold'>01</span>
      </div>
      <div id='game-score' className='border border-success rounded-md px-5 flex justify-between items-center space-x-10'>
        <div  className='bg-primary w-10 h-10 flex justify-center items-center text-white font-bold rounded-md'>
        <span className=''>05</span>
        </div>
        <div  className='bg-primary w-10 h-10 flex justify-center items-center text-white font-bold rounded-md'>
        <span className=''>10</span>
        </div>
      </div>
      </div>
      </div>
    </div>
  </div>
  )
}

export default App
