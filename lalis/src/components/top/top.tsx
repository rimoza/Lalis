import TopRight from './topRight';
import TopLeft from './topLeft';

const Top = () => {
  return (
    <div id='top' className='border-2 border-primary rounded-md p-5 flex justify-between space-x-10'>
      <TopLeft />
      <TopRight />
     </div>
  )
}

export default Top;