import AddButton from '../buttons/addButton'
import SubButton from '../buttons/subButton'
import { IUser } from '../../App'
import classes from './topRight.module.css'
import { AiFillCaretUp, AiFillCaretDown } from 'react-icons/ai'

const TopRight = ({increaseValue, decrement, home}: {increaseValue: (home: string) => void, decrement: (home: string) => void, home: IUser}) => {
  return (
    <div id='topRight' className={classes.container}>
     <span className='uppercase font-bold'>{home.title}</span> 
    <div>
    <AddButton onClick={() => increaseValue('home')}>
      <AiFillCaretUp className={classes.icon} />
    </AddButton>
    </div>
    <div className={classes.value_wrapper}>
    <span className='text-xl font-bold'>{home.value}</span>
    </div>
    <div>
    <SubButton onClick={() =>decrement('home')}>
      <AiFillCaretDown className={classes.icon} />
    </SubButton>
    </div>
  </div>
  )
}

export default TopRight;