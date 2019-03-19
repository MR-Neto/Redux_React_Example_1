import React, { Component } from 'react'
import { connect } from "react-redux"

class Counter extends Component {

  increment = () => {


  }

  decrement = () => {


  }

  render() {
    return (
      <div>
        <h2>Counter</h2>
        <div>
          <button onClick={this.decrement}>-</button>
          <span>{this.props.count}</span>
          <button onClick={this.increment}>+</button>
        </div>
      </div>
    )
  }
}

export default connect()(Counter);