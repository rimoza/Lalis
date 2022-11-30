import AddButton from '../buttons/addButton'
import SubButton from '../buttons/subButton'
import { AiFillCaretUp, AiFillCaretDown } from 'react-icons/ai'

const TopRight = () => {
  return (
    <div id='topRight' className='flex flex-col items-center space-y-5 border border-secondary p-5 rounded-md'>
    <div>
    <AddButton>
      <AiFillCaretUp className='text-2xl text-white font-bold' />
    </AddButton>
    </div>
    <div className='bg-white btn border-2 border-success text-secondary hover:text-white'>
    <span className='text-xl font-bold'>6</span>
    </div>
    <div>
    <SubButton>
      <AiFillCaretDown className='text-2xl text-white font-bold' />
    </SubButton>
    </div>
  </div>
  )
}

export default TopRight;