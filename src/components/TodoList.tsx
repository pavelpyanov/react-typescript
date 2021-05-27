import React, {FC} from "react";
import {ITodo} from "../interfases";

type TodoListProps = {
  todos: ITodo[]
  onToggle(id: number): void
  onRemove: (id: number) => void
}

export const TodoList: FC<TodoListProps> = ({todos, onToggle, onRemove}) => {
  if (!todos.length) {
    return <p className='center'>Пока дел нет</p>
  }

  const removeHandler = (event: React.MouseEvent, id: number) => {
    event.preventDefault()
    onRemove(id)
  }

  return(
    <ul>
      {todos.map(todo => {
        const clases = ['todo']
        if (todo.completed) {
          clases.push('completed')
        }
        return(
          <li className={clases.join(' ')} key={todo.id}>
            <label>
              <input
                type='checkbox'
                checked={todo.completed}
                onChange={() => onToggle(todo.id)}
              />
              <span>{todo.title}</span>
              <i
                className='material-icons red-text'
                onClick={(event) => removeHandler(event, todo.id)}
              >delete</i>
            </label>
          </li>
        )
      })}
    </ul>
  )
}