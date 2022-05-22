import "./App.css"
// import Todo from "./components/Todo/Todo"
import Algolia from "./components/Algolia/Algolia"
// import { TodoProvider } from "./context/todoContext"

function App() {
  return (
    <div className="container">
      <Algolia />
      {/* <TodoProvider>
        <Todo />
      </TodoProvider> */}
    </div>
  )
}

export default App
