import React from 'react';

const Game = ({ users }: any) => {
  return (
    <React.Fragment>
      <div id='bottom' className='flex justify-between items-center mb-5'>
        <div id='game-number' className='bg-primary btn border-none hover:bg-success'>
          <span className='text-xl font-bold'>{users.no}</span>
        </div>
        <div id='game-score' className='border border-success rounded-md px-5 md:py-5 flex justify-between items-center space-x-10 md:w-1/2'>
          <div className='flex justify-center items-center'>
            <span className='bg-secondary w-14 h-10 text-white text-3xl font-bold flex justify-center items-center rounded-md'>{users.guest.value}</span>
          </div>
          <div className='flex justify-center items-center'>
            <span className='bg-secondary w-14 h-10 text-white text-3xl font-bold flex justify-center items-center rounded-md'>{users.home.value}</span>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Game;