import React, { Component } from 'react'
import Counter from './counter';

export default class counters extends Component {
  
  render() {
    console.log('Counters - Rendered');
    const { onReset, counters, onDelete, onIncrement, onDecrement} = this.props;
    return (
      <div>
        <button onClick = {onReset} className="btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map(counter => (
          <Counter 
            key={counter.id} 
            onDelete = {onDelete} 
            onIncrement = {onIncrement}
            onDecrement = {onDecrement}
            counter = {counter}
          />
        ))}
      </div>
    );
  }
}
