import AddButton from '../buttons/addButton'
import SubButton from '../buttons/subButton'
import { AiFillCaretUp, AiFillCaretDown } from 'react-icons/ai'
import { IUser } from '../../App'

const TopRight = ({increaseValue, decrease, home}: {increaseValue: (home: string) => void, decrease: (home: string) => void, home: IUser}) => {
  return (
    <div id='topRight' className='flex flex-col items-center space-y-5 border border-secondary p-5 rounded-md'>
     <span className='uppercase font-bold'>{home.title}</span> 
    <div>
    <AddButton onClick={() => increaseValue('home')}>
      <AiFillCaretUp className='text-2xl text-white font-bold' />
    </AddButton>
    </div>
    <div className='bg-white btn border-2 border-success text-secondary hover:text-white'>
    <span className='text-xl font-bold'>{home.value}</span>
    </div>
    <div>
    <SubButton onClick={() =>decrease('home')}>
      <AiFillCaretDown className='text-2xl text-white font-bold' />
    </SubButton>
    </div>
  </div>
  )
}

export default TopRight;