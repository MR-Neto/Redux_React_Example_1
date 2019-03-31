import React, { Component } from 'react';
import './App.css';
import Counter from './Counter';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const initialState = {
  count: 10
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1,
      };
    case 'DECREMENT':
      return {
        count: state.count - 1,
      };
    case 'RESET':
      return {
        count: 0,
      };
    default:
      return state;
  }
}

const store = createStore(
    reducer,
    applyMiddleware(thunk)
  )



class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Counter />
        </Provider>
      </div>
    );
  }
}

export default App;
