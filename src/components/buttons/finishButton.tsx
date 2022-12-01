import buttonProps from './buttonProps'

const FinishButton = ({onClick, children}: buttonProps) => {
  return (
    <button className='btn btn-outline border border-warning hover:bg-error text-secondary w-full mt-5' onClick={onClick}>
        {children}
    </button>
  )
}

export default FinishButton