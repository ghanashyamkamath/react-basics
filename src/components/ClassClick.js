import React, { Component } from 'react'

class ClassClick extends Component {
  clickHandler() {
    alert("class clicked the button");
  }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default ClassClick
