import React, {FC, useEffect, useState} from "react";
import {TodoForm} from "../components/TodoForm";
import {TodoList} from "../components/TodoList";
import {ITodo} from "../interfases";

declare var confirm: (question: string) => boolean // для работы confirm без window.

export const ListPage: FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([])

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[]
    setTodos(saved)
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addHandler = (title: string) => {
    const newTodo: ITodo = {
      title,
      id: Date.now(),
      completed: false
    }
    setTodos(prevState => [newTodo, ...prevState])
  }
  // Почему не работает?
  // const toggleHandler = (id: number) => {
  //   setTodos(prevState => {
  //     const newState = prevState.map(todo => {
  //       if (todo.id === id) {
  //         todo.completed = !todo.completed
  //       }
  //       return todo
  //     })
  //     return [...newState]
  //   })
  // }

  const toggleHandler = (id: number) => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    })
    setTodos([...newTodos])
  }

  const deleteHandler = (id: number) => {
    // const sure: boolean = window.confirm('Вы уверены, что хотите удалить сообщение?')
    const sure: boolean = confirm('Вы уверены, что хотите удалить сообщение?')
    if (sure) {
      setTodos(prevState => {
        return prevState.filter(todo => todo.id !== id)
      })
    }
  }

  return(
    <>
      <TodoForm onAdd={addHandler}/>
      <TodoList todos={todos} onToggle={toggleHandler} onRemove={deleteHandler}/>
    </>
  )
}