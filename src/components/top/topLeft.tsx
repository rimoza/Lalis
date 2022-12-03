import AddButton from '../buttons/addButton'
import SubButton from '../buttons/subButton'
import { IUser } from '../../App'
import classes from './topLeft.module.css'
import { AiFillCaretUp, AiFillCaretDown } from 'react-icons/ai'

const TopLeft = ({increaseValue, decrement, guest}: {increaseValue: (guest: string) => void, decrement: (guest: string) =>void, guest: IUser}) => {
  return (
    <div id='topLeft' className={classes.container}>
      <span className='uppercase font-bold'>{guest.title}</span>
        <div>
        <AddButton onClick={() => increaseValue('guest')} >
          <AiFillCaretUp className={classes.icon} />
        </AddButton>
        </div>
        <div className={classes.value_wrapper}>
        <span className='text-xl font-bold' >{guest.value}</span>
        </div>
        <div>
        <SubButton onClick={() =>decrement('guest')}>
          <AiFillCaretDown className={classes.icon} />
        </SubButton>
        </div>
      </div>
  )
}

export default TopLeft;