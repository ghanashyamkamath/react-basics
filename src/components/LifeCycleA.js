import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'



 class LifeCycleA extends Component {
     constructor(props) {
         super(props)

         this.state = {
             name: 'ghanashyam'
         }
         console.log("LifeCycleA onstructor")
     }
     static getDerivedStateFromProps(props, state) {
         console.log("lifecyclea deriver")
         return null
     }
     componentDidMount() {
         console.log('lifecycle a mounted')
     }
    render() {
        console.log('lifecycle a render')

        
        return (
            <div>
                
                LifecycleA
                <LifeCycleB />
            </div>
        )
    }
}

export default LifeCycleA
