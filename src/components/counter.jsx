import React, { Component } from 'react'

export default class Counter extends Component {
  
  componentDidUpdate(prevProps, prevState){
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    if(prevProps.counter.value !== this.props.counter.value){
      // Ajex call and get new data from the server
    }
  }

  componentWillUnmount(){
    console.log("Counter - Unmount");
  }

  render() {
    console.log('Counter - Rendered');

    return(
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-outline-success btn-sm"
          >
            +
          </button> 
          <button
            onClick={() => this.props.onDecrement(this.props.counter)}
            className="btn btn-outline-secondary btn-sm m-2 "
          >
            -
          </button>
          <button 
            onClick = {() => this.props.onDelete(this.props.counter.id)} 
            className="btn btn-danger btn-sm "
          >
            Delete
          </button>
      </div>
    );
  }

  getBadgeClasses(){
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
  formatCount(){
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}


