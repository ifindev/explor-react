import "./App.css"
import Todo from "./components/Todo/Todo"
import { TodoProvider } from "./context/todoContext"

function App() {
  return (
    <div className="container">
      <TodoProvider>
        <Todo />
      </TodoProvider>
    </div>
  )
}

export default App
