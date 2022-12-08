import buttonProps from './buttonProps';

const SubButton = ({ onClick, children}: buttonProps) => {
  return (
    <button className='btn bg-warning border-none hover:bg-accent' onClick={onClick}>
      {children}
    </button>
  )
}

export default SubButton;