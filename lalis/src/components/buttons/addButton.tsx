import  buttonProps from './buttonProps';

const AddButton = ({onClick, children}: buttonProps) => {

  return (
    <div>
    <button className='btn bg-success border-none hover:bg-secondary' onClick={onClick}>
      {children}
    </button>
    </div>
  )
}

export default AddButton