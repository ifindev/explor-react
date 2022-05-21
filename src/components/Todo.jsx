import React, { useState, useReducer } from "react"
import todoReducer, {
  ADD_TODO,
  REMOVE_TODO,
  COMPLETE_TODO,
} from "../reducer/todoReducer"

import styles from "./todo.module.css"

const Todo = () => {
  const [id, setId] = useState(0)
  const [text, setText] = useState("")
  const initialState = []

  const [todos, dispatch] = useReducer(todoReducer, initialState)

  const addTodoItem = (e) => {
    e.preventDefault()
    const newId = id + 1
    setId(newId)
    dispatch({
      type: ADD_TODO,
      id: newId,
      text: text,
    })
    setText("")
  }

  const removeTodo = (id) => {
    dispatch({ type: REMOVE_TODO, id: id })
  }

  const completeTodo = (id) => {
    dispatch({ type: COMPLETE_TODO, id: id })
  }

  return (
    <div>
      <h1>Todo Example</h1>
      <form onSubmit={addTodoItem} className={styles.formInput}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className={styles.textInput}
        />
        <button
          disabled={text.length === 0}
          type="submit"
          className={styles.submitBtn}
        >
          +
        </button>
      </form>
      <div className={styles.todos}>
        {todos.map((todo) => (
          <div key={todo.id} className={styles.todoItem}>
            <p className={todo.completed && styles.strikethrough}>
              {todo.text}
            </p>
            <div className={styles.todoActions}>
              <span onClick={() => removeTodo(todo.id)}>✕</span>
              <span onClick={() => completeTodo(todo.id)}>✓</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Todo
