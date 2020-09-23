import React, { Component } from 'react'

 class Counter extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count : 0
        }
    }
    increment(){
        this.setState((prevState,props) => ({
             count : prevState.count + props.addValue
        }))
    }
    

    render() {
        return (
            <div>
                Count - {this.state.count}
                <button onClick={()=> this.increment()}>Increment</button>
            </div>
        )
    }
}

export default Counter
