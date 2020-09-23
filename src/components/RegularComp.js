import React, { Component } from 'react'

 class RegularComp extends Component {
    render() {
        return (
            <div>
                regular   { this.props.name }
            </div>
        )
    }
}

export default RegularComp
