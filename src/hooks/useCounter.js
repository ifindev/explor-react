import { useState } from "react"

const useCounter = (initialCount = 0) => {
  const [count, setCount] = useState(initialCount)
  const add = () => setCount(count + 1)
  const substract = () => setCount(count - 1)

  return { count, add, substract }
}

export default useCounter
