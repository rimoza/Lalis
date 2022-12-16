import Game from './game';
import classes from './games.module.css'
import { IUserHistory } from '../../App';

const Games = ({ userHistory, onDelete }: { userHistory: IUserHistory[], onDelete: (item: IUserHistory) => void }) => {
  const reversedHistory = [...userHistory].reverse();
  console.log('reversedHistory:', reversedHistory)
  return (
    <div id='wrapper-bottom' className={classes.wrapper_bottom}>
      {userHistory.length > 0 ? reversedHistory.map((users: IUserHistory, index: number) => {
        return (
          <Game users={{ ...users }} key={index} onDelete={onDelete} />
        )
      }) :
        <p className='text-white text-2xl text-center font-bold'>No games yet!</p>
      }
    </div>
  )
}

export default Games;