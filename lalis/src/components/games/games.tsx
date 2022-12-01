import React from 'react';
import Game from './game';

const Games = ({ userHistory }: any) => {
  return (
    <div id='wrapper-bottom' className='border-2 border-secondary rounded-md px-5 py-10  mt-10'>
      {userHistory.length > 0 && userHistory.map((users: any, index: any) => {
        
        return (
          <React.Fragment>
          <div className='flex justify-around'>
          <div></div>
          <div className='flex justify-center items-center ml-48 space-x-20'>
          <span className='uppercase font-bold mb-1'>{users.guest.title}</span>
          <span className='uppercase font-bold mb-1'>{users.home.title}</span>
          </div>
          </div>
          <Game users={users} key={index} />
          </React.Fragment>
        )
      })}
    </div>
  )
}

export default Games;