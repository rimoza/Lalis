import TopRight from './topRight';
import TopLeft from './topLeft';
import { IUser, UserType } from '../../App';
import classes from './top.module.css';

const Top = ({increment, decrement, guest, home}: {increment: (a: UserType) => void, decrement: (a: UserType) => void, guest: IUser, home: IUser}) => {
  return (
    <div id='top' className={classes.top}>
      <TopLeft increment={increment} decrement ={decrement} guest ={guest} />
      <TopRight increment={increment} decrement = {decrement} home ={home} />
     </div>
  )
}

export default Top;