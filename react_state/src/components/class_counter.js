import React from 'react'

class ClassCounter extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let number = 0
    return (
      <div className="container">
        <h1>I'm a class component</h1>
        <h1>{number}</h1>
        <div className="buttonContainer">
          <button>+</button>
          <button>-</button>
        </div>
      </div>
    )
  }
}

export default ClassCounter
