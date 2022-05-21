import { createContext, useContext, useReducer, useState } from "react"

import todoReducer from "../reducer/todoReducer"
import { ADD_TODO, REMOVE_TODO, COMPLETE_TODO } from "../actions/todoActions"

const TodoContext = createContext([])

const TodoProvider = ({ children }) => {
  const [todoId, setTodoId] = useState(0)
  const [todoInput, setTodoInput] = useState("")
  const initialState = []

  const [todoState, dispatch] = useReducer(todoReducer, initialState)

  const addTodoItem = () => {
    const newId = todoId + 1
    setTodoId(newId)
    dispatch({
      type: ADD_TODO,
      id: newId,
      text: todoInput,
    })
    setTodoInput("")
  }

  const removeTodo = (id) => {
    dispatch({ type: REMOVE_TODO, id: id })
  }

  const completeTodo = (id) => {
    dispatch({ type: COMPLETE_TODO, id: id })
  }

  return (
    <TodoContext.Provider
      value={{
        todoState,
        todoId,
        todoInput,
        setTodoInput,
        addTodoItem,
        removeTodo,
        completeTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  )
}

const useTodoContext = () => {
  return useContext(TodoContext)
}

export { TodoContext, TodoProvider, useTodoContext }
