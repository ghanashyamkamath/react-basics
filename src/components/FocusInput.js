import React, { Component } from 'react'
import Input from './Input'

 class FocusInput extends Component {

    constructor(props) {
        super(props)
    
        this.componentRef=React.createRef()
    }
    clickHandlerr(){
        this.componentRef.current.focusInput()
    }
    
    render() {
        return (
            <div>
                <Input ref={this.componentRef}/>
                <button onClick={this.clickHandlerr}>Focus Input</button>
            </div>
        )
    }
}

export default FocusInput
