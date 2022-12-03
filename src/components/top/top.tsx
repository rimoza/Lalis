import TopRight from './topRight';
import TopLeft from './topLeft';
import { IUser } from '../../App';
import classes from './top.module.css';

const Top = ({increaseValue, decrement, guest, home}: {increaseValue: (a: string) => void, decrement: (a: string) => void, guest: IUser, home: IUser}) => {
  return (
    <div id='top' className={classes.top}>
      <TopLeft increaseValue={increaseValue} decrement ={decrement} guest ={guest} />
      <TopRight increaseValue={increaseValue} decrement = {decrement} home ={home} />
     </div>
  )
}

export default Top;