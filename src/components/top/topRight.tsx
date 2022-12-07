import AddButton from '../buttons/addButton'
import SubButton from '../buttons/subButton'
import { IUser, UserType } from '../../App'
import classes from './topRight.module.css'
import { AiFillCaretUp, AiFillCaretDown } from 'react-icons/ai'

const TopRight = ({ increment, decrement, home }: { increment: (home: UserType) => void, decrement: (home: UserType) => void, home: IUser }) => {
  return (
    <div id='topRight' className={classes.container}>
      <span className='uppercase font-bold'>{home.title}</span>
      <div>
        <AddButton onClick={() => increment('home')}>
          <AiFillCaretUp className={classes.icon} />
        </AddButton>
      </div>
      <div className={classes.value_wrapper}>
        <span className='text-xl font-bold'>{home.value}</span>
      </div>
      <div>
        <SubButton onClick={() => decrement('home')}>
          <AiFillCaretDown className={classes.icon} />
        </SubButton>
      </div>
    </div>
  )
}

export default TopRight;