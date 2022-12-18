import  buttonProps from './buttonProps';

const AddButton = ({onClick, children}: buttonProps) => {
  return (
    <button className='btn bg-success border-none hover:bg-secondary' onClick={onClick}>
      {children}
    </button>
  )
}

export default AddButton