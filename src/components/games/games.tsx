import React from 'react';
import Game from './game';
import classes from './games.module.css'
import { IGameHistory } from '../../App';

const Games = ({ gameHistory, onDelete }: { gameHistory: IGameHistory[], onDelete: (item: IGameHistory) => void }) => {
  const reversedHistory = [...gameHistory].reverse();
  return (
    <div id='wrapper-bottom' className={`${classes.wrapper_bottom} ${reversedHistory.length === 0 && 'border-warning'}`}>
      {reversedHistory.length > 0 ? reversedHistory.map((games: IGameHistory, index: number) => {
        return (
          <React.Fragment key={games.no}>
            <div className='flex justify-around'>
              <div></div>
              <div className={classes.container}>
                <span className={classes.title}>GUEST</span>
                <span className={classes.title}>HOME</span>
              </div>
            </div>
            <Game games={{ ...games, no: index + 1 }} key={index} onDelete={onDelete} />
          </React.Fragment>
        )
      }) :
        <p className='text-white text-2xl text-center font-bold'>No games yet!</p>
      }
    </div>
  );
};

export default Games;