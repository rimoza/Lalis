import Game from './game';

const Games = () => {
  return (
    <div id='wrapper-bottom' className='border-2 border-secondary rounded-md px-5 py-10  mt-10'>
        <div id='bottom' className='flex justify-between items-center mb-5'>
        <div id='game-number' className='bg-primary btn border-none hover:bg-success'>
          <span className='text-xl font-bold'>01</span>
        </div>
        <div id='game-score' className='border border-success rounded-md px-5 md:py-5 flex justify-between items-center space-x-10 md:w-1/2'>
          <div  className='bg-secondary w-10 h-10 flex justify-center items-center text-white font-bold rounded-md  md:w-1/2'>
          <span className=''>6</span>
          </div>
          <div  className='bg-secondary w-10 h-10 flex justify-center items-center text-white font-bold rounded-md md:w-1/2'>
          <span className=''>10</span>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Games;