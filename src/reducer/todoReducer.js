import { ADD_TODO, REMOVE_TODO, COMPLETE_TODO } from "../actions/todoActions"

const todoReducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      const newTodo = {
        id: action.id,
        text: action.text,
        completed: false,
      }
      return [newTodo, ...state]

    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.id)

    case COMPLETE_TODO:
      const completeTodo = state.map((todo) => {
        if (todo.id === action.id) {
          return {
            ...todo,
            completed: !todo.completed,
          }
        } else {
          return todo
        }
      })

      return completeTodo

    default:
      return state
  }
}

export default todoReducer
