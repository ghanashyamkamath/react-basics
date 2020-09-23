import React, { Component } from 'react'



class LifeCycleB extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'ghanashyam'
        }
        console.log("LifeCycleB onstructor")
    }
    static getDerivedStateFromProps(props, state) {
        console.log("lifecycle b deriver")
        return null
    }
    componentDidMount() {
        console.log('lifecycle B mounted')
    }
    render() {
        console.log('lifecycle B render')


        return (
            <div>
                LifeCycleB
            </div>
        )
    }
}

export default LifeCycleB
