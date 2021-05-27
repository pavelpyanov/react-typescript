import React, {FC, useRef} from "react";

interface TodoFormProps{
  onAdd(title: string): void
}

export const TodoForm: FC<TodoFormProps> = (props) => {
  // const [title, setTitle] = useState<string>('')
  // const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setTitle(event.target.value)
  // }
  // const keyPressHandler = (event: React.KeyboardEvent) => {
  //   if (event.key === 'Enter') {
  //     console.log(title)
  //     setTitle('')
  //   }
  // }
  const inputRef = useRef<HTMLInputElement>(null)
  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      props.onAdd(inputRef.current!.value)
      inputRef.current!.value = ''
    }
  }

  return(
    <div className='mt-2 input-field'>
      <input
        ref={inputRef}
        // value={title}
        type='text'
        id='title'
        // onChange={changeHandler}
        onKeyPress={keyPressHandler}
      />
      <label className='active' htmlFor='title'>Введите название дела</label>
    </div>
  )
}