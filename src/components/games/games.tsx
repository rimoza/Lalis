import Game from './game';
import classes from './games.module.css'
import React from 'react';
import { IUserHistory } from '../../App';

const Games = ({ userHistory } : {userHistory: IUserHistory[]}) => {
  return (
    <div id='wrapper-bottom' className={classes.wrapper_bottom}>
      {userHistory.length > 0 ? userHistory.map((users: any, index: any) => {
        return (
          <React.Fragment>
            <div className='flex justify-around'>
              <div></div>
              <div className={classes.container}>
                <span className={classes.title}>{users.guest.title}</span>
                <span className={classes.title}>{users.home.title}</span>
              </div>
            </div>
            <Game users={users} key={index} />
          </React.Fragment>
        )
      }) :
        <p className='text-white text-2xl text-center font-bold'>No Games to show</p>
      }
    </div>
  )
}

export default Games;