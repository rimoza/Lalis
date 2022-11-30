import buttonProps from './buttonProps';

const SubButton = ({ onClick, children}: buttonProps) => {
  return (
    <div>
    <button className='btn bg-warning border-none hover:bg-accent' onClick={onClick}>
      {children}
    </button>
    </div>
  )
}

export default SubButton;