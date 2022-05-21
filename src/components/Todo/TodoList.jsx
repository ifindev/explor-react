import React from "react"
import { useTodoContext } from "../../context/todoContext"

import TodoItem from "./TodoItem"
import styles from "./todo.module.css"

const TodoList = () => {
  const { todoState } = useTodoContext()

  return (
    <div className={styles.todos}>
      {todoState.map((todo) => (
        <TodoItem todo={todo} />
      ))}
    </div>
  )
}

export default TodoList
