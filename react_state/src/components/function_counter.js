function FunctionCounter() {
  let number = 0
  return (
    <div className="container">
        <h1>I'm a function component</h1>
      <h1>{number}</h1>
      <div className="buttonContainer">
        <button>+</button>
        <button>-</button>
      </div>
    </div>
  )
}

export default FunctionCounter
