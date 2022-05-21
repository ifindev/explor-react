import React from "react"

import { useTodoContext } from "../../context/todoContext"

import styles from "./todos.module.css"

const TodoInput = () => {
  const { todoInput, setTodoInput, addTodoItem } = useTodoContext()
  return (
    <form className={styles.formInput}>
      <input
        type="text"
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
        className={styles.textInput}
      />
      <button
        onClick={addTodoItem}
        disabled={todoInput.length === 0}
        type="submit"
        className={styles.submitBtn}
      >
        +
      </button>
    </form>
  )
}

export default TodoInput
