import GameScore from './GameScore';
import { IGameScore } from '../../App';
import classes from './top.module.css';

const Top = ({ increment, decrement, home, guest }: { increment: (a: string) => void, decrement: (a: string) => void, home:IGameScore, guest: IGameScore }) => {
  return (
    <div id='top' className={classes.top}>
      <GameScore title='home' increment={increment} decrement={decrement} value={home.value}  />
      <GameScore title='guest' increment={increment} decrement={decrement} value={guest.value} />
    </div>
  );
};

export default Top;