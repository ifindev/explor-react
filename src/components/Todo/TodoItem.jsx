import React from "react"
import styles from "./todos.module.css"
import { useTodoContext } from "../../context/todoContext"

const TodoItem = ({ todo }) => {
  const { removeTodo, completeTodo } = useTodoContext()
  return (
    <div key={todo.id} className={styles.todoItem}>
      <p className={todo.completed && styles.strikethrough}>{todo.text}</p>
      <div className={styles.todoActions}>
        <span onClick={() => removeTodo(todo.id)}>✕</span>
        <span onClick={() => completeTodo(todo.id)}>✓</span>
      </div>
    </div>
  )
}

export default TodoItem
