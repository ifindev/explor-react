import React from "react"
import "./counter.css"
import useCounter from "../hooks/useCounter"

const Counter = () => {
  const { count, add, substract } = useCounter(0)

  return (
    <div className="counter-container">
      <button onClick={substract} className="counter-button">
        -
      </button>
      <span className="counter-count">{count}</span>
      <button onClick={add} className="counter-button">
        +
      </button>
    </div>
  )
}

export default Counter
