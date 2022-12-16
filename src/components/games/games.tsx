import Game from './game';
import classes from './games.module.css'
import React from 'react';
import { IUserHistory } from '../../App';

const Games = ({ userHistory, onDelete }: { userHistory: IUserHistory[], onDelete: (item: IUserHistory) => void }) => {
  const reversedHistory = [...userHistory].reverse();
  return (
    <div id='wrapper-bottom' className={classes.wrapper_bottom}>
      {userHistory.length > 0 ? reversedHistory.map((users: IUserHistory, index: number) => {
        return (
          <Game users={{ ...users, no: index + 1 }} key={index} onDelete={onDelete} />
        )
      }) :
        <p className='text-white text-2xl text-center font-bold'>No games yet!</p>
      }
    </div>
  )
}

export default Games;