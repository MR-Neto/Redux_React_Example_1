import React, { Component } from 'react'
import { connect } from "react-redux"
import { increment, decrement } from './actions';

class Counter extends Component {

  increment = () => {
    this.props.increment();
  }

  decrement = () => {
    this.props.decrement();
  }

  render() {
    return (
      <div>
        <h2>Counter</h2>
        <div>
          <button onClick={this.decrement}> - </button>
          <span>{this.props.count}</span>
          <button onClick={this.increment}> + </button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state =>({
  count: state.count
});


const mapDispatchToProps = {
  increment,
  decrement,
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter);