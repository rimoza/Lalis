import React from 'react';
import classes from './game.module.css'
import { IUserHistory } from '../../App';

const Game = ({ users, onDelete }: { users: IUserHistory, onDelete: (item: IUserHistory) => void }) => {
  const { guest, home, no } = users;

  return (
    <React.Fragment>
      <div id='bottom' className={classes.bottom}>
        <div id='game-number' className={classes.game_number}>
          <span className='text-xl font-bold'>{no}</span>
        </div>
        <div id='game-number' className='bg-warning btn border-none hover:bg-success' onClick={() => onDelete(users)}>
          <span className='text-xl font-bold'>X</span>
        </div>
        <div id='game-score' className={classes.game_score_wrapper}>
          <div className={classes.game_score}>
            <span className={classes.game_score_value_guest}>{guest.value}</span>
          </div>
          <div className={classes.game_score}>
            <span className={classes.game_score_value}>{home.value}</span>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Game;