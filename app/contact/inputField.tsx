
type InputFieldProps = {
  id: string,
  type: string,
  label: string,
  placeholder: string,
  maxLength: number
}

export default function InputField(props: InputFieldProps) {
  const { id, type, label, placeholder, maxLength } = props

  return (
    <>
      <p className="w-[85%] md:mt-0 mb-2 text-left text-white font-bold">
        {label}
      </p>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        maxLength={maxLength}
        autoComplete="on"
        className="flex w-[85%] min-w-[100px] mb-2 md:text-xl leading-7 md:leading-10 pl-2 rounded-md" />
    </>
  )
}