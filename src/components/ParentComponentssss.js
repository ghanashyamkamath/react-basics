import React, { Component } from 'react'
import MemoComp from './MemoComp'
import PureComp from './PureComp'
import RegularComp from './RegularComp'

 class ParentComponentssss extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "ghanashyam"
        }
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: "ghanashyam"
            })

        }, 2000)
    }
    render() {
        return (
            <div>
                <MemoComp name={this.state.name}/>
                {/* parentcomponent */}
                {/* <RegularComp name={this.state.name}/> */}
                {/* <PureComp name={this.state.name}/>  */}
            </div>
        )
    }
}

export default ParentComponentssss
