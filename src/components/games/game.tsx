import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import classes from './game.module.css';
import { IGameHistory } from '../../App';

const Game = ({ games, onDelete }: { games: IGameHistory, onDelete: (item: IGameHistory) => void }) => {
  const { homeScore, guestScore, no } = games;

  return (
    <React.Fragment>
      <div id='bottom' className={classes.bottom}>
        <div id='game-number' className={classes.game_number}>
          <span className='text-xl font-bold'>{no}</span>
        </div>
        <div id='game-number' className='bg-warning btn border-none hover:bg-success' onClick={() => onDelete(games)}>
          <span className='text-xl font-bold'>
            <AiOutlineClose />
          </span>
        </div>
        <div id='game-score' className={classes.game_score_wrapper}>
          <div className={classes.game_score}>
            <span className={classes.game_score_value_guest}>{homeScore.value}</span>
          </div>
          <div className={classes.game_score}>
            <span className={classes.game_score_value}>{guestScore.value}</span>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Game;