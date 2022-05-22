import "./App.css"
// import Todo from "./components/Todo/Todo"
// import Algolia from "./components/Algolia/Algolia"
// import { TodoProvider } from "./context/todoContext"
import Modal from "./components/Modal/Modal"

function App() {
  return (
    <div className="container">
      <Modal />
      {/* <Algolia /> */}
      {/* <TodoProvider>
        <Todo />
      </TodoProvider> */}
    </div>
  )
}

export default App
