import React, { Component } from 'react'

 class EventBind extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             message: "helo"
        }
        this.clickHandler = this.clickHandler.bind(this);
    }
    clickHandler(){
        this.setState({
            message : "worked"
        })
    }
    
    


    render() {
        return (
          <div>
            {this.state.message}
            {/* <button onClick={this.clickHandler.bind(this)}>Click Here</button> */}
            {/* <button onClick={()=>this.clickHandler()}>Click Here</button> */}
            <button onClick={this.clickHandler}>Click Here</button>
          </div>
        );
    }
}

export default EventBind
