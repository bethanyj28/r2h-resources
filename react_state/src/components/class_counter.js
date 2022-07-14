import React from 'react'

class ClassCounter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {number: 0}
  }

  subtract() {
    this.setState((state) => {
      return {number: state.number - 1}
    })
  }

  add() {
    this.setState((state) => {
      return {number: state.number + 1}
    })
  }

  render() {
    return (
      <div className="container">
        <h1>I'm a class component</h1>
        <h1>{this.state.number}</h1>
        <div className="buttonContainer">
          <button onClick={() => this.subtract()}>-</button>
          <button onClick={() => this.add()}>+</button>
        </div>
      </div>
    )
  }
}

export default ClassCounter
