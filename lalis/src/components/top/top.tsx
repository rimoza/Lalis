import TopRight from './topRight';
import TopLeft from './topLeft';
import { IUser } from '../../App';

const Top = ({increaseValue, decrease, guest, home}: {increaseValue: (a: string) => void, decrease: (a: string) => void, guest: IUser, home: IUser}) => {
  return (
    <div id='top' className='border-2 border-primary rounded-md p-5 flex justify-between space-x-10'>
      <TopLeft increaseValue={increaseValue} decrease ={decrease} guest ={guest} />
      <TopRight increaseValue={increaseValue} decrease = {decrease} home ={home} />
     </div>
  )
}

export default Top;