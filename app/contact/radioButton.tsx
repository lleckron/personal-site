
type radioButtonProps = {
  id: string,
  label: string,
  checkedButton: string,
  setCheckedButton: ( type: string ) => void,
}

export default function RadioButton( props: radioButtonProps ) {
  const { id, label, checkedButton, setCheckedButton } = props

  return (
    <div className='flex flex-col-reverse justify-center items-center'>
      <label 
      htmlFor={id}
      className={`text-sm md:text-base font-bold hover:cursor-pointer select-none ${checkedButton === id ? 'text-white' : ' text-medium-gray'}`}
      onClick={() => setCheckedButton(id)}>
        { label }
      </label>
      <span
      id={id}
      className={`w-5 h-5 rounded-full mb-1 border-2 border-gray hover:cursor-pointer ${checkedButton === id ? 'bg-blue-500' : 'bg-hover-gray'}`}
      onClick={() => setCheckedButton(id)}>
      </span>
    </div>
  )
}