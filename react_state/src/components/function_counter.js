import React, {useState} from 'react'

function FunctionCounter() {
  const [number, setNumber] = useState(0)

  return (
    <div className="container">
        <h1>I'm a function component</h1>
      <h1>{number}</h1>
      <div className="buttonContainer">
        <button onClick={() => setNumber(number - 1)}>-</button>
        <button onClick={() => setNumber(number + 1)}>+</button>
      </div>
    </div>
  )
}

export default FunctionCounter
