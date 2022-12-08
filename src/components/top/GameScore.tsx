import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import AddButton from '../buttons/addButton';
import SubButton from '../buttons/subButton';
import classes from './gameScore.module.css';

const GameScore = ({ increment, decrement, title, value }: { increment: (a: string) => void, decrement: (a: string) => void, title: string, value: number}) => {
  return (
    <div className={`${classes.container} ${title === 'home' ? 'border-secondary' : 'border-success'}`}>
      <span className='uppercase font-bold'>{title.toUpperCase()}</span>
      <div>
        <AddButton onClick={() => increment(title.toLowerCase())} >
          <AiOutlinePlus className={classes.icon} />
        </AddButton>
      </div>
      <div className={classes.value_wrapper}>
        <span className='text-xl font-bold' >{value}</span>
      </div>
      <div>
        <SubButton onClick={() => decrement(title.toLowerCase())}>
          <AiOutlineMinus className={classes.icon} />
        </SubButton>
      </div>
    </div>
  );
};

export default GameScore;