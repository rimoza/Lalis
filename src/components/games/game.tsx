import classes from './game.module.css'
import React from 'react';

const Game = ({ users }: any) => {
  return (
    <React.Fragment>
      <div id='bottom' className={classes.bottom}>
        <div id='game-number' className={classes.game_number}>
          <span className='text-xl font-bold'>{users.no}</span>
        </div>
        <div id='game-score' className={classes.game_score_wrapper}>
          <div className={classes.game_score}>
            <span className={classes.game_score_value}>{users.guest.value}</span>
          </div>
          <div className={classes.game_score}>
            <span className={classes.game_score_value}>{users.home.value}</span>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Game;