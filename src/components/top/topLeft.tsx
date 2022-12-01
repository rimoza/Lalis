import AddButton from '../buttons/addButton'
import SubButton from '../buttons/subButton'
import { IUser } from '../../App'
import { AiFillCaretUp, AiFillCaretDown } from 'react-icons/ai'

const TopLeft = ({increaseValue, decrease, guest}: {increaseValue: (guest: string) => void, decrease: (guest: string) =>void, guest: IUser}) => {
  return (
    <div id='topLeft' className='flex flex-col items-center space-y-5 border border-success p-5 rounded-md'>
      <span className='uppercase font-bold'>{guest.title}</span>
        <div>
        <AddButton onClick={() => increaseValue('guest')} >
          <AiFillCaretUp className='text-2xl text-white font-bold' />
        </AddButton>
        </div>
        <div className='bg-white btn border-2 border-primary text-primary hover:text-white'>
        <span className='text-xl font-bold' >{guest.value}</span>
        </div>
        <div>
        <SubButton onClick={() =>decrease('guest')}>
          <AiFillCaretDown className='text-2xl text-white font-bold' />
        </SubButton>
        </div>
      </div>
  )
}

export default TopLeft;