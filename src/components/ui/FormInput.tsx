import { ChangeEvent } from 'react'

interface FormInputProps {
  label?: string
  type?: string
  name?: string
  id?: string
  value?: string
  onChangeHandler: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

const FormInput: React.FC<FormInputProps> = ({ label, type, name, id, value, onChangeHandler }) => {
  return (
    <div className="flex flex-col gap-3">
      <label htmlFor={id} className="text-[12px]">
        {label}
      </label>
      <div className="glass rounded-lg">
        <input
          onChange={onChangeHandler}
          type={type}
          name={name}
          id={id}
          value={value}
          className="bg-transparent py-3 px-5 outline-none border-none w-full"
        />
      </div>
    </div>
  )
}

export default FormInput
